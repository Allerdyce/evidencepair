// Minimal static server for _site. No dependencies, no injected scripts, so what
// the browser tests measure is exactly what a static host would serve.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';

const root = process.env.SITE_DIR ?? '_site';
const port = Number(process.env.PORT ?? 8787);
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml',
  '.webmanifest': 'application/manifest+json', '.json': 'application/json',
};

async function resolve(urlPath) {
  let p = normalize(decodeURIComponent(urlPath.split('?')[0]));
  if (p.includes('..')) return null;
  let file = join(root, p);
  try {
    const s = await stat(file);
    if (s.isDirectory()) file = join(file, 'index.html');
    await stat(file);
    return file;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  const file = await resolve(req.url ?? '/');
  if (!file) {
    const nf = join(root, '404.html');
    let body = 'Not found';
    try { body = await readFile(nf); } catch {}
    res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    res.end(body);
    return;
  }
  const body = await readFile(file);
  res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream', 'content-length': body.length });
  res.end(body);
}).listen(port, '127.0.0.1', () => console.log(`serving ${root} on http://127.0.0.1:${port}`));
