# Claims register (SITE-AC-02)

Every factual claim about an app or the portfolio on the home, app, docs, terms, support and security pages and the DPA, with its source in the app repository at `0f51c26` unless a section names a later commit. Wording on the pages is often taken directly from `CHANGELOG.md`, `README.md` and `docs/security/audit-log.md`, which are written for customers. Source keys as in `data-inventory/scheme-control.md`, plus `CHG` = `apps/controlled-project-config/CHANGELOG.md`, `DEC` = `DECISIONS.md`, `RUL` = `docs/rulings/` in the app repository.

**The app's name and the app repository's identifier differ on purpose.** The product is Scheme Control for Jira; the app repository keeps `apps/controlled-project-config/` and the `CPC` prefix (RUL `2026-09-30-name-fold-and-spec-window.md`). Paths into the app repository below therefore still say `controlled-project-config`. The site uses the product's slug, `scheme-control`.

## Paperloft (home, terms, privacy, security, support pages)

Sources: `PL-SITE` = `github.com/Allerdyce/paperloft-site` at `38d6933` (the published site at paperloft.app: `index.html`, `privacy/index.html`, `support/index.html`, `README.md`); `PL-SPEC` = `github.com/Allerdyce/paperloft` `SPEC.md` at `640eab5`.

| Claim | Source |
|---|---|
| Paperloft: Mac apps for your paperwork; apps that name, sort and keep your paperwork, privately, on your Mac. | PL-SITE index (“Mac apps for your paperwork”; “Mac apps that name, sort and keep your paperwork, privately, on your Mac.”) |
| Your documents are read and organised on your Mac; we never receive them. No account to create; no analytics. | PL-SITE index (“Private by design” block) and privacy (“Your documents stay on your Mac”, “No analytics and no account”). **H-20:** PL-SPEC lists Private Cloud Compute as a P2 opt-in toggle; if it ships, this wording needs qualifying on both sites. |
| Paperloft Receipts: turn receipts into an accountant-ready pack; export a summary PDF, a spreadsheet, and documents sorted by category; coming soon to the Mac App Store. | PL-SITE index (hero and FAQ “Not yet. Paperloft Receipts is coming soon to the Mac App Store.”) |
| Paperloft is made by EvidencePair LLC, California. | PL-SITE footer; PL-SPEC “Paperloft is published by EvidencePair LLC, which the App Store shows as the seller.” |
| Privacy section: processed on your Mac; we do not receive, store or see documents; no analytics, usage data or advertising identifiers; no account; files live in a folder you choose; purchases processed by Apple, no payment details received. | PL-SITE privacy (each sentence near-verbatim) |
| Terms: sold only through the Mac App Store; Apple's standard Licensed Application EULA applies unless the listing states otherwise; purchases and trials handled by Apple. | PL-SPEC line 272 (“Mac App Store only”), lines 50/134 (StoreKit trial); PL-SITE privacy (“Purchases are processed by Apple”). The standard-EULA default is Apple platform behaviour, not in either repo. **Ali confirms (H-19).** |
| Support: support@paperloft.app; FAQ at paperloft.app/support/. | PL-SITE support |
| Security page: runs on your Mac; no server of ours in the path. | PL-SITE privacy; PL-SPEC “no server, no accounts, no sync engine. Apple frameworks only.” |

## Home (`content/index.njk`)

| Claim | Source |
|---|---|
| Apps that bring governed change to Jira and Confluence, starting with Jira; for site administrators and the compliance teams who audit them. | S00 §2 (app 1 is Jira; apps 2–6 are Confluence, planned) |
| Per-app line under the lede: name and tagline. | Rendered from each app's front matter (README title; S10 §1 pitch) |
| “It makes Paperloft and the Atlassian apps above.” | Scope statement, not an app claim. Ali 2026-10-02: evidencepair.com is the company-wide site (supersedes the 2026-09-29 H-17 ruling). |
| Preview before change, a record of who changed what, rollback where possible, delegation within admin-approved limits. | S00 §2 “safe, governed change” |
| Built on Forge; no external egress, no remote services, no third-party analytics or error reporting; customer data stays in the customer's site. | S00 §3.1–3.2; DI-02 |
| On a person's request, an app acts with its own identity only after a check as that person. (Background work takes app identity through `requireSystemActor` with no user check; the security page says so.) | S01 §3.2 rule and background contexts |
| Audit records hash-chained and numbered; administrator can verify the chain in the app. | S01 §4.2; AUD |
| After a change is applied the app re-reads live state; only a match counts as success. | S01 §5 guarantee 7 (CORE-AC-15) |
| EvidencePair LLC is a California company run by its founder. | S20 §1 B1 names the LLC as an option for the publishing entity only; no B1 ruling in DECISIONS at 0f51c26. **Not an app claim; Ali confirms (H-17).** |

## App page (`content/apps/scheme-control.md`)

Re-read against the app repository at `7fcc76f` (2026-10-06). For `apps/controlled-project-config/` and `packages/core/` that commit is identical to the released build, `ba8d3d8` (`git diff --quiet ba8d3d8 7fcc76f -- apps/controlled-project-config packages/core`).

| Claim | Source |
|---|---|
| Name “Scheme Control for Jira”; tagline. | RUL `2026-09-30-name-fold-and-spec-window.md` (“The app has a name: Scheme Control for Jira”); README title and manifest `jira:adminPage` title at 7fcc76f; S10 v1.6 title; tagline: S10 §1 one-line pitch (unchanged at 7fcc76f). Vendor EvidencePair LLC: same ruling, item 2. |
| Status: coming soon (not on the Marketplace). | DEC 2026-10-06: the automated gate passed on `ba8d3d8` and human QA is open; `docs/launch/CHECKLIST.md` at `53bfbc2`, item 10 (production deploy and listing submission still to do); `apps/controlled-project-config/docs/listing.md` is a draft for Ali to submit. |
| The problem paragraph. | S10 §1 “The problem” (verbatim) |
| The nine “What it does” bullets. | CHG “What it does” at 7fcc76f (verbatim, with the Beta bullet extended by S10 §12 and `apps/controlled-project-config/docs/workflow-mapping.md` “depend on Jira REST APIs that Atlassian marks as experimental”) |
| “Screen changes list the fields that appear and disappear.” (preview bullet, added 2026-10-07) | CHG “What it does” at `8a818f8` (added there by `d9cbf7c`, verbatim). |
| “Scheme changes can be exported as CSV, and everything, refusals included, in the JSON export.” (history bullet, replacing “and can be exported as CSV”, 2026-10-07) | CHG “What it does” at `358d3a2` (verbatim). |
| “The admin History also lists every change to policies and settings, and marks a revert as one.” (history bullet, added 2026-10-07) | `apps/controlled-project-config/docs/admin-quick-start.md` §5 at `8a818f8` (“and every change to policies and settings. A revert is marked as one.”); CHG “Fixed in this round of testing” (the admin History item); `d9cbf7c` (D-CPC-29-8). |
| Re-checked 2026-10-07 at `8a818f8` and `358d3a2`: the rest of the page still holds. | MAN at `358d3a2` (unchanged since `8a818f8`): the same five scopes, no `permissions.external`, no `remotes`. Both page titles are now “Scheme Control for Jira”. |
| Buyer: site admins and platform teams; users: project admins. | S10 §1 Buyer/User |
| Does not edit schemes; no issue type scheme switching; no approval step; no team-managed; no JSM configuration. | S10 §3.2 Non-goals; CHG “Good to know”; `apps/controlled-project-config/docs/security-model.md` “What the app never does” |
| Unlicensed: history readable and exportable, switching off. | CHG “Good to know”; S10 CPC-F12 |
| Scopes table and reasons, five scopes. | README “Scopes, and why each one is needed” at 7fcc76f, and **the `report:personal-data` row at `358d3a2`** (“on Atlassian's reporting cycle (every 7 days when it names none)”, replacing “weekly”) (verbatim, with the internal “spec 01 §11” reference dropped); MAN `permissions.scopes` at 7fcc76f lists the same five. `report:personal-data` added 2026-10-01 (DEC 2026-10-01, `docs/evidence/2026-10-01-report-personal-data-scope/`). |
| No external egress; talks only to Atlassian. | README; DI-02 |
| The scope measurement table (eight reads × three scope lists, 200/401), the sentences around it, and “the scope is needed for the core scheme types regardless”. | DEC 2026-09-22 “CPC-S9 settled” table and conclusion (verbatim values; unchanged at 7fcc76f); README scopes paragraph. Publication confirmed 2026-09-29 (H-18); the app repository's DECISIONS.md remains the record. Moved here from the docs on 2026-10-06, because the docs are now copies of the app repository's pages and its security model page does not carry the table. |

## Documentation (`content/docs/scheme-control/`): copies of the app repository's customer docs

Since 2026-10-06 the site's docs for this app are copies of the app repository's six customer pages (spec 10 §12; app `README.md` “Customer documentation”), read at `7fcc76f`. That folder is identical at the released build, `ba8d3d8`. Every claim on these pages is the app repository's own customer documentation, so the source of each page is the page it copies. Each copy records its source path and commit in its front matter (`source`, `sourceCommit`), and `diff` against `git show 7fcc76f:<source>` shows only the adaptations listed.

| Site page | Source in the app repository (at `7fcc76f`) | Adaptations, and nothing else |
|---|---|---|
| `install.md` → `/docs/scheme-control/install/` | `apps/controlled-project-config/docs/install.md` **at `279b723`** | H1 → front-matter `title`; two `.md` links → site URLs; the permissions table wrapped in the site's labelled scroll region. |
| `admin-quick-start.md` → `/docs/scheme-control/admin-quick-start/` | `apps/controlled-project-config/docs/admin-quick-start.md` **at `f285dbf`** | H1 → `title`; two `.md` links → site URLs. |
| `project-admin-guide.md` → `/docs/scheme-control/project-admin-guide/` | `apps/controlled-project-config/docs/project-admin-guide.md` **at `f285dbf`** | H1 → `title`; three `.md` links → site URLs. |
| `workflow-mapping.md` → `/docs/scheme-control/workflow-mapping/` | `apps/controlled-project-config/docs/workflow-mapping.md` **at `f285dbf`** | H1 → `title`. |
| `security-model.md` → `/docs/scheme-control/security-model/` | `apps/controlled-project-config/docs/security-model.md` **at `279b723`** | H1 → `title`; one `.md` link → site URL. |
| `faq.md` → `/docs/scheme-control/faq/` | `apps/controlled-project-config/docs/faq.md` **at `f285dbf`** | H1 → `title`; two `.md` links → site URLs; question headings `###` → `##`, because the layout's H1 is the only heading above them. |

**`faq.md` and `security-model.md` are read at `cd42280`, not `7fcc76f`.** That app commit corrects those two pages
(docs only; the app's code and the released build `ba8d3d8` are unchanged):
- the uninstall answer now gives Atlassian's 28-day soft delete and the 21-day relink;
- "identified by their account ID" now says the app *shows* the account ID, while the audit record *stores* a
  pseudonymous reference.

The site's privacy page already said both. The app repo's `DECISIONS.md`, 2026-10-06, has the details.

**`install.md`, `admin-quick-start.md` and `faq.md` are read at `c6b1960`.** That app commit is docs only: the admin
page's path is now **Settings → Marketplace apps**, which is what today's Jira shows (seen in Ali's human-QA
screenshots on 2026-10-06), not "Settings → Apps". `faq.md` carries both corrections.

**Five pages are read at `8a818f8` (2026-10-07):** all but `install.md`, which is unchanged since `c6b1960`. They were
re-copied by script. The script first rebuilt each current copy from its old `sourceCommit` using the adaptations
above, matched it byte for byte, and only then copied the new text. What the app's iteration 30 (`d9cbf7c`, `eef96cd`,
`8a818f8`) changed in them:
- **admin-quick-start:** the History also lists changes to policies and settings, marks a revert, and filters by type;
- **project-admin-guide:** the page is now called **Scheme Control for Jira**; previews name roles, groups and people,
  list screen fields, flag issue security levels, and count workflow moves; the lossy-revert warning says what happens;
- **workflow-mapping:** a new “Checking the change” section, measured timings, a switch into a shared status is lossy,
  what a revert does with merged issues, and the Jira search for them;
- **security-model:** “In a preview, a person may be named” (never looked up, never stored);
- **faq:** the lossy answer as above, a new answer on Jira's own audit records, and the export answer, now “the
  app's records”, not every internal record.

The FAQ's and the workflow page's descriptions gain the new topics.

**Three pages are read at `358d3a2` (2026-10-07):** admin-quick-start, security-model and faq. That app commit is docs
only and follows the site sync. It changes one sentence in each, re-copied by the same script:
- **admin-quick-start:** the export is “the app's records” (policies, settings, the history, the audit trail and the
  refusal counters), with the history of scheme changes as CSV;
- **security-model** and **faq** (“Does any data leave Atlassian?”): the app sends nothing outside Atlassian, its
  developers can read its platform logs in Atlassian's console (a site administrator can turn that off), and support
  email goes through EvidencePair's email providers. Before, they said “nothing leaves Atlassian” and “No.”

project-admin-guide and workflow-mapping are unchanged at `358d3a2`, so they stay at `8a818f8`.

**Three pages are read at `279b723` (2026-10-07):** install, security-model and faq. That app commit is docs only.
The same script re-copied them. It now also applies the install page's table wrapper, and it reproduced all six
existing copies byte for byte before writing. What changed:
- **install:** five permissions, adding the `report:personal-data` row (“on Atlassian's reporting cycle”);
- **security-model:** a paragraph on queued changes (checked at confirmation, then applied by Jira as the app within
  60 minutes) and on the app's own jobs (no person behind them; they never start a scheme change);
- **faq:** the uninstall answer gives the retention period in Atlassian's SOC 2 report, with the storage
  reference's 28 days beside it.

admin-quick-start stays at `358d3a2`; project-admin-guide and workflow-mapping stay at `8a818f8` (unchanged since).

**Four pages are read at `f285dbf` (2026-10-08):** admin-quick-start, project-admin-guide, workflow-mapping and faq. `f285dbf` was the app repository's head on 2026-10-07. Their text changed in `cf61bfb`, the CPC 31 re-QA fixes (D-CPC-31-1, -2, -4 to -8, -10), which changes code as well as docs. The copy script is not in this repository, so it was rebuilt from the adaptations above. It reproduced all six existing copies byte for byte from their old `sourceCommit` before writing. What changed:
- **admin-quick-start:** a refused attempt in the History shows the reason the person typed;
- **project-admin-guide:** cancelling a preview or going back clears the choice; the workflow preview says when resolved issues will move into a status that isn't done, with a Jira search; on “Another change to this project is in progress”, the preview closes and the refused attempt is kept with the typed reason; a lossy revert's warning counts issues left resolved in a status that isn't done;
- **workflow-mapping:** a new section, “Resolutions stay as they are” (Jira keeps a resolution when the workflow changes; the app warns, offers a search, and never clears a resolution because it has no permission to edit issues); the timing estimate adds a measured revert (23 to 28 seconds with no issues moved); the revert's search is a link and names the project, issue type and statuses in words; a revert that left issues behind says how many first;
- **faq:** a new answer, “After a workflow switch, why are some issues still resolved?”.

The FAQ's and the workflow page's descriptions gain the new topic. install and security-model are unchanged since `279b723` and stay there.

The front-matter `description` of each page is the site's one-line summary for the docs index. Two of them are the app's own words (install page, “Next steps”); the other four summarise the page's own headings and add no fact.

The copies replace the site's earlier four pages (quick start, admin guide, security model, FAQ), which were written by the site builder from spec 10 at `0f51c26` and had fallen behind the app: they still described delegation to a named group, display-name snapshots in the history and the audit mapping, and a Jira administrator able to revert any change, and they did not mention the daily check that ends stalled changes, the rule that site-wide admin rights do not override a policy, or **Export all app data**.

## Terms page, Atlassian apps (`content/legal/terms.md`)

| Claim | Source |
|---|---|
| Atlassian's standard, customizable end-user agreement governs the apps, between the customer and EvidencePair LLC as provider. | Ali's ruling, app repository `docs/rulings/2026-10-06-price-domain-terms-support.md` (answer 3, “Agreed”, to “I recommend Atlassian's free standard end-user agreement”); DEC 2026-10-06 item 3. The agreement: [atlassian.com/licensing/marketplace/end-user-agreement-v1](https://www.atlassian.com/licensing/marketplace/end-user-agreement-v1), titled “Bonterms Standard End User Agreement (Version 1.0)”, between “Provider” and “Customer”. |
| EvidencePair-specific terms appear in the listing's Provider-Specific Terms, which take precedence over the standard agreement. | [List a customizable end-user agreement](https://developer.atlassian.com/platform/marketplace/list-customizable-end-user-agreement/) (the version's Links tab: choosing the standard agreement opens a “Provider Specific Terms” box; customers see both on the listing and at install); the agreement's order of precedence: “(i) any Amendment, (ii) Provider-Specific Terms and (iii) this Standard Agreement”. |
| None exist today: no EvidencePair app is listed yet. | The app is not submitted: `apps/controlled-project-config/docs/listing.md` is a draft “For Ali to review and submit”; `docs/launch/CHECKLIST.md` at `53bfbc2`, item 10. No provider-specific terms are drafted anywhere in either repository. |
| Billing, trials and licence management are handled by Atlassian. | Unchanged from 2026-10-02 (H-04); `docs/launch/2026-10-06-marketplace-research.md` §2 (“Paid via Atlassian”; automatic 30-day trial). |

## Support page, Atlassian apps (`content/support.md`)

| Claim | Source |
|---|---|
| Email support@evidencepair.com; no portal link while `supportPortalUrl` is null. | `data/site.json`; H-14 (the Jira Service Management portal is not set up yet). |
| “We reply within one business day. That is our own target.” | `data/site.json` `supportResponseTarget`; **Ali**, H-05, 2026-10-02. |
| Atlassian's minimums: critical issues get a response within 24 hours, every other request within 5 business days. | Ali's commitment, app repository `docs/rulings/2026-10-06-price-domain-terms-support.md` answer 4 (“Yes”, to “Paid apps must answer critical issues within 24 hours and others within 5 business days”); DEC 2026-10-06 item 4. Atlassian's rule: [Marketplace Partner Agreement](https://www.atlassian.com/licensing/marketplace/partneragreement) §6.3 (“At a minimum you agree to respond within 24 hours to any support request that Atlassian identifies as critical, and in all other cases within five business days”). The page says “critical issues”, as Ali committed, which covers at least what Atlassian identifies as critical. |
| Support available at least 8 hours a day on business days. | Same ruling, answer 4 (“support 8 hours a day, 5 days a week”). Atlassian's rule: [cloud app operations guide](https://developer.atlassian.com/platform/marketplace/cloud-app-operations-guide/) (“Offer support at least 8 hours a day, 5 days a week in your local time zone for all paid-via-Atlassian apps”). |
| These minimums are shown only while the page states a response target. | Template condition: they sit inside `{% if site.supportResponseTarget %}`, so a page with no commitment shows none. |

## Security page (`content/legal/security.md`)

| Claim | Source |
|---|---|
| Assigning a scheme is admin-only in Jira; a granular-only list could not read the schemes involved on a real site (2026-09-22). Links to the app page's scopes and measurement. | README scopes paragraph; DEC 2026-09-22 CPC-S9 table; S10 §1 |
| “The one thing the platform does show us is its logs.” | S01 §9.5 (production logging exists); DI-20. What the logs hold is on the privacy page (H-08). |
| Guard as the user in the same request; reads Jira's answer about that user's permission on that project or site. | S01 §3.2 guards and rule; S10 §4; `apps/controlled-project-config/docs/security-model.md` “Every request is checked as the person making it” |
| Background contexts (scheduled checks, queued completions, install and upgrade) via a path that refuses to run if a calling user is present. | S01 §3.2 background contexts; CORE-AC-16; `apps/controlled-project-config/src/triggers.ts` and `queue.ts` (`requireSystemActor`) |
| Audit record contents (identifiers, never page bodies or attachment contents); pseudonym; mapping table kept outside the chain so erasing it leaves the log verifiable; how closed accounts are erased is on the privacy page. | S01 §4.1–4.2; SCHEMA; DI-06, DI-07, DI-12 |
| Hash chain; Verify integrity; what it detects; checkpoint limit; forged rows out of scope; no secret key. | AUD (verbatim); S01 §4.2 |
| Data in Forge storage for the installation on Atlassian infrastructure; no egress; EvidencePair has no route to it from outside the app. | DI-01, DI-02, DI-03 |
| Custom UI bundles every asset; no CDN, no external fonts, no third-party analytics or error reporting. | S01 §1, §11; S00 §3.2 |
| Every EvidencePair Atlassian app is Forge only, no Connect modules. | S00 §3.1 |
| A build check refuses a manifest that declares egress. | S01 CORE-AC-12; `scripts/check-manifests.mjs` |
| Website statements (no cookies, no third-party requests, tested each build). | `tests/site.spec.mjs` |
| No bug bounty programme. | Nothing in the repo establishes one. **Ali to confirm.** |

## DPA (`content/legal/dpa.md`): Ali's revised draft

**The text is Ali's,** from `EvidencePair_Atlassian_DPA_Revised_Draft_2026-10-06.md`, published on 2026-10-07 in place of the builder's draft (`DECISIONS.md`, 2026-10-07). The site changed only its front matter, its links (root-relative site links, addresses from `data/site.json`), the completion items Ali's ruling fills, and the open items, which are now pending statements. This section therefore does not judge his wording. It records where each factual statement about the app comes from, which statements are commitments rather than facts, and where the text and the app differ.

**Sources:** the app repository at `8ff3eec` (2026-10-07), keys as in `data-inventory/scheme-control.md`. `ADI` and `SEC` are unchanged there since `cd42280`; `FAQ` last changed in `d9cbf7c` (iteration 30). The reporting and erasure code (`APRIV`, `PRIV`, `CHE`, `TRG`, `QUE`) is unchanged since `7fcc76f`, so it is the code of the released build `ba8d3d8`. `d9cbf7c` (iteration 30, not yet released) changed the History and the previews; `IT30` = `docs/evidence/2026-10-06-iteration-30-human-qa-fixes/README.md`. `RUL-DPA` = `docs/rulings/2026-10-07-dpa-address-access-email-providers.md`.

**Re-read on 2026-10-07 at `8a818f8`** (iteration 30 complete, all suites green, 1565/0; not yet a released build, and not yet run on the test site) for §2's display names, §5.2's reporting and §5.3's export. The rows below say where. The line numbers cited for `IDX`, `QUE` and `CHE` are the same at both commits.

### Factual statements about the app

| DPA statement (abridged) | Source |
|---|---|
| Intro: covers Scheme Control for Jira only. | Scope: Ali's text. Name: RUL `2026-09-30-name-fold-and-spec-window.md`. |
| §1, §4: the app runs on Atlassian's Forge platform, using Forge-hosted compute and storage, the Key-Value Store and Forge SQL, for the installation. | ADI “Where data lives”; MAN `storage:` (line 45), `sql:` (line 167); DI-01. |
| §2 Whose data: Jira administrators, project administrators, members of project roles a policy allows, people whose attempts are refused. | SEC “Every request is checked as the person making it”; ADI rows “Refusal counters”, “Policies”; DI-04, DI-10, DI-16. |
| §2 Identifiers: account IDs with previews, changes, reversions, refusals and policy edits; pseudonymous actor references; a separate mapping. | ADI “Personal data” and rows “Previewed changes”, “History of changes”, “Refusal counters”, “Policies” (last edited), “Audit trail”, “Audit account mapping”; SEC “What is recorded”. |
| §2 Associated activity: actions, timestamps, outcomes, refusal counts, project and scheme identifiers. | ADI rows “Audit trail”, “History of changes”, “Refusal counters”, “Change outcomes”. |
| §2 Reasons are stored as entered. | ADI rows “History of changes”, “Audit trail” (“the reason given”) and “Queued switches (beta)”; DI-17. |
| §2, §7: error messages and API responses may contain identifying information. | ADI row “Change outcomes” (“Jira's answer”) and “Platform logs” (lines quote error messages); DI-20. `d9cbf7c` adds three error lines that quote error messages (`src/index.ts` line 663; two in `src/preview.ts`). |
| §2 The app does not use Jira profile lookups to collect display names or email addresses; it reads no issue content, comments or attachments; it reads configuration, permissions, roles, schemes, workflow statuses and issue counts. | ADI “Personal data” (“holds no permission to read them”) and “What the app reads from Jira”; MAN scopes (no `read:jira-user`); RUL `2026-10-06-no-new-permission-for-names.md`; SEC at `8a818f8` (“In a preview, a person may be named … The app does not look the name up, and it never stores it”). **See difference 3 below.** |
| §2 Audit records use a reference derived from the account ID; a separate table maps it, outside the hash chain. | ADI rows “Audit trail”, “Audit account mapping”; SEC “What is recorded”; AUD; SCHEMA `core_002_audit_actors`. |
| §4 The runtime declares no external egress or remote services, talks to Atlassian APIs, and sends no records to EvidencePair's systems. | ADI “Where data lives”; MAN (no `permissions.external`, no `remotes`); FAQ “Does any data leave Atlassian?” at `358d3a2` (“The app itself sends nothing outside Atlassian”, now naming the platform logs and support email as §4, §5.5 and §7 do; until then a flat “No.”); DI-02. |
| §4 Storage residency follows Atlassian's arrangements (linked). | ATL-LIFE “Data residency”; DI-24. |
| §4 Designed for Runs on Atlassian; no badge represented. | S00 §3.2; DI-02. No `forge eligibility` result is recorded in the app repository. |
| §5.1 No customer-configurable retention setting. | ADI “Kept for” column (fixed periods only); DI-11 (`purgeOlderThan` has no caller). |
| §5.1 The retention table, row by row. | ADI table, “Kept for”: audit trail, history, refusal counters and change outcomes until uninstall; policies until deleted, settings until changed; audit account mapping until the account is closed; previews 24 hours unapplied, 30 days applied, until uninstall for a revertible success; change inputs 180 days; in-flight markers removed when recorded, at most 30 days; project locks 15 to 30 minutes; refusal markers 5 minutes. Queued work: ADI “Queued switches (beta)” (until the switch finishes or is ended); QUE lines 31–45. |
| §5.2 The app uses Atlassian's personal-data reporting, with a weekly check. | At `8ff3eec`: ADI “Personal data”; TRG lines 57–72 (daily job); APRIV line 26 (`REPORT_INTERVAL_MS` = 7 days) and lines 44–53; DI-12. At `8a818f8` the check runs daily and reports when Atlassian's cycle is due, weekly when none is named (see the commitments below). “A weekly reporting check” stays true of the default. |
| §5.2 Erasure removes account IDs and mappings from history, refusal counters, policy-editor fields and preview or in-progress records; not from free text, and it does not purge logs. | APRIV lines 29–41 (`cpcErasers`); PRIV lines 29–36; CHE line 228 (`eraseAccount`); ADI “Personal data”. No eraser touches `reason` or the logs. |
| §5.2 Review item: a preview made around an erasure run may keep an account ID. | At `8ff3eec`: ADI “Personal data” (“One narrow gap”); DEC 2026-10-07, Builder item 2 (an applied, revertible preview is kept until uninstall; a queued switch can finish after the scan). At `8a818f8`: ADI “Personal data” says such an ID “is kept until the next report, one reporting cycle later, and then erased”. **The pending statement stays (H-23)** until the test site shows that behaviour; its replacement text is Ali's to approve. |
| §5.2 Atlassian keeps a soft-deleted copy of data the app erases, and backups taken before the erasure, until the end of the retention period in its SOC 2 report. | ATL-LIFE (updated 28 Sep 2026); ADI at `279b723`; the privacy page's erasure section (since 2026-10-07). Added by **Ali**, 2026-10-08 (Q&A round 2), closing difference 7 below except for the 21-day restore. |
| §5.3 **Settings -> Export all app data** gives JSON, with the history also as CSV; it is not a raw copy of every entry; exports can contain account IDs and the app cannot erase them. | ADI “Export and deletion”; FAQ “Can we export the app's data?” at `8a818f8` (“It is not a raw copy of every internal record”; until then “Can we export everything the app stores?”); IDX lines 782–807 (`exportAppData`, guarded by `guardJiraAdmin`: history, audit trail with each record's account ID while mapped, policies, settings, and refusal counters up to 1,000 with a completeness flag). See difference 4. |
| §5.4 After uninstall Atlassian runs the deletion lifecycle: 28 days of retention, a recovery request within 21 days with customer consent; a reinstall does not restore the data. | ADI “Export and deletion” (“Uninstall”); FAQ “What happens to our data if we uninstall the app?”; ATL-LIFE; ATL-STORE; DI-13. Ali's “28 days” cites the recovery documentation, and ATL-STORE (last updated 28 Sep 2026) still says “Forge hosted storage retains data for 28 days after uninstallation”, so it stays accurate. Since its 28 Sep 2026 update, ATL-LIFE cites the retention period in Atlassian's SOC 2 report instead, which is how the app's ADI and FAQ put it at `279b723`. §5.4's “must not be read as a verified maximum retention period for every such copy” already allows for that. |
| §5.5 The developer console shows logs for the preceding 30 days; turning off log sharing controls access. | ATL-VIEW; ATL-ACCESS; ADI “Platform logs”; DI-20. |
| §7 No external connection to the installation's storage; developers read logs while the customer shares them; a site administrator controls sharing. | ADI “Where data lives”; AUD (“Neither customers, other apps nor we can reach it from outside the app”); ATL-ACCESS; ATL-CONTRIB; DI-03, DI-20. |
| §7 One kind of log line includes the account ID of the person who started a queued switch. | QUE line 268 (`switch-abandoned`, `accountId: event.accountId`); ADI “Platform logs”. Still the only one at `8a818f8`: the three lines `d9cbf7c` adds carry no account ID, and `8a818f8` changes only the daily line, adding `cycle-seconds=`. |
| §8 Installation-scoped storage, encrypted by Atlassian. | ATL storage page (“Encrypt and store data on disk”; “Automatically scope data per installation”); DI-24. |
| §8 The pseudonymisation key stays out of exports and ordinary logs. | ADI row “Audit pseudonym key”; IDX lines 782–807 (no key in the export); DI-20 (no log call writes it). |
| §8 A build check rejects manifests that declare external egress. | `scripts/check-manifests.mjs`; S01 CORE-AC-12. |
| §8 Requests are validated on the server as the person, with current permissions and the stored policy; nothing the page sends is trusted; app-initiated work is limited to documented cases. | SEC “Every request is checked as the person making it” and “What the app never does” (three cases). |
| §8 Site-wide policies, history and export for Jira administrators only; project pages and history for project administrators or permitted roles; no one else. | SEC; DI-16; IDX `listHistory` (lines 641–665: the site-wide History, including its refusals and configuration changes, needs `guardJiraAdmin`) and `exportAppData` (`guardJiraAdmin`). |
| §3, §8 The History records activity; reverts, refusals and configuration changes are shown to administrators. | `d9cbf7c` (iteration 30, D-CPC-29-8): the admin History adds refusals and policy and setting changes from the audit trail, names each person by account ID, and shows none once the account is erased (`src/db.ts` `HistoryEvent`, line 169; `src/index.ts` `historyEvents`, line 715; IT30). Its CSV still holds scheme changes only. |
| §8 Pseudonymous references, the mapping outside the chain, hash-chain verification; tamper-evident. | SEC “What is recorded” (**Verify the audit trail**); AUD “How tampering is detected”; S01 §4 (“append-only and tamper-evident”). |
| §15 Notices do not need the app runtime to send email. | DI-15 (the app sends no email); MAN (no egress). |

### Two commitments: implemented in code at `8a818f8`, verified on a real site only after the next gate run

At `8ff3eec` the DPA committed the app to two behaviours it did not have. **Both are implemented in code at `8a818f8`** (iteration 30, tests first: `49167e6`, `af25c5c`; fixes: `eef96cd`, `83c5d20`; all suites green, 1565/0). **Neither has run on a real site yet.** They are verified only after the next gate run on the test site. Until then they are facts about the code, not about a running installation. Reading `Cycle-Period` is also a marked SPIKE: whether Atlassian's response carries the header, and in what form, is first read from the daily line's `cycle-seconds=`.

| DPA statement | At `8ff3eec` | At `8a818f8` (code and tests) |
|---|---|---|
| §5.2 “We will comply with Atlassian's applicable reporting cycle, including a different cycle returned by its API where required.” | A fixed 7 days: APRIV line 26 (`REPORT_INTERVAL_MS`) and line 49. The `Cycle-Period` that Atlassian returns is not read. | The Forge adapter makes the report request itself, through `__requestAtlassianAsApp`, so it can read the response's `Cycle-Period` header (core `packages/core/src/forge/runtime.ts` lines 71–100, SPIKE). The core keeps the shortest cycle named (`packages/core/src/privacy/index.ts` lines 85–89). The next report is due after that cycle, or after 7 days when none is named (`src/privacy.ts` lines 40 and 70–74, 80–92). The daily line logs `cycle-seconds=` (`src/triggers.ts` line 69). Tests: `packages/core/tests/privacy/report-cycle.test.ts` and others. |
| §5.2 The app uses Atlassian's reporting “to identify accounts requiring erasure”, and erasure covers history, refusal counters, policy editors and preview or in-progress records. | Only the audit mapping's account IDs are reported: PRIV line 29 (`directory.listAccounts`). An ID written during an erasure run is not reported again and can outlive the erasure. | Every stored account ID is reported: the audit mapping plus `cpcAccountSources` (`src/privacy.ts` lines 63–68: the history, the refusal counters, the change engine's plans and intents, and policies' last editor), merged in `runPersonalDataReport` (core lines 62–98). An ID written around an erasure is caught at the next report (ADI “Personal data” at `8a818f8`; CHG). Tests: `apps/controlled-project-config/tests/integration/personal-data-commitments.test.ts`. **The §5.2 review paragraph stays pending (H-23)** until the test site shows this. |

### Completion facts and the sub-processor register

| DPA statement | Source |
|---|---|
| A.1 Business address: 109 W Cota St, Santa Barbara, CA 93101, United States. | **Ali**, RUL-DPA (“Yes, that address”). |
| A.1 Registration number: California Secretary of State entity number B20260405811. | **Ali**, 2026-10-08 (Q&A round 2), from the Secretary of State's bizfile Online record. |
| A.1 Personnel access locations: United States. | **Ali**, RUL-DPA (“United States only”). |
| B.1 Atlassian Pty Ltd, ABN 53 102 443 916, as identified in the Forge DPA. | Ali's text. Checked against the [Forge Data Processing Addendum](https://developer.atlassian.com/platform/forge/resources/Forge-Data-Processing-Addendum.pdf) (read 2026-10-07): “‘Atlassian’ means, for the purposes of this DPA, Atlassian Pty Ltd (ABN 53 102 443 916).” |
| B.2 Support and security email is forwarded by Porkbun to an iCloud Mail mailbox. | **Ali**, RUL-DPA (“Yes, Porkbun and Apple”); HUMAN-TASKS H-02 (support@ and security@ forward through Porkbun). |
| B.2 Porkbun LLC, 11575 SW Pacific Hwy PMB 40649, Tigard, OR 97223, USA. | Porkbun [Privacy Policy](https://porkbun.com/legal/agreement/privacy_policy), last revised 2 July 2026: “Porkbun LLC (“Porkbun”, …)” and the postal address. The Email Service Agreement in its [Product Terms of Service](https://porkbun.com/legal/agreement/product_terms_of_service) (effective 1 February 2021) is “between you … and Porkbun, LLC”, covering “Email Forwarding and/or Email Hosting Services”. |
| B.2 Porkbun locations: may transfer to providers outside your country; information may be stored on servers in other jurisdictions. | Privacy Policy, international transfers paragraph (verbatim phrases). The countries are not stated (Ali removed the line saying so from B.2, 2026-10-08; H-24). |
| B.2 Porkbun safeguards: physical, technical and administrative procedures; transfer safeguards such as Standard Contractual Clauses; the Email Service Agreement refers to the policy. | Privacy Policy (“We utilize physical, technical, and administrative procedures …”; “… for example, Standard Contractual Clauses”); Email Service Agreement, “Privacy”. Its retention of forwarded mail is not stated (Ali removed the line saying so from B.2, 2026-10-08; H-24). Data processing terms: none found; Ali removed the line saying so from B.2, 2026-10-08 (H-21). |
| B.2 Apple Inc., One Apple Park Way, Cupertino, California 95014, the iCloud provider for users in the United States. | [iCloud Terms and Conditions](https://www.apple.com/legal/internet-services/icloud/), last revised 14 September 2026, §D (“‘Apple’ as used herein means: Apple Inc., … for users in the United States, including Puerto Rico”). **Ali** confirmed on 2026-10-08 that the mailbox's Apple Account has United States as its country or region (H-24). |
| B.2 Apple locations: content stored on Apple's or third-party providers' servers; personal data generally stored by Apple Inc. in the United States, and may be transferred to or accessed by entities around the world. | iCloud Terms (“your Content will be automatically stored by Apple on Apple's or third-party providers' servers”); Apple [Privacy Policy](https://www.apple.com/legal/privacy/en-ww/), updated 30 July 2025, “Transfer of Personal Data Between Countries”. The countries are not stated (Ali removed the line saying so from B.2, 2026-10-08; H-24). |
| B.2 Apple safeguards: iCloud Mail encrypted in transit and on the server with Apple holding the keys, not end-to-end encrypted; administrative, technical and physical safeguards; Global CBPR and PRP. | [iCloud data security overview](https://support.apple.com/en-us/102651), published 5 January 2026 (table row “iCloud Mail”: “In transit & on server”, key storage “Apple”; note: “iCloud Mail does not use end-to-end encryption because of the need to interoperate with the global email system”); Privacy Policy, “Protection of Personal Data at Apple” and the CBPR/PRP paragraph. Retention after deletion is not stated (Ali removed the line saying so from B.2, 2026-10-08; H-24). Data processing terms: none found; Ali removed the line saying so from B.2, 2026-10-08 (H-21). |

### Contractual commitments (no source needed; listed so Ali can see what he promises)

| § | EvidencePair commits to |
|---|---|
| 2 | Protect unexpected sensitive data, restrict it and cooperate on removing it; treat pseudonymised data as personal data while it is identifiable. |
| 3 | Process only on documented instructions; no advertising, profiling, sale, cross-context behavioural advertising or training general-purpose AI; tell the customer immediately if an instruction infringes the law; tell the customer before legally required processing unless the law forbids it. |
| 5.1 | Keep identifiable data no longer than necessary; help with targeted retention and deletion. |
| 5.2 | **Follow Atlassian's reporting cycle** (implemented in code at `8a818f8`; not yet verified on a site). Assess every storage location, free text, pseudonymous record, log, queued work and support copy for a rights request; never refuse a required erasure only to keep the hash chain intact. |
| 5.3 | Explain the export's coverage and supply required data it lacks; return or delete at the end of the service; help with later requests while data remains. |
| 5.4 | Make retention information available; protect, restrict and delete remaining copies; reapply deletion instructions after a recovery before ordinary use; recover uninstalled data only with the customer's authorization; isolate data kept for a legal requirement; confirm deletion on request. |
| 5.5 | Keep support material only while needed; delete or return it; keep no full exports as correspondence history. |
| 6 | Written data protection terms with every sub-processor, no less protective than this DPA; liability for them; **at least 10 calendar days' written notice** of a new sub-processor, including Atlassian's downstream ones; watch supplier notices and pass them on; honour objections, with termination without penalty if unresolved. |
| 7 | Need-to-know access with confidentiality duties; access from another country only under §12 and recorded in Annex A; non-identifying diagnostics first; name the channel, provider, purpose and retention before asking for personal data; restrict and report unexpected personal data received. |
| 8 | All the measures listed, including **multi-factor authentication for privileged access**, access reviews and revocation, protected work devices, controlled releases, dependency and vulnerability review, incident response and data-rights procedures, periodic control testing, and **tests of isolation, authorization and account erasure including queued work and recovery**; no material reduction of protection during the service. |
| 9 | Notify a breach **without undue delay**, with the listed details as they become known, then updates; contain, investigate, preserve evidence and assist with notifications. |
| 10 | Timely help with rights requests, security, breaches, DPIAs and regulator consultation; pass on direct requests promptly and not answer them without authorization; charges only if agreed in advance and never delaying required help. |
| 11 | Provide compliance information and allow audits and inspections, routinely once in 12 months on reasonable notice, more often where law, a breach or suspected non-compliance requires. |
| 12 | Identify processing and access locations; no restricted transfer until its mechanism is complete; cooperate with transfer assessments; suspend a transfer that loses its basis. No Data Privacy Framework certification is claimed. |
| 13 | CCPA service-provider terms: no selling or sharing, no use outside the relationship, no combining; certify understanding. |
| 14 | A dated version history; **direct notice at least 30 days** before a material change; changes only through a valid contractual process. |
| 15 | Confirm designated contacts; a reliable way to send notices without the app sending email. |
| Annex A | EU SCCs Modules Two and Three (Clause 9 Option 2 with 10 days' notice, Irish law and courts), the UK Addendum B1.0, the Swiss adaptations, and a transfer record for each restricted transfer. |

### Where the text and the app differ

1. **§5.2 reporting cycle.** Commits to Atlassian's cycle. At `8ff3eec` the app used a fixed 7 days. **At `8a818f8` the code follows `Cycle-Period`**, with a 7-day fallback. Not yet verified on a site, and the header read is a SPIKE (above).
2. **§5.2 which accounts are reported.** At `8ff3eec` only the audit mapping's account IDs were reported. **At `8a818f8` every stored account ID is reported** (above). Not yet verified on a site. The text's own review item (pending, H-23) stays until it is.
3. **§2 display names.** The text says the app does not use Jira profile lookups to collect display names. That stays literally true: the app holds no `read:jira-user` (Ali, 2026-10-06). But since `d9cbf7c` (permissions) and `eef96cd` (notifications), a preview shows a person's name when Jira includes it in the scheme it returns. Whether Jira includes it under the app's scopes is a SPIKE (core `packages/core/src/api/jira.ts` lines 414, 434–452, 470; `src/preview.ts` lines 146–157 at `8a818f8`). The name is shown, not stored. The app's SEC says so at `8a818f8` (“In a preview, a person may be named”), and so does this site's privacy page since 2026-10-07. The people named directly in a permission or notification scheme, who need not use the app, are not among §2's listed data subjects except as “people identified in … configuration labels”. That is for Ali and the legal review (H-21).
4. **§5.3 export coverage.** Ali's text is right: the export is not every stored record. At `8a818f8` the app's FAQ agrees (“It is not a raw copy of every internal record”), and since 2026-10-07 so does this site's privacy page. At `358d3a2` the app's other texts agree too: `admin-quick-start.md`, the CHANGELOG and `listing.md` say “the app's records”.
5. **§6 written terms with sub-processors.** The text requires written data protection obligations no less protective than the DPA. None were found in Porkbun's or Apple's published terms. Porkbun's Email Service Agreement says the service “is intended for individuals and is for Your use only”; the iCloud Terms say the service “is designed and intended for personal use on an individual basis”. Pending (H-21), for the legal review.
6. **§5.1 table omissions (not a conflict).** Two stored items are not in the table: the daily check report (replaced daily; scheme and project IDs and names) and the audit pseudonym key (until uninstall). Neither holds an account ID.
7. **§5.2 and Atlassian's copies of erased data. Mostly resolved 2026-10-08:** §5.2 now states the soft-deleted copy and the backups (Ali, Q&A round 2). It still does not mention the 21-day restore request. Original note: §5.2 says what the app's erasure removes and what it does not (free text, logs). It does not say that Atlassian keeps a soft-deleted copy of data the app erases, and backups taken before the erasure, until the end of the retention period in its SOC 2 report. The app's ADI says so at `279b723`, and this site's privacy page says so since 2026-10-07. ATL-LIFE also lets a developer ask Atlassian, within 21 days, to restore data the app deleted. §5.4's recovery commitments are written for uninstalled data. Recorded under H-21 for the legal review.
8. **§4 data residency (consistent).** §4 already says residency is not a promise about every category of processing, logging, support or backup. The app's ADI at `279b723` now lists what is in and out of scope, and the privacy page carries that list.
