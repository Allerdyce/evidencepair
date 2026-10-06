# Privacy page → data inventory (SITE-AC-05)

Page: `content/legal/privacy.md`. Inventory: `data-inventory/scheme-control.md`. Sentences about the website itself are enforced by the browser tests in `tests/site.spec.mjs` (SITE-AC-03, SITE-AC-04) rather than by an inventory line. Sentences about EvidencePair's own practice (email handling) are marked **Ali** and need Ali's confirmation, not a source.

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
| All app data is stored in Atlassian Forge storage … provisioned for your installation, on Atlassian infrastructure. | DI-01 |
| The app declares no external egress and no remote services: it makes requests only to Atlassian APIs within your site. | DI-02 |
| No app data reaches EvidencePair's own systems, and EvidencePair cannot reach the app's storage from outside the app. | DI-02, DI-03 |
| Policies and settings: which projects or categories …, which schemes …, whether a reason is required, the cooldown, which role or group may switch; the pause and beta-features settings. | DI-04 |
| Locks: a lock record for the project holding a random token and an expiry time. | DI-05 |
| Audit records: one per change, refusal, revert or abandoned switch, one per lock released by an administrator, one per daily policy check: the action, what it was applied to, before/after values as identifiers, the outcome, any reason, timestamps, a chain of hashes. | DI-06, DI-10, DI-17 |
| The person is recorded as a per-installation pseudonym derived from their Atlassian account ID, never as an account ID or a name. | DI-06 |
| Audit actor mapping: pseudonym → account ID and display-name snapshot; kept outside the audit chain, so it can be erased without breaking it. | DI-07 (structure only; the erasure process is pending, DI-12) |
| Change history: project, scheme type, previous and new scheme identifiers and names, status mapping, reason, outcome, timestamps, and the Atlassian account ID and display-name snapshot of the person. | DI-08, DI-17, DI-18 |
| Queued switches: the queue message for a workflow or issue security switch carries the account ID and display name of the person who started it until it finishes or is abandoned. | DI-09 |
| The personal data involved is: Atlassian account IDs, display-name snapshots, and whatever a person types into a reason field. | DI-06, DI-07, DI-08, DI-09, DI-17, DI-18 |
| Jira administrators can see all policies and all history; a project's administrators (or the policy's role/group) that project's page and history; anyone else nothing. | DI-16 |
| Rejected and unauthorised attempts are recorded with the person who attempted; repeated attempts within a minute are counted; the counter is keyed by account ID, action and minute and discarded after five minutes. | DI-10 |
| Audit records and change history are kept for the life of the installation. The app currently offers no retention setting. | DI-11 |
| Account closure and erasure | **Pending** (H-06) — DI-12 is a gap. |
| Uninstall | **Pending** (H-07) — DI-13 is a gap. |
| Platform logs | **Pending** (H-08) — DI-20 is a gap. |
| Any notification the app sends is delivered inside the Atlassian product. The app sends no email of its own. | DI-15 |
| We do not sell, share or transfer customer data … We cannot: it never leaves your Atlassian site. | DI-02, DI-03 |
| The date at the top of this page changes when the policy does, and every version is kept in version control. | **Ali** — vendor practice; this repository is the version control. |
