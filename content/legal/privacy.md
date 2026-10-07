---
title: Privacy policy
updated: 2026-10-07
description: What EvidencePair's website, Paperloft apps and Atlassian apps store, where it lives, and what we never do with it.
---

<p class="note">Every factual statement on this page about an app is traced to that app's published policy or data inventory, kept with the source of this site. Where a source does not yet answer a question, this page says so rather than guessing.</p>

## Who we are

{{ site.legalName }} (“EvidencePair”, “we”) makes Paperloft, Mac apps for paperwork, and apps for Atlassian products, and runs this website. This policy covers both product lines and this website. Contact: <a href="mailto:{{ site.emails.hello }}">{{ site.emails.hello }}</a>.

## This website

This website collects nothing. It sets no cookies, stores nothing in your browser, runs no analytics, and makes no request to any third party. There are no forms.

{% if site.host %}The site is served by {{ site.host }}, which processes requests in order to serve pages under its own [privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). We do not receive or use visitor analytics from it.{% else %}{% pending "Name the hosting provider and state what request data it processes on our behalf.", "HUMAN-TASKS H-03" %}{% endif %}

If you email us, we keep the correspondence for as long as we need it to answer you and to keep a record of support and security reports. Email sent to our addresses is forwarded by Porkbun to a mailbox in Apple's iCloud Mail, where we read it. Our [data processing agreement](/dpa/#b2-support-and-email-processing) lists both providers in its Annex B.2.

## Paperloft apps

Paperloft apps have their own [privacy policy](https://paperloft.app/privacy/) at paperloft.app, which governs them. In short: Paperloft apps process your documents on your Mac, and we do not receive, store or see your documents or the information in them. We collect no analytics, usage data or advertising identifiers, and there is no account to create. Your files live in a folder you choose. Purchases are processed by Apple, and we do not receive your payment details.

## Atlassian apps

The rest of this policy describes **Scheme Control for Jira**. When we publish another Atlassian app, this page will describe it too. Our [data processing agreement](/dpa/) for these apps, a draft awaiting legal review, rests on the same facts.

### Where data lives

All app data is stored in the app's own storage on Atlassian's infrastructure (the Forge Key-Value Store and Forge SQL), provisioned for your installation. The app declares no external egress and no remote services: it makes requests only to Atlassian APIs within your site. No app data reaches EvidencePair's own systems, and EvidencePair cannot reach the app's storage from outside the app. What EvidencePair can see is the app's platform logs, described [below](#platform-logs).

### What the app stores

- **Policies and settings.** Each policy's name, the projects or project categories it covers, which schemes they may use, whether a reason is required, the cooldown, which project roles may switch, and when the policy was last edited and by whom. The global pause and beta-features settings.
- **Audit trail.** One record per change, refusal, revert, configuration change, lock release and scheduled job: the action, the project, the before and after values as identifiers, the outcome, any reason the person entered, the time, and a hash that chains it to the record before. The person is recorded as a pseudonymous reference derived from their Atlassian account ID, never as an account ID inside the record.
- **Audit account mapping.** A separate table that maps each pseudonymous reference to the Atlassian account ID, so the audit trail can show who. It is kept outside the hash chain, so it can be erased without breaking it.
- **History of changes.** One row per change or revert, behind the History screen and the CSV export: the project, the scheme type, the scheme before and after, any workflow status mapping, the reason the person entered, the Atlassian account ID of the person who asked, the outcome and when.
- **Changes in progress.** A previewed change (the project, the scheme before and after, and the account ID of the person who previewed it); the inputs to a change (the project key and name, the target scheme, any status mapping and, for a workflow switch that merges statuses, how many issues each merged status held); a marker while a change is applied (which change, and the account ID of the person who asked); the change's outcome; and a lock that keeps two changes from running on one project at once.
- **Queued switches.** A workflow or issue security switch (beta) is finished in the background. The queue message for it carries the Atlassian account ID of the person who started it, and the reason they gave, until the switch finishes or is ended.
- **Refusal counts.** See [rejected and unauthorised attempts](#rejected-and-unauthorised-attempts).
- **The daily check report.** The latest policy integrity findings: scheme and project identifiers and names.
- **One key.** A random key the app generates once per installation to make the pseudonymous references. The app stores no other secret.

The personal data involved is therefore Atlassian account IDs, and whatever a person chooses to type into a reason field. The app stores no display names, email addresses or other profile data, and has no permission to read them. When a permission or notification scheme grants access to a specific person, a preview of the change shows their name if Jira includes it in the scheme it returns, and otherwise their account ID. The app does not look the name up, and it never stores it.

### What the app reads from Jira

Projects, project roles, and the caller's own project roles and permissions; permission, notification, issue type screen, issue security and workflow schemes; workflow statuses; and issue counts per status, to size a workflow switch. It reads no issue content, comments or attachments.

### Who can see it

Jira administrators can see all policies and all history on the site, and only they can export it. A project's administrators, or a project role a policy allows, can see that project's page and history. Anyone else sees nothing.

### Rejected and unauthorised attempts

An attempt the app refuses, for example outside policy or by someone without the right role, is recorded with the person who attempted it. Repeated attempts by the same person for the same action within a minute write one record plus a count. The count is kept in a refusal counter (the account ID, the action, the project and the count). A short-lived marker holding the account ID and the action is discarded after five minutes.

### Retention

Audit records, the history of changes, refusal counters and change outcomes are kept for the life of the installation. The app offers no retention setting. Policies are kept until they are deleted. A previewed change is kept for 24 hours if it is not applied, for 30 days once it is applied, and for the life of the installation if it is a successful change that can be reverted, because the revert needs it. The inputs to a change are kept for 180 days. The marker while a change is applied is removed when the change is recorded, after at most 30 days. A project lock lasts 15 to 30 minutes.

### Export

A Jira administrator can download the app's records for the site (policies, settings, the history, the audit trail and the refusal counters) from **Settings → Export all app data**, as JSON, with the history also as CSV. It is not a raw copy of every internal record: short-lived working records (previews, locks and in-progress markers) and the key used to make the pseudonymous references are left out. Both files are built in the browser. Exported files are outside the app: they contain account IDs, and the erasure described next cannot reach them.

### Account closure and erasure

As part of its daily job, the app reports every account ID it stores to Atlassian's personal data reporting API, from each place it keeps one: the audit account mapping, the history, the refusal counters, a policy's “last edited by”, and the records of changes that were previewed or in progress. It reports on Atlassian's reporting cycle: as often as Atlassian's last answer asks, and every 7 days when it names no period. Atlassian [requires this](https://developer.atlassian.com/platform/forge/user-privacy-guidelines/) of every app that stores personal data. When Atlassian reports an account as closed, the app erases that account ID from everywhere it keeps it: the audit account mapping, the history, the refusal counters, a policy's “last edited by”, and the records of changes that were previewed or in progress. Audit records stay, and still verify, but no longer say who. One narrow gap: an account ID written while the erasure runs, such as a change that person previewed in those seconds, or a queued change of theirs that finishes just after, is kept until the next report, one reporting cycle later, and then erased.

### Uninstall

Uninstalling the app removes everything it stored for your site: policies, settings, the history, the audit trail and the rest of the list above. The app has no uninstall step of its own. The removal is done by Atlassian's platform, and we have observed it on our test site. Atlassian's documentation says that an uninstalled app's data is soft-deleted and kept for 28 days before it is deleted, and that a reinstall is a new installation that starts empty. Within 21 days of the uninstall, the old data can be relinked to a new installation, but only if the app's developer asks Atlassian, with the customer's consent ([data lifecycle](https://developer.atlassian.com/platform/forge/storage-reference/hosted-storage-data-lifecycle/), [data recovery](https://developer.atlassian.com/platform/forge/storage-reference/#data-recovery-for-apps-with-hosted-storage)). Export your data first if you need a copy. The schemes your projects use belong to Jira, so uninstalling leaves them exactly as they are.

### Platform logs

Atlassian's Forge platform keeps a log of what the app writes while it runs. In production the app writes a line only when something fails or needs attention, such as a request it refused, a change Jira did not apply, or a queued switch it ended. It also writes one line a day saying whether the personal-data report ran, with counts and the reporting cycle only. Lines identify things by internal identifiers (the change, the project, the scheme) and can quote an error message or Jira's answer. One kind of line carries an Atlassian account ID: when the app ends a queued switch, the line names the person who started it. Atlassian adds each line's site, app version, environment and licence status ([Atlassian: view app logs](https://developer.atlassian.com/platform/forge/view-app-logs/)).

Atlassian turns log sharing on when the app is installed. While it is on, the app's developers at EvidencePair can read these logs in Atlassian's developer console: the app's administrators, and any other contributor given permission to view production logs ([Atlassian: contributors](https://developer.atlassian.com/platform/forge/contributors/)). A site administrator can turn log sharing off, or download the site's logs, in Atlassian Administration under **Apps → Connected apps** ([Atlassian: access app logs](https://developer.atlassian.com/platform/forge/access-app-logs/)). The developer console shows logs for the past 30 days. We read the logs only to troubleshoot the app.

### Notifications

Any notification the app sends is delivered inside the Atlassian product. The app sends no email of its own.

## What we never do

We do not sell, share or transfer customer data to anyone. We do not use it for advertising or profiling. The app's data never leaves Atlassian, and the only part of it we can see is what the platform logs hold.

## Changes to this policy

The date at the top of this page changes when the policy does, and every version is kept in version control.

## Contact

<a href="mailto:{{ site.emails.hello }}">{{ site.emails.hello }}</a>
