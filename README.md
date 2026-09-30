# EvidencePair vendor site

The public site for EvidencePair LLC's Atlassian apps: home, one page per app, documentation, security, privacy, terms and support. Built to spec 30 (see `DECISIONS.md` for deviations).

**Rules that never bend:** static HTML only; zero third-party requests at runtime; no cookies, no browser storage, no analytics; no claim about an app that its own repository does not support.

## Layout

```
content/          pages (Markdown and Nunjucks); apps/, docs/<app>/, legal/
templates/        layouts and partials
data/site.json    name, domain, addresses, draft flag, response target, host
assets/           one stylesheet and a favicon, copied as-is
provenance/       data inventory, privacy traceability, claims register
scripts/          checks (links, reproducibility, content model, pending, live)
tests/            Playwright browser tests (third-party requests, storage, axe, 360px, dark, bytes)
HUMAN-TASKS.md    what only Ali can do
DECISIONS.md      rulings and deviations
```

## Working on it

```sh
npm ci
npm run build            # → _site/
npm run serve            # http://127.0.0.1:8787, plain static server
npm test                 # build + every check + browser tests
```

Individual checks: `check:pending`, `check:links` (set `SKIP_EXTERNAL=1` offline), `test:browser`, `check:content-model`, `check:reproducible`, and `check:live https://<host>` after a deploy.

## Adding an app

Add `content/apps/<slug>.md` with front matter `name`, `product`, `tagline`, `price`, `status` (`live`, `in review`, `coming soon`), `marketplaceUrl`, `docsPath`, `updated`, and a folder `content/docs/<slug>/` whose pages carry `title`, `app: <slug>` and `order`. Nothing else changes. A `coming soon` app renders with no Marketplace link, no price and no purchase language.

Every claim on the new pages goes into `provenance/claims.md` with its source, and the privacy page is extended only from that app's data inventory.

## Pending statements

While `draft` is true in `data/site.json`, a page may say `{% pending "…" "HUMAN-TASKS H-nn" %}` where a fact is not yet established. Setting `draft` to false makes the build fail on any that remain.
