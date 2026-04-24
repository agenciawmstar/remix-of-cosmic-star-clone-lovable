export const config = { runtime: 'edge' };

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  const appsScriptUrl = process.env.APPS_SCRIPT_URL ?? 'https://script.google.com/macros/s/AKfycbz0X0q7J3VfsGCkCxDqUCLG-6yAGfz5AsaHiP0lGYszyg48rP_T8Tdoimg-5DsVDzFG4w/exec';

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  try {
    const upstream = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      // server-to-server: no CORS restrictions, redirects followed automatically
    });

    if (!upstream.ok) {
      return json({ error: `Upstream error: ${upstream.status}` }, 502);
    }

    return json({ success: true }, 200);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return json({ error: message }, 500);
  }
}

function json(data: object, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
