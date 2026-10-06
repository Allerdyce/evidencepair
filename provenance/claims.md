# Claims register (SITE-AC-02)

Every factual claim about an app or the portfolio on the home, app, docs and security pages, with its source in the app repository at `0f51c26` unless a section names a later commit. Wording on the pages is often taken directly from `CHANGELOG.md`, `README.md` and `docs/security/audit-log.md`, which are written for customers. Source keys as in `data-inventory/scheme-control.md`, plus `CHG` = `apps/controlled-project-config/CHANGELOG.md`, `DEC` = `DECISIONS.md`, `RUL` = `docs/rulings/` in the app repository.

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
| Buyer: site admins and platform teams; users: project admins. | S10 §1 Buyer/User |
| Does not edit schemes; no issue type scheme switching; no approval step; no team-managed; no JSM configuration. | S10 §3.2 Non-goals; CHG “Good to know”; `apps/controlled-project-config/docs/security-model.md` “What the app never does” |
| Unlicensed: history readable and exportable, switching off. | CHG “Good to know”; S10 CPC-F12 |
| Scopes table and reasons, five scopes. | README “Scopes, and why each one is needed” at 7fcc76f (verbatim, with the internal “spec 01 §11” reference dropped); MAN `permissions.scopes` at 7fcc76f lists the same five. `report:personal-data` added 2026-10-01 (DEC 2026-10-01, `docs/evidence/2026-10-01-report-personal-data-scope/`). |
| No external egress; talks only to Atlassian. | README; DI-02 |

## Quick start (`content/docs/scheme-control/quick-start.md`)

| Claim | Source |
|---|---|
| Once listed, install from the Marketplace; installing is a site administrator's action; scopes as listed. | General Atlassian platform behaviour, not in the app repo; MAN scopes. **Ali confirms wording at H-10.** |
| Admin page location under Jira settings → Apps; title. | MAN `jira:adminPage` title “Scheme Control for Jira” (at 7fcc76f) |
| Setup check probes a harmless admin-only read; ready / not ready with setup steps. | S10 CPC-F13; CPC-AC-23 |
| Policy: projects by list or category; allowed schemes per type; core types permission, notification, issue type screen; types without an allowlist not switchable. | S10 CPC-F01 |
| requireReason default on; cooldownMinutes default 0; allowedRoles default project admins or a named role/group. | S10 CPC-F03 |
| Union of matching policies; effective-policy preview on admin page. | S10 CPC-F02 |
| Project settings page “Controlled configuration”: current scheme, alternatives, last change. | MAN `jira:projectSettingsPage` title; S10 CPC-F04 |
| Switch flow: target → preview → reason → confirm by typing project key → execute → progress → result. | S10 CPC-F05 |
| Preview content for permission and notification. | CHG; S10 §5 |
| Re-read after apply; only a match is success. | S01 §5 (CORE-AC-15); S10 §7.3 |
| Stale preview: no change, “review again”. | S10 §7.2, CPC-AC-04 |
| Revert: same audience, same policy, target is the previous scheme, always allowed. | S10 CPC-F08 |

## Admin guide (`content/docs/scheme-control/admin-guide.md`)

| Claim | Source |
|---|---|
| Roles table. | S10 §4 (verbatim) |
| Policy and rights re-derived on every request; crafted request rejected and recorded. | S10 §4 “Critical rule”; CPC-AC-01, CPC-AC-02 |
| Policies paragraph. | S10 CPC-F01–F03 |
| Beta features off by default, global setting, not offered and refused while off, labelled Beta, experimental APIs. | S10 CPC-F14, CPC-AC-25, §12 |
| Workflow mapping: per issue type, defaults by name then category; many-to-one revert warns. | S10 CPC-F05, CPC-AC-18, CPC-AC-11, CPC-F08 |
| Pause all: notice shown, nothing executes. | S10 CPC-F10, CPC-AC-03 |
| History filters (project, type, actor, date range), CSV export; per-project history. | S10 CPC-F07, CPC-AC-16 |
| Rejected/unauthorised attempts recorded; repeats within a minute counted. | S10 §7.5 |
| Verify integrity's three outcomes. | S10 CPC-AC-31 |
| Daily checks: deleted/renamed schemes, archived/team-managed projects, warnings on admin page. | S10 CPC-F09, CPC-AC-14 |
| One change per project; “change in progress”. | S10 §7.1, CPC-AC-07 |
| A queued change that keeps failing is ended on its next delivery after its retry window; project page shows the outcome. | S10 CPC-AC-28; `queue.ts` 80, 283–308. (CPC-AC-33's daily reaper is not built, so the page does not claim it.) |
| Team-managed and archived projects show an explanation. | S10 CPC-F11, CPC-AC-15; CHG |
| Unlicensed read-only; banner on admin/config screens linking to the Atlassian Marketplace. | S01 §3.1; S10 CPC-F12, CPC-AC-06; `ui/src/admin.tsx` 776 |

## Security model (`content/docs/scheme-control/security-model.md`) and Security page (`content/legal/security.md`)

| Claim | Source |
|---|---|
| Assigning a scheme is admin-only in Jira; granular-only list returned 401 for those reads on a real site (2026-09-22). | README scopes paragraph; DEC 2026-09-22 CPC-S9 table; S10 §1 |
| The scope measurement table (eight reads × three scope lists, 200/401) and the sentence after it. | DEC 2026-09-22 “CPC-S9” table and conclusion (verbatim values). Publication confirmed 2026-09-29 (H-18); the app repository's DECISIONS.md remains the record. |
| Security page: “The one thing the platform does show us is its logs.” | S01 §9.5 (production logging exists); DI-20. What the logs hold is pending (H-08). |
| Scopes table; issue security and workflow switching are beta, off by default. | README (verbatim); S10 CPC-F14 |
| Guard as the user in the same request; Administer Projects / role or group / Administer Jira; reads Jira's answer. | S01 §3.2 guards and rule; S10 §4 |
| Effective policy and rights re-derived each request; browser state never trusted. | S10 §4 |
| Background contexts (scheduled, queue, lifecycle) via a path that throws if a calling user is present; attribution follows the person. | S01 §3.2 background contexts and attribution; CORE-AC-16 |
| Order: guard → policy → lock → precondition → apply → verify → audit. | S10 CPC-F06 |
| 2xx is not success; only the re-read is. | S01 §5 guarantee 7 |
| Audit record contents; pseudonym (HMAC of account ID); mapping table with account ID and display name, kept outside the chain so erasing it leaves the log verifiable. The erasure process itself is not claimed (DI-12 gap). | S01 §4.1–4.2; SCHEMA; DI-06, DI-07 |
| History table stores account ID and display-name snapshot. | DI-08 |
| Hash chain; Verify integrity; what it detects; checkpoint limit; forged rows out of scope; no secret key. | AUD (verbatim); S01 §4.2 |
| Data in Forge storage for the installation on Atlassian infrastructure; no egress; nobody can reach the database from outside the app. | DI-01, DI-02, DI-03 |
| Custom UI bundles every asset; no CDN, no external fonts, no third-party analytics. | S01 §1, §11; S00 §3.2 |
| Every EvidencePair Atlassian app is Forge only, no Connect modules. | S00 §3.1 |
| A build check refuses a manifest that declares egress. | S01 CORE-AC-12; `scripts/check-manifests.mjs` |
| Website statements (no cookies, no third-party requests, tested each build). | `tests/site.spec.mjs` |
| No bug bounty programme. | Nothing in the repo establishes one. **Ali to confirm.** |

## FAQ (`content/docs/scheme-control/faq.md`)

| Claim | Source |
|---|---|
| Lossy revert explanation. | S10 CPC-S5 note (“many-to-one mappings”), CPC-F08, CPC-AC-11 |
| Revert target always allowed: a restore, not a new choice. | S10 CPC-F08 (verbatim reasoning) |
| Stale preview behaviour. | S10 §7.2 |
| Concurrent attempts: exactly one executes; other told “change in progress”. | S10 CPC-AC-07 |
| Why `manage:jira-configuration`. | README; DEC CPC-S9 |
| No data leaves the site. | DI-02 |
| Identity in audit log vs history. | DI-06, DI-07, DI-08 |
| Unlicensed read-only. | CHG |
| Team-managed unsupported. | CHG; S10 §3.2 |
