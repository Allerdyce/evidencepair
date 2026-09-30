# Provenance

Spec 30 §3 rule 5: no claim about an app may be written that the app's own documentation does not support. This folder is where each claim is traced.

| File | What it is |
|---|---|
| `data-inventory/<app>.md` | The data inventory for an app, one numbered line per fact, each citing its source in the app repository. **Draft, derived by the site builder from the app repository; its proper home is the app repository** (spec 30 §7). |
| `privacy-traceability.md` | Every factual sentence on the privacy page → the inventory line(s) it rests on (SITE-AC-05). |
| `claims.md` | Every factual claim on the home, app, docs and security pages → its source (SITE-AC-02). |

Source repository: `github.com/Allerdyce/atlassian-apps`, read at commit `0f51c26` (2026-09-29). Section references are to the spec versions current at that commit: 00 v1.5, 01 v1.6, 10 v1.5, 20 v1.4.

Grading (spec 30 §9): SITE-AC-02 and SITE-AC-05 are graded by an agent that has the sources and did not draft the pages. Record each grading run in `DECISIONS.md`.
