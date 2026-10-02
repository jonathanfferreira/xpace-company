import { createLeadHandler } from '../functions/src/leads/handler.js';
import { createLeadService } from '../functions/src/leads/service.js';
import { createMessenger } from '../functions/src/leads/messaging.js';
import type { SafeLog } from '../functions/src/leads/types.js';
import { blobLeadStore } from '../server/lead-store.js';

const log: SafeLog = (event, details) => console.info(event, details);
const handle = createLeadHandler(createLeadService({
  store: blobLeadStore(),
  sendMessages: createMessenger(() => ({
    apiKey: process.env.EVOLUTION_API_KEY, serverUrl: process.env.SERVER_URL,
    instance: process.env.EVOLUTION_INSTANCE, recipients: process.env.LEAD_NOTIFICATION_PHONES,
  })), log,
}), log);

// Web-standard Vercel Function: bound the body before parsing or persistence.
export async function POST(request: Request) {
  const headers = { 'Cache-Control': 'no-store' };
  const origin = request.headers.get('origin');
  const allowed = new Set(['https://xpacecompany.com', 'https://www.xpacecompany.com',
    'https://xpace-company.vercel.app',
    ...[process.env.VERCEL_URL, process.env.VERCEL_BRANCH_URL, process.env.VERCEL_PROJECT_PRODUCTION_URL]
      .filter(Boolean).map(host => `https://${host}`),
    ...(process.env.LEAD_ALLOWED_ORIGINS || '').split(',').map(value => value.trim()).filter(Boolean)]);
  if (origin && !allowed.has(origin)) return Response.json({ success: false, persisted: false,
    error: { code: 'ORIGIN_NOT_ALLOWED' } }, { status: 403, headers });
  if (!/^application\/json(?:;|$)/i.test(request.headers.get('content-type') || ''))
    return Response.json({ success: false, persisted: false, error: { code: 'JSON_REQUIRED' } }, { status: 415, headers });
  const reader = request.body?.getReader();
  let size = 0;
  const chunks: Uint8Array[] = [];
  if (reader) {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 16384) {
        await reader.cancel();
        return Response.json({ success: false, persisted: false, error: { code: 'PAYLOAD_TOO_LARGE' } }, { status: 413, headers });
      }
      chunks.push(value);
    }
  }
  let body: unknown;
  try { body = JSON.parse(Buffer.concat(chunks).toString('utf8')); }
  catch { return Response.json({ success: false, persisted: false, error: { code: 'INVALID_JSON' } }, { status: 400, headers }); }
  const result = await handle({ method: 'POST', path: '/leads', body,
    contentType: request.headers.get('content-type') || '', bodyBytes: size });
  return Response.json(result.body, { status: result.status, headers });
}

export function GET() {
  return Response.json({ success: false, persisted: false, error: { code: 'METHOD_NOT_ALLOWED' } },
    { status: 405, headers: { Allow: 'POST', 'Cache-Control': 'no-store' } });
}
