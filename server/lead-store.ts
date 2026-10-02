import { get, put } from '@vercel/blob';
import type { Lead, LeadStore } from '../functions/src/leads/types.js';
import { LeadError } from '../functions/src/leads/validation.js';

export function blobLeadStore(storage = { get, put }): LeadStore {
  const path = (id: string) => `leads/${id}.json`;
  const read = async (id: string): Promise<Lead> => {
    const result = await storage.get(path(id), { access: 'private', useCache: false });
    if (!result || result.statusCode !== 200) throw new LeadError('STORAGE_UNAVAILABLE', 503);
    return JSON.parse(await new Response(result.stream).text()) as Lead;
  };
  return {
    serverTimestamp: () => new Date().toISOString(),
    async createOrGet(lead) {
      try {
        await storage.put(path(lead.id), JSON.stringify(lead), {
          access: 'private', addRandomSuffix: false, allowOverwrite: false,
          contentType: 'application/json',
        });
        return { created: true, lead };
      } catch (error) {
        // A rejected create may be a concurrent retry or an ambiguous network failure.
        // Only acknowledge it if the exact payload is already durably stored.
        let stored: Lead;
        try { stored = await read(lead.id); } catch { throw error; }
        if (stored.payloadHash !== lead.payloadHash) throw new LeadError('REQUEST_CONFLICT', 409);
        return { created: false, lead: stored };
      }
    },
    async recordMessaging(id, messaging) {
      const lead = await read(id);
      await storage.put(path(id), JSON.stringify({ ...lead, messaging,
        messageStatus: messaging.user.status, notificationStatus: messaging.internal.status,
        updatedAt: new Date().toISOString() }), {
        access: 'private', addRandomSuffix: false, allowOverwrite: true, contentType: 'application/json',
      });
    },
  };
}
