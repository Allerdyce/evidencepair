---
title: Data processing agreement for Atlassian Marketplace apps
updated: 2026-10-06
description: EvidencePair LLC's data processing agreement for its Atlassian Marketplace apps, covering the personal data they process, where, for how long, who processes it and how it is protected.
---

{% pending "This is a draft awaiting legal review. It is published so customers can see what it will say; it is not yet part of any agreement.", "HUMAN-TASKS H-21" %}

This is EvidencePair LLC's data processing agreement (“DPA”) for its Atlassian Marketplace apps. It is between {{ site.legalName }} (“EvidencePair”, “we”) and a customer that installs one of those apps on its Atlassian site (“you”). Today it covers one app, **Scheme Control for Jira**. It does not cover Paperloft apps, which process your documents on your Mac (see the [privacy policy](/privacy/)).

Our Atlassian apps are governed by Atlassian's standard end-user agreement (see [terms](/terms/)). Under that agreement, a data processing agreement applies when the app's Provider-Specific Terms on its Marketplace listing identify it.

## 1. Roles

You decide who on your site uses the app and for what: for the personal data the app processes, you are the controller. EvidencePair provides the app, which processes that data on your behalf: for that processing, EvidencePair is your processor. The app runs on Atlassian's Forge platform.

## 2. The personal data

- **Whose:** the people on your site who use the app: Jira administrators, project administrators, and members of project roles a policy allows, including anyone whose attempt the app refuses.
- **What:** Atlassian account IDs, of the people who make, revert, preview or are refused changes and of the administrators who edit policies or settings; and whatever a person chooses to type into a reason field, which is stored as entered.
- **What not:** the app stores no display names, email addresses or other profile data, and has no permission to read them. It reads no issue content, comments or attachments.
- **Audit records:** each record names the person by a pseudonymous reference derived from their account ID, never by the account ID itself. A separate table maps the reference to the account ID, outside the audit trail's hash chain, so it can be erased without breaking the chain.

The full list of what the app stores, and for how long, is in the [privacy policy](/privacy/#what-the-app-stores).

## 3. Purpose

The app processes this data only to provide its functions: to check who may change a project's schemes, to record who changed, reverted or was refused what and why, to show and export that record, to report stored account IDs to Atlassian and erase those of closed accounts, and, through the platform logs, to let us troubleshoot the app. Processing lasts while the app is installed, and ends as described under [retention and deletion](#5-retention-and-deletion).

## 4. Where it is processed

- **In the app's own storage on Atlassian's Forge platform:** the Forge Key-Value Store and Forge SQL, provisioned for your installation.
- **Nowhere else:** the app declares no external egress and no remote services. It makes requests only to Atlassian APIs, and no app data reaches EvidencePair's own systems.
- **Location:** Atlassian keeps Forge-hosted storage in the location of your Atlassian product ([Atlassian: data lifecycle, data residency](https://developer.atlassian.com/platform/forge/storage-reference/hosted-storage-data-lifecycle/)).
- **Runs on Atlassian:** the app is designed to be eligible for Atlassian's [Runs on Atlassian](https://developer.atlassian.com/platform/forge/runs-on-atlassian/) badge, which needs Atlassian-hosted compute and storage and no egress. Atlassian decides eligibility and applies the badge to listed apps; the app is not listed yet.
- **Platform logs:** the lines the app writes while it runs are kept by Atlassian and can be read by the app's developers in Atlassian's developer console, as the [privacy policy](/privacy/#platform-logs) describes.

## 5. Retention and deletion

- **While installed:** audit records, the history of changes, refusal counters and change outcomes are kept for the life of the installation; the app offers no retention setting. Shorter-lived records are kept for the periods the [privacy policy](/privacy/#retention) lists.
- **Closed accounts:** once a week the app reports the account IDs it stores to Atlassian, and erases those Atlassian reports as closed from everywhere the app keeps them. Audit records stay, and still verify, but no longer say who. One narrow gap: a change previewed by that person in the seconds before the weekly check can keep their account ID until it expires.
- **Uninstall:** uninstalling the app removes everything it stored for your site. Atlassian's documentation says the data is soft-deleted and kept for 28 days before it is deleted, and that within 21 days it can be relinked to a new installation only if the app's developer asks Atlassian with your consent ([data lifecycle](https://developer.atlassian.com/platform/forge/storage-reference/hosted-storage-data-lifecycle/), [data recovery](https://developer.atlassian.com/platform/forge/storage-reference/#data-recovery-for-apps-with-hosted-storage)).
- **Exports:** a Jira administrator can export everything the app stores before uninstalling. Exported files are outside the app: they contain account IDs, and the app's erasure cannot reach them.
- **Logs:** Atlassian's developer console shows the app's logs for the past 30 days.

## 6. Sub-processor

EvidencePair uses one sub-processor for the app's personal data: **Atlassian**, whose Forge platform hosts the app's code, storage, queues and logs. No other service processes the app's personal data for us.

## 7. Who at EvidencePair can access it

EvidencePair cannot reach the app's storage from outside the app. The app's developers can read its platform logs in Atlassian's developer console while your site shares logs with us; one kind of log line holds an account ID. A site administrator can turn log sharing off in Atlassian Administration. Anything you send us yourself, such as an exported file in a support request, is correspondence, kept as the [privacy policy](/privacy/#this-website) describes.

## 8. Security measures

These are true of the app today:

- **Isolation.** The app's storage is provisioned for your installation on Atlassian's infrastructure, and only the app's own code can read or write it. Atlassian encrypts Forge-hosted storage on disk ([Atlassian: storage](https://developer.atlassian.com/platform/forge/storage-reference/)).
- **No egress and no third parties.** No external permissions, no remote services, no analytics, no error-reporting service, no content delivery networks and no external fonts. A check in our build refuses any manifest that declares egress.
- **A permission check as the person, every time.** Before the app touches Jira, it checks every request as the person using the page, and works out what the policy allows fresh from storage. Nothing the page sends is trusted. The app acts on its own only for its daily check, to end a queued change that has waited too long, and to set up its tables on install.
- **Least access inside your site.** Jira administrators see all policies and history, and only they can export. A project's administrators, or a project role a policy allows, see that project's page and history. Anyone else sees nothing.
- **Pseudonymous, tamper-evident audit records.** Records name people by a pseudonymous reference and are chained by hash; **Verify the audit trail** recomputes the chain and reports the first broken link.
- **Minimal data.** No display names, email addresses or profile data, and no secret other than one random key the app generates per installation for the pseudonymous references.

## 9. Personal data breaches

If EvidencePair becomes aware of a personal data breach affecting personal data the app processes for you, we will notify you without undue delay, with the information we have about it.

## 10. Helping with your obligations

- **Access and portability:** **Settings → Export all app data** gives a Jira administrator everything the app stores, as JSON, with the history also as CSV.
- **Erasure:** closed accounts are erased automatically, as described above. Uninstalling removes everything.
- Contact us at <a href="mailto:{{ site.emails.support }}">{{ site.emails.support }}</a> about any request these do not cover.

## 11. Contacts

- Support: <a href="mailto:{{ site.emails.support }}">{{ site.emails.support }}</a>
- Security, including suspected breaches and vulnerabilities: <a href="mailto:{{ site.emails.security }}">{{ site.emails.security }}</a>

## 12. Still to be settled

{% pending "International transfers, notice of a new sub-processor, audit rights, liability and governing law are not yet written. They are for the legal review to settle; nothing on this page should be read as covering them.", "HUMAN-TASKS H-21" %}
