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

The privacy page also links the DPA (“a draft awaiting legal review, rests on the same facts”): the DPA's map is below.

# DPA → data inventory

Page: `content/legal/dpa.md`, drafted 2026-10-06 on Ali's instruction (app repository `docs/rulings/2026-10-06-price-domain-terms-support.md`, answer 3: “the builder drafts the privacy policy (W3), a data processing agreement, and the security page (W5) from `apps/controlled-project-config/docs/data-inventory.md`”). Every factual sentence rests on an inventory line. Sentences that are legal positions or commitments, rather than facts about the app, are marked **Ali / legal** and are what the legal review (H-21) must confirm. The whole page carries a pending statement while it is a draft.

| DPA sentence (abridged) | Rests on |
|---|---|
| Draft awaiting legal review; not yet part of any agreement. | Pending statement, H-21. |
| EvidencePair LLC's DPA for its Atlassian Marketplace apps; between EvidencePair and a customer that installs one; today it covers Scheme Control for Jira. | **Ali / legal** (scope); the app list: `content/apps/`. |
| It does not cover Paperloft apps, which process your documents on your Mac. | paperloft-site privacy, “Your documents stay on your Mac”. |
| Under Atlassian's standard end-user agreement, a DPA applies when the Provider-Specific Terms identify it. | The agreement at atlassian.com/licensing/marketplace/end-user-agreement-v1: “The parties will adhere to the Data Protection Addendum (DPA), if any, identified in the Provider-Specific Terms.” |
| §1 Roles: the customer is the controller; EvidencePair is the processor; the app runs on Atlassian's Forge platform. | **Ali / legal** (the characterisation); Forge: DI-01. Atlassian's guide expects a DPA “if you are a Data Processor under GDPR” ([list a customizable end-user agreement](https://developer.atlassian.com/platform/marketplace/list-customizable-end-user-agreement/)). |
| §2 Whose data: Jira admins, project admins, members of allowed project roles, refused people. | DI-16, DI-04, DI-10 |
| §2 What: account IDs of people who make, revert, preview or are refused changes, and of admins who edit policies or settings; reason text as entered. | DI-04, DI-06 to DI-11, DI-17; ADI “Personal data” |
| §2 What not: no display names, emails or profile data, no permission to read them; no issue content, comments or attachments. | DI-18, DI-22 |
| §2 Audit records: pseudonymous reference, never the account ID; mapping outside the chain, erasable. | DI-06, DI-07 |
| §3 Purpose: check who may change; record changes, reverts, refusals; show and export; report and erase; troubleshoot through the logs. Lasts while installed. | S10 §1, §4; DI-12, DI-14, DI-20, DI-13 |
| §4 Storage: Forge KVS and Forge SQL for the installation; no egress, no remote services, Atlassian APIs only, nothing reaches EvidencePair's systems. | DI-01, DI-02, DI-03 |
| §4 Location: Forge-hosted storage kept in the location of the Atlassian product (linked). | DI-24 |
| §4 Runs on Atlassian: designed to be eligible (Atlassian-hosted compute and storage, no egress); Atlassian decides and applies the badge to listed apps; not listed yet. | S00 §3.2 (“Runs on Atlassian eligible. No external egress …”); S10 header; DI-02; [Runs on Atlassian](https://developer.atlassian.com/platform/forge/runs-on-atlassian/) (“automatically applied to eligible apps on the Atlassian Marketplace”). No `forge eligibility` result is recorded in the app repository, so the page claims the design, not the badge. |
| §4 Platform logs kept by Atlassian, readable by the app's developers. | DI-20 |
| §5 Retention, closed accounts, uninstall (28 days, 21-day relink, linked), exports, 30-day logs. | DI-11, DI-12, DI-13, DI-14, DI-20 |
| §6 One sub-processor, Atlassian (code, storage, queues, logs); no other service processes the app's personal data. | DI-01, DI-02, DI-09, DI-20. Naming Atlassian as a sub-processor: **Ali / legal**. |
| §7 EvidencePair cannot reach storage; developers read logs while the site shares them; one line type holds an account ID; a site admin can turn sharing off; correspondence kept as the privacy policy says. | DI-03, DI-20; correspondence: **Ali** (privacy page, “If you email us …”). |
| §8 Isolation; Atlassian encrypts Forge-hosted storage on disk (linked). | DI-03, DI-24 |
| §8 No egress, no third parties; build check refuses egress. | DI-02, DI-21; S01 CORE-AC-12 (`scripts/check-manifests.mjs`) |
| §8 Checked as the person on every request; policy re-derived; nothing the page sends trusted; the app acts on its own only in three cases. | `apps/controlled-project-config/docs/security-model.md` (“Every request is checked as the person making it”; “What the app never does”) |
| §8 Least access inside the site; only Jira admins export. | DI-16, DI-14 |
| §8 Pseudonymous, hash-chained records; Verify the audit trail. | DI-06, DI-07; AUD; `docs/security-model.md` |
| §8 Minimal data: no profile data; one generated key, no other secret. | DI-18, DI-23 |
| §9 Breach: notify without undue delay, with the information we have. | **Ali / legal** — a commitment, asked for in the brief for this page; no app source. |
| §10 Export; automatic erasure of closed accounts; uninstall removes everything; contact support for anything else. | DI-14, DI-12, DI-13; support address: `data/site.json` |
| §11 Support and security addresses. | `data/site.json` `emails.support`, `emails.security` |
| §12 Transfers, sub-processor notice, audit rights, liability, governing law: not written yet. | Pending statement, H-21. |
