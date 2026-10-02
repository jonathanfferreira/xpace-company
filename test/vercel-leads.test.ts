import { test } from 'node:test';
import assert from 'node:assert/strict';
import { blobLeadStore } from '../server/lead-store';
import { createLeadService } from '../functions/src/leads/service';
import { validateLead } from '../functions/src/leads/validation';
import { POST, GET } from '../api/leads';

test('concurrent retries persist once, message once, and reject divergent payloads', async () => {
  const files = new Map<string, string>();
  const storage = {
    async put(path: string, body: string, options: { allowOverwrite?: boolean; access: string }) {
      assert.equal(options.access, 'private');
      if (files.has(path) && !options.allowOverwrite) throw new Error('Already exists');
      files.set(path, body);
      return {};
    },
    async get(path: string, options: { useCache?: boolean }) {
      assert.equal(options.useCache, false);
      const body = files.get(path);
      return body ? { statusCode: 200, stream: new Response(body).body } : null;
    },
  };
  let messages = 0;
  const save = createLeadService({ store: blobLeadStore(storage as any), log: () => {},
    sendMessages: async () => { messages++; return { user: { status: 'NOT_CONFIGURED' }, internal: { status: 'NOT_CONFIGURED' } }; } });
  const payload = validateLead({ requestId: '12345678-1234-4123-8123-123456789abc',
    leadType: 'CONTACT', name: 'Teste local', phone: '47999998888', message: 'Teste' });
  const results = await Promise.all([save(payload), save(payload)]);
  assert.ok(results.every(result => result.persisted));
  assert.equal(messages, 1);
  assert.equal(files.size, 1);
  assert.equal(JSON.parse([...files.values()][0]).notificationStatus, 'NOT_CONFIGURED');
  await assert.rejects(() => save({ ...payload, name: 'Outro nome' }), { code: 'REQUEST_CONFLICT' });
});

test('storage outage never produces a persisted success', async () => {
  const store = blobLeadStore({ put: async () => { throw new Error('offline'); }, get: async () => null } as any);
  await assert.rejects(() => store.createOrGet({ id: 'test' } as any), /offline/);
});

test('API rejects cross-origin, malformed, invalid and oversized bodies before writing', async () => {
  const request = (body: string, origin = 'https://xpacecompany.com', type = 'application/json') =>
    new Request('https://xpacecompany.com/api/leads', { method: 'POST', headers: { origin, 'content-type': type }, body });
  assert.equal((await POST(request('{}', 'https://attacker.example'))).status, 403);
  assert.equal((await POST(request('{}', undefined, 'text/plain'))).status, 415);
  assert.equal((await POST(request('{'))).status, 400);
  assert.equal((await POST(request('{}'))).status, 400);
  assert.equal((await POST(request(' '.repeat(16385)))).status, 413);
  assert.equal(GET().status, 405);
});
