# Provenance

Spec 30 §3 rule 5: no claim about an app may be written that the app's own documentation does not support. This folder is where each claim is traced.

| File | What it is |
|---|---|
| `data-inventory/<app>.md` | The data inventory for an app, one numbered line per fact, each citing its source in the app repository. **Draft, derived by the site builder from the app repository; its proper home is the app repository** (spec 30 §7). Since 2026-10-01 the app repository has its own (`apps/controlled-project-config/docs/data-inventory.md`), and the site's inventory follows it. |
| `privacy-traceability.md` | Every factual sentence on the privacy page and the DPA → the inventory line(s) it rests on (SITE-AC-05). |
| `claims.md` | Every factual claim on the home, app, docs, terms and security pages → its source (SITE-AC-02). |

Source repository: `github.com/Allerdyce/atlassian-apps`, first read at commit `0f51c26` (2026-09-29; specs 00 v1.5, 01 v1.6, 10 v1.5, 20 v1.4). **Re-read at `7fcc76f` (2026-10-06; specs 00 v1.6, 01 v1.6, 10 v1.6, 20 v1.4)** for the app page, the docs, the privacy page, the DPA and the terms. For the app and the shared core, `7fcc76f` is identical to the released build `ba8d3d8`. Facts about Atlassian's platform cite Atlassian's own documentation by URL, with the date each page was last updated.

Grading (spec 30 §9): SITE-AC-02 and SITE-AC-05 are graded by an agent that has the sources and did not draft the pages. Record each grading run in `DECISIONS.md`.
