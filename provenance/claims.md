# Claims register (SITE-AC-02)

Every factual claim about an app or the portfolio on the home, app, docs and security pages, with its source in the app repository at `0f51c26`. Wording on the pages is often taken directly from `CHANGELOG.md`, `README.md` and `docs/security/audit-log.md`, which are written for customers. Source keys as in `data-inventory/controlled-project-config.md`, plus `CHG` = `apps/controlled-project-config/CHANGELOG.md`, `DEC` = `DECISIONS.md`.

## Home (`content/index.njk`)

| Claim | Source |
|---|---|
| Apps for Atlassian site administrators and the compliance teams who audit them. | S00 §2 |
| Preview before change, a record of who changed what, rollback where possible, delegation within admin-approved limits. | S00 §2 “safe, governed change” |
| Built on Forge; no external egress, no remote services, no third-party analytics or error reporting; customer data stays in the customer's site. | S00 §3.1–3.2; DI-02 |
| App acts with its own identity only after a check as the requesting user. | S01 §3.2 rule |
| Audit records hash-chained and numbered; administrator can verify the chain in the app. | S01 §4.2; AUD |
| After a change is applied the app re-reads live state; only a match counts as success. | S01 §5 guarantee 7 (CORE-AC-15) |
| EvidencePair LLC is a California company run by its founder. | S20 §1 B1 (“EvidencePair LLC (California formation filed in September 2026)”); solo vendor per spec 30 §11.5. **Ali to confirm wording.** |

## App page (`content/apps/controlled-project-config.md`)

| Claim | Source |
|---|---|
| Name “Controlled Project Configuration for Jira”; tagline. | README title; S10 §1 one-line pitch |
| Status: coming soon (not on the Marketplace). | README “Status: built, deployed to development, not yet through its test loop.” |
| The problem paragraph. | S10 §1 “The problem” (verbatim) |
| The nine “What it does” bullets. | CHG “What it does” (verbatim, with the Beta bullet extended by S10 §12 “depend on experimental Jira APIs”) |
| Buyer: site admins and platform teams; users: project admins. | S10 §1 Buyer/User |
| Does not edit schemes; no issue type scheme switching; no approval step; no team-managed; no JSM configuration. | S10 §3.2 Non-goals; CHG “Good to know” |
| Unlicensed: history readable and exportable, switching off. | CHG “Good to know”; S10 CPC-F12 |
| Scopes table and reasons. | README “Scopes, and why each one is needed” (verbatim) |
| No external egress; talks only to Atlassian. | README; DI-02 |

## Quick start (`content/docs/controlled-project-config/quick-start.md`)

| Claim | Source |
|---|---|
| Installing needs a Jira administrator; scopes as listed. | Atlassian Marketplace install model (admin installs); MAN scopes |
| Admin page location under Jira settings → Apps; title. | MAN `jira:adminPage` title “Controlled Project Configuration” |
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

## Admin guide (`content/docs/controlled-project-config/admin-guide.md`)

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
| A queued change that stops making progress is ended after its retry window; project page shows the outcome. | S10 CPC-AC-28, CPC-AC-33 |
| Team-managed and archived projects show an explanation. | S10 CPC-F11, CPC-AC-15; CHG |
| Unlicensed read-only; banner on admin/config screens linking to the listing. | S01 §3.1; S10 CPC-F12, CPC-AC-06 |

## Security model (`content/docs/controlled-project-config/security-model.md`) and Security page (`content/legal/security.md`)

| Claim | Source |
|---|---|
| Assigning a scheme is admin-only in Jira; granular-only list returned 401 for those reads on a real site (2026-09-22). | README scopes paragraph; DEC 2026-09-22 CPC-S9 table; S10 §1 |
| Scopes table. | README (verbatim) |
| Guard as the user in the same request; Administer Projects / role or group / Administer Jira; reads Jira's answer. | S01 §3.2 guards and rule; S10 §4 |
| Effective policy and rights re-derived each request; browser state never trusted. | S10 §4 |
| Background contexts (scheduled, queue, lifecycle) via a path that throws if a calling user is present; attribution follows the person. | S01 §3.2 background contexts and attribution; CORE-AC-16 |
| Order: guard → policy → lock → precondition → apply → verify → audit. | S10 CPC-F06 |
| 2xx is not success; only the re-read is. | S01 §5 guarantee 7 |
| Audit record contents; pseudonym (HMAC of account ID); mapping table with account ID and display name, erasable. | S01 §4.1–4.2; DI-06, DI-07 |
| History table stores account ID and display-name snapshot. | DI-08 |
| Hash chain; Verify integrity; what it detects; checkpoint limit; forged rows out of scope; no secret key. | AUD (verbatim); S01 §4.2 |
| Data in Forge storage for the installation on Atlassian infrastructure; no egress; nobody can reach the database from outside the app. | DI-01, DI-02, DI-03 |
| Custom UI bundles every asset; no CDN, no external fonts, no third-party analytics. | S01 §1, §11; S00 §3.2 |
| Forge only, no Connect modules. | S00 §3.1 |
| A build check refuses a manifest that declares egress. | S01 CORE-AC-12; `scripts/check-manifests.mjs` |
| Website statements (no cookies, no third-party requests, tested each build). | `tests/site.spec.mjs` |
| No bug bounty programme. | Nothing in the repo establishes one. **Ali to confirm.** |

## FAQ (`content/docs/controlled-project-config/faq.md`)

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
