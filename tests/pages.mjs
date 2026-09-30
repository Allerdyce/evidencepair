// Every HTML page in the built site, as URL paths. Tests iterate over all of
// them, so a new content file is covered without editing a test.
import { readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

export function listPages(root = '_site') {
  const out = [];
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      if (statSync(p).isDirectory()) walk(p);
      else if (name.endsWith('.html')) {
        const rel = '/' + relative(root, p).split('\\').join('/');
        out.push(rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) : rel);
      }
    }
  };
  walk(root);
  return out.sort();
}

export const REQUIRED = ['/', '/privacy/', '/terms/', '/security/', '/support/', '/docs/'];
