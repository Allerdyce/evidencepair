---
title: Security model
app: controlled-project-config
order: 3
description: Why the app holds admin scopes, how the guards work, what the audit log records, and where data lives.
---

## Why the app holds admin scopes

Assigning a scheme to a project is an administrator-only operation in Jira, so the app must be able to act with administrator capability. A granular-only scope list was measured on a real site and returned 401 for the permission, notification, workflow and issue security scheme reads, so the app uses the classic scopes:

| Scope | Why |
|---|---|
| `read:jira-work` | Read projects, project roles, statuses and issue counts, and check the caller's permissions before anything else happens. |
| `manage:jira-configuration` | Read the site's schemes and assign notification, issue security and workflow schemes to a project. |
| `manage:jira-project` | Assign permission and issue type screen schemes to a project. |
| `storage:app` | The app's own storage: policies, settings, plans, locks, and the audit and history tables. |

## How the guards work

Any privileged action the app performs with its own identity, in a request a person started, is preceded in that same request by a permission check performed **as that person**: for a project admin, the *Administer Projects* permission on that project (or membership of the role or group the policy names); for a Jira admin, the *Administer Jira* permission. The check reads Jira's own answer for that user. The effective policy and the caller's rights are re-derived from storage on every request, and the browser's state is never trusted.

Background work with no calling user (the daily check, the queue that finishes long-running switches, and install or upgrade) takes app identity through a separate path that refuses to run if a calling user is present, so it can never stand in for a permission check. Work a person started keeps that person as the recorded actor even when the background queue completes it.

## What runs before a change lands

Guard as the calling user → policy check → project lock → precondition (the current scheme still equals what was previewed) → apply as the app → verify by re-reading → record. A stale precondition means no change is made. A 2xx response from Jira is not treated as success; only the re-read is.

## What the audit log records

Every change, refusal, revert and abandoned switch writes one audit record: what changed, when, the before and after values as identifiers, the reason given, and who made it. People are stored in audit records as a per-installation pseudonym, an HMAC of their Atlassian account ID. A separate mapping table holds the pseudonym, the account ID and a display-name snapshot, so the log can be shown with names; that mapping can be erased and the log stays verifiable.

The app's change history table, which drives the History screen and the CSV export, stores the Atlassian account ID of the person who made each change and a snapshot of their display name.

Records form a hash chain: each record includes the SHA-256 hash of the record before it, and records are numbered in sequence. **Verify integrity** recomputes the chain and reports the first broken link. It detects any modified, deleted or reordered row, and any row inserted between genuine rows. Removal of the newest rows is detected back to the latest recorded checkpoint. Forged rows appended by code with database write access are out of scope, because only the app's own code can write its database.

## Where data lives

All app data is stored in Forge storage (Key-Value Store and Forge SQL) provisioned for your installation on Atlassian infrastructure. The app declares no external egress and no remote services, so nothing leaves Atlassian. Neither EvidencePair, other apps nor customers can reach the app's database from outside the app.

## The user interface

The app's pages are Custom UI bundles with every asset included. They load nothing from a content delivery network, use no external fonts, and run no third-party analytics or error reporting.

For the portfolio-wide posture, vulnerability reporting and our response commitment, see the [security page](/security/).
