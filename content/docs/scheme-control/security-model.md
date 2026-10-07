---
title: Security model
app: scheme-control
order: 5
description: What the app can and cannot do, and how it is checked.
source: apps/controlled-project-config/docs/security-model.md
sourceCommit: 279b723
---

Scheme Control for Jira lets people who are not Jira administrators change which scheme a project uses. That is a privileged action, so this page explains exactly how the app decides who may do it, and what it records.

## Why the app holds administrative access

Assigning a scheme to a project is an administrative action in Jira. The app needs that access to do anything at all. It gets it from the permissions approved at install (see [Installing](/docs/scheme-control/install/)). It never uses that access on behalf of someone who hasn't first passed the checks below.

## Every request is checked as the person making it

Before the app touches Jira, every request is checked as **the person using the page**, in this order:

1. **Who is asking.** Jira confirms the person's identity and their rights on the project: project administrator, or a project role the policy allows.
2. **What the policy allows.** The app works out the project's effective policy fresh, from storage, on every request. Nothing the page sends is trusted. A request for a scheme that isn't allowed is refused, even if it is built by hand.
3. **Whether the site allows changes right now.** The app must be licensed, changes must not be paused, and beta types must be turned on before they can be used.
4. **Only then** does the app make the change with its own access. Afterwards it reads the project back to confirm the change took effect.

**Queued changes and the app's own jobs.** A workflow or issue security switch is checked as above when it is confirmed, then queued: Jira applies it in the background, as the app, within 60 minutes, without asking the person again. The app's own scheduled work (the daily check and upgrades) and its personal-data report run as the app with no person behind them. They read and record, end changes that stalled, and report account IDs; they never start a scheme change.

A Jira administrator is checked the same way. **Site-wide admin rights don't override the policy.** On a project no policy covers, every switch is refused, and the refusal explains how to proceed. Jira's own project settings are never blocked by the app.

## What is recorded

Every change, refusal, revert and abandoned change writes **one audit record**. It holds who, when, the project, the scheme before and after, and the reason given. Repeated refusals of the same person and action within a minute write one record, plus a count of the further attempts.

- **People are shown by their Atlassian account ID** in the history and the audit trail, not by their display name. Inside the audit trail each person is stored as a pseudonymous reference, mapped to the account ID in a separate table, so erasing a closed account leaves the chain intact. Looking up display names would need an extra permission to read user profiles. The app doesn't ask for it, because the name is a convenience and the account ID is the identity. Any site administrator can look up an account ID in Atlassian administration.
- **In a preview, a person may be named.** When a permission or notification scheme grants access to a specific person, the preview shows their name if Jira includes it in the scheme it returns, and otherwise "a specific person" with their account ID. The app does not look the name up, and it never stores it.
- **Every change is recorded, even if something fails at the worst moment.** Just before the app writes to Jira, it notes that it is about to. If the write happens but the app is stopped before it can record it, a later check (on retry, or the daily check) re-reads Jira and records what actually happened. A change cannot reach Jira without ending up in the audit trail.
- **Records are chained.** Each record contains a hash of the one before it, so a changed, removed or reordered record can be detected. **Verify the audit trail**, on the Checks tab, recomputes the chain and reports the first broken link.
- **Erasure.** When an Atlassian account is closed, the link from that account to its records can be erased, and the chain still verifies.

## Where data lives

Policies, settings and history are stored in the app's own storage on Atlassian infrastructure (Forge storage and Forge SQL). The app makes no outside connections, and sends nothing outside Atlassian. Its developers can read its platform logs in Atlassian's developer console while a site administrator allows log sharing.

## What the app never does

- It never edits a scheme's contents. It only changes which scheme a project uses.
- It never touches team-managed projects. Their configuration lives inside the project.
- It never acts on its own except in three cases: the daily policy check, ending a queued change that has waited too long, and setting up its own tables on install. Each of these is recorded as the app's own action.
