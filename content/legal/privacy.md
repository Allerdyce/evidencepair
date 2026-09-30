---
title: Privacy policy
updated: 2026-09-29
description: What EvidencePair's website and apps store, where it lives, and what we never do with it.
---

<p class="note">Every factual statement on this page is traced to a line in the data inventory for each app, kept with the source of this site. Where the inventory does not yet answer a question, this page says so rather than guessing.</p>

## Who we are

{{ site.legalName }} (“EvidencePair”, “we”) builds apps for Atlassian products and runs this website. Contact: <a href="mailto:{{ site.emails.hello }}">{{ site.emails.hello }}</a>.

## This website

This website collects nothing. It sets no cookies, stores nothing in your browser, runs no analytics, and makes no request to any third party. There are no forms.

{% if site.host %}The site is served by {{ site.host }}, which processes requests in order to serve pages. We do not receive or use visitor analytics from it.{% else %}{% pending "Name the hosting provider and state what request data it processes on our behalf.", "HUMAN-TASKS H-03" %}{% endif %}

If you email us, we keep the correspondence for as long as we need it to answer you and to keep a record of support and security reports.

## Our apps

The rest of this policy describes **Controlled Project Configuration for Jira**. When we publish another app, this page will describe it too.

### Where data lives

All app data is stored in Atlassian Forge storage (the Forge Key-Value Store and Forge SQL) provisioned for your installation, on Atlassian infrastructure. The app declares no external egress and no remote services: it makes requests only to Atlassian APIs within your site. No app data reaches EvidencePair's own systems, and EvidencePair cannot reach the app's storage from outside the app.

### What the app stores

- **Policies and settings.** Which projects or project categories a policy covers, which schemes each may use, whether a reason is required, the cooldown, and which project role or group may switch. The global pause and beta-features settings.
- **Locks.** While a change runs, a lock record for the project holding a random token and an expiry time.
- **Audit records.** One per change, refusal, revert or abandoned switch, one per lock released by an administrator, and one per daily policy check: the action, the project key and name, the before and after scheme identifiers, the outcome, the reason the person entered, timestamps, and a chain of hashes. The person is recorded as a per-installation pseudonym derived from their Atlassian account ID, never as an account ID or a name.
- **Audit actor mapping.** A separate table that maps each pseudonym to the Atlassian account ID and a snapshot of the display name, so the audit log can be shown with names. It is kept outside the audit chain, so it can be erased without breaking it.
- **Change history.** One row per change, behind the History screen and the CSV export: the project, the scheme type, the previous and new scheme identifiers and names, any status mapping, the reason the person entered, the outcome, timestamps, and the Atlassian account ID and a display-name snapshot of the person who made the change.
- **Queued switches.** A workflow or issue security switch (beta) is finished in the background. The queue message for it carries the Atlassian account ID and display name of the person who started it until the switch finishes or is abandoned.

The personal data involved is therefore: Atlassian account IDs, display-name snapshots, and whatever a person chooses to type into a reason field.

### Who can see it

Jira administrators can see all policies and all history on the site. A project's administrators, or the role or group a policy names, can see that project's page and history. Anyone else sees nothing.

### Rejected and unauthorised attempts

An attempt to switch outside policy, or by someone without the right role, is recorded with the person who attempted it. Repeated attempts by the same person for the same action within a minute are counted rather than recorded one by one; the counter is a short-lived record keyed by the account ID, the action and the minute, and is discarded after five minutes.

### Retention

Audit records and change history are kept for the life of the installation. The app currently offers no retention setting.

### Account closure and erasure

{% pending "State how closed Atlassian accounts are reported and erased. The shared core has the routine; the app does not yet run it, so nothing can be promised here until it does.", "HUMAN-TASKS H-06" %}

### Uninstall

{% pending "State what happens to app data when the app is uninstalled. The app's source does not yet document this.", "HUMAN-TASKS H-07" %}

### Platform logs

{% pending "State what the app writes to Forge platform logs, who can read them, and how long Atlassian keeps them.", "HUMAN-TASKS H-08" %}

### Notifications

Any notification the app sends is delivered inside the Atlassian product. The app sends no email of its own.

## What we never do

We do not sell, share or transfer customer data to anyone. We do not use it for advertising or profiling. We cannot: it never leaves your Atlassian site.

## Changes to this policy

The date at the top of this page changes when the policy does, and every version is kept in version control.

## Contact

<a href="mailto:{{ site.emails.hello }}">{{ site.emails.hello }}</a>
