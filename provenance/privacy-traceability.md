# Privacy page → data inventory (SITE-AC-05)

Page: `content/legal/privacy.md`. Inventory: `data-inventory/scheme-control.md` (re-derived 2026-10-06 from the app repository's own inventory and code at `7fcc76f`, identical to the released build `ba8d3d8` for the app and core). Sentences about the website itself are enforced by the browser tests in `tests/site.spec.mjs` (SITE-AC-03, SITE-AC-04) rather than by an inventory line. Sentences about EvidencePair's own practice are marked **Ali** and need Ali's confirmation, not a source. Sentences about Atlassian's platform rest on an inventory line that quotes Atlassian's documentation, and the page links the same documentation.

| Privacy page sentence (abridged) | Rests on |
|---|---|
| This website collects nothing. It sets no cookies, stores nothing in your browser, runs no analytics, and makes no request to any third party. There are no forms. | Tests: SITE-AC-03, SITE-AC-04; no `<form>` in any template. |
| The site is served by GitHub Pages, which processes requests … under its own privacy statement. We do not receive or use visitor analytics from it. | **Ali** (H-01/H-03, 2026-10-02): host chosen; no analytics are enabled. |
| If you email us, we keep the correspondence … | **Ali** — vendor practice. |
| EvidencePair LLC makes Paperloft, Mac apps for paperwork, and apps for Atlassian products, and runs this website. This policy covers both product lines and this website. | **Ali** — company-wide scope, 2026-10-02 (H-17 superseded). |
| Paperloft apps have their own privacy policy at paperloft.app, which governs them. | paperloft-site `privacy/index.html` at 38d6933 exists and is live (checked at build). |
| Paperloft apps process your documents on your Mac; we do not receive, store or see your documents or the information in them. | paperloft-site privacy, “Your documents stay on your Mac” (verbatim). |
| We collect no analytics, usage data or advertising identifiers, and there is no account to create. | paperloft-site privacy, “No analytics and no account” (verbatim). |
| Your files live in a folder you choose. | paperloft-site privacy, “Where your files are kept”. |
| Purchases are processed by Apple, and we do not receive your payment details. | paperloft-site privacy, “Purchases” (verbatim). |
| The rest of this policy describes Scheme Control for Jira. | App repository ruling `2026-09-30-name-fold-and-spec-window.md`. |
| All app data is stored in the app's own storage on Atlassian's infrastructure (Forge Key-Value Store and Forge SQL), provisioned for your installation. | DI-01 |
| The app declares no external egress and no remote services: it makes requests only to Atlassian APIs within your site. | DI-02 |
| No app data reaches EvidencePair's own systems, and EvidencePair cannot reach the app's storage from outside the app. What EvidencePair can see is the app's platform logs. | DI-02, DI-03, DI-20 |
| Policies and settings: name, projects or categories, allowed schemes, reason required, cooldown, which project roles may switch, last edited and by whom; pause and beta settings. | DI-04 |
| Audit trail: one record per change, refusal, revert, configuration change, lock release and scheduled job; action, project, before and after as identifiers, outcome, reason, time, hash chain; pseudonymous reference, never an account ID in the record. | DI-06 |
| Audit account mapping: pseudonymous reference → account ID; outside the hash chain, so it can be erased without breaking it. | DI-07 |
| History of changes: project, scheme type, before and after, status mapping, reason, account ID of the person who asked, outcome and when. | DI-08 |
| Changes in progress: previewed change (with account ID), change inputs, in-flight marker (with account ID), outcome, project lock. | DI-05, DI-11 |
| Queued switches: the queue message carries the account ID of the person who started it, and the reason, until the switch finishes or is ended. | DI-09, DI-17 |
| Refusal counts (pointer to the section below). | DI-10 |
| The daily check report: the latest policy integrity findings, scheme and project identifiers and names. | DI-11 (ADI row “Daily check report”) |
| One key generated per installation for the pseudonymous references; no other secret. | DI-23 |
| The personal data involved is account IDs and reason text. No display names, email addresses or other profile data, and no permission to read them. | DI-06 to DI-10, DI-17, DI-18 |
| What the app reads from Jira; no issue content, comments or attachments. | DI-22 |
| Jira administrators see all policies and history, and only they can export; a project's admins or a project role a policy allows see that project's page and history; anyone else nothing. | DI-16, DI-14 |
| A refused attempt is recorded with the person; repeats within a minute write one record plus a count; refusal counter (account ID, action, project, count); marker (account ID, action) discarded after five minutes. | DI-10; app `CHANGELOG.md` (every refusal is recorded, including pause, cooldown, missing reason, licence and in-progress refusals) |
| Retention: audit, history, refusal counters, outcomes for the life of the installation; no retention setting; policies until deleted; previewed change 24 h / 30 days / life of installation if revertible; inputs 180 days; in-flight marker at most 30 days; lock 15–30 minutes. | DI-11, DI-04, DI-05 |
| Export: everything, by a Jira administrator, JSON and CSV built in the browser; exported files contain account IDs and erasure cannot reach them. | DI-14 |
| Account closure and erasure: weekly report from the daily job; Atlassian requires it (linked); erased from mapping, history, refusal counters, policy “last edited by”, previewed and in-progress changes; audit records stay and verify without saying who; the narrow gap. | DI-12 (H-06 resolved). The page does not claim erasure has been observed on a live site; DI-12 records that it has not. |
| Uninstall: removes everything the app stored; no uninstall step of its own; done by Atlassian's platform and observed on the test site; soft-deleted and kept 28 days; reinstall starts empty; relink within 21 days only on the developer's request with the customer's consent (linked); export first; schemes unchanged. | DI-13 (H-07 resolved) |
| Platform logs: what the app writes in production; internal identifiers and error messages or Jira's answer; the one line with an account ID; Atlassian's added fields (linked). | DI-20 (H-08 resolved) |
| Log sharing on at install; developers at EvidencePair read logs in the developer console (app admins, and contributors given the permission, linked); site admin can turn it off or download (linked); 30 days in the developer console. | DI-20 |
| We read the logs only to troubleshoot the app. | **Ali** — vendor practice. |
| Any notification the app sends is delivered inside the Atlassian product. The app sends no email of its own. | DI-15 |
| We do not sell, share or transfer customer data … The app's data never leaves Atlassian, and the only part of it we can see is what the platform logs hold. | DI-02, DI-03, DI-20; selling, sharing and profiling: **Ali** — vendor practice. |
| The date at the top of this page changes when the policy does, and every version is kept in version control. | **Ali** — vendor practice; this repository is the version control. |

## What changed on 2026-10-06, and why

The three pending statements (H-06, H-07, H-08) are replaced by sourced text. Re-reading the app repository at `7fcc76f` for them also showed that several sentences written from `0f51c26` had become untrue, because the app changed on 2026-10-01. They were corrected in the same change, from the same inventory:

- **Display names.** The page said the audit mapping, the history and queued switches hold a display-name snapshot. The app stopped reading display names on Ali's 2026-09-28 ruling and dropped the column (DI-07, DI-08, DI-18).
- **Groups.** The page said a policy can name a group. The app delegates to project roles only (DI-04).
- **Refusal counter.** The page described only the five-minute marker. The app now also keeps a durable counter until uninstall (DI-10).
- **Missing items.** Policy “last edited by” (an account ID), audited configuration changes, previewed changes, change inputs, in-flight markers, the daily report, the pseudonym key, export and what the app reads from Jira were not on the page (DI-04, DI-06, DI-11, DI-14, DI-22, DI-23).
- **“What we never do.”** It said customer data “never leaves your Atlassian site” and that we cannot see it. The platform logs are readable by the app's developers, and one kind of line holds an account ID, so the sentence now says the only part we can see is what the logs hold.

The privacy page also links the DPA (“a draft awaiting legal review, rests on the same facts”).

# DPA

**Moved, 2026-10-07.** The builder's draft DPA that this section mapped was replaced by Ali's revised text (`DECISIONS.md`, 2026-10-07). Ali's text says more than the inventory does (commitments, legal terms, the sub-processor register), so its register is in `claims.md`, section “DPA”, which separates factual claims from commitments. The map of the builder's draft is in version control, up to commit `9c198f6`.
