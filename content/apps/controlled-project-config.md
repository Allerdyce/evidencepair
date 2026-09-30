---
name: Controlled Project Configuration for Jira
product: Jira
tagline: Let project admins switch between admin-approved schemes, without handing out Jira admin rights.
price: ""
status: coming soon
marketplaceUrl: ""
docsPath: /docs/controlled-project-config/
description: Jira admins define which schemes each project may use. Project admins switch between those options themselves, with a preview, a reason, an audit trail and a revert.
updated: 2026-09-29
---

## The problem it solves

In Jira Cloud, switching a project's permission, notification or workflow scheme requires the global *Administer Jira* permission. Project leads wait on central admins for routine changes, or admins hand out global admin rights, which is a security and compliance risk.

## What it does

- **Policies.** A Jira admin says which permission, notification and issue type screen schemes each project, or each project category, may use. A project covered by more than one policy gets all of their options.
- **Switching, without Jira admin rights.** On a project's settings page, its admins see what each scheme is set to now, what they may switch to, and what has changed recently.
- **A preview before anything happens.** Permission changes list who gains and loses each permission, with broad audiences such as “any logged-in user” called out. Notification changes list who starts and stops being told about each event.
- **A reason, and a confirmation.** Policies can require a reason, and every change is confirmed by typing the project key.
- **A history you can audit.** Every change, refusal and revert is recorded with who, when, why and what changed, and can be exported as CSV. The record is chained, so a missing or altered entry can be detected.
- **Revert.** A successful change can be put back to what the project had before, even if that option is no longer on the list.
- **Guard rails.** One change per project at a time, a cooldown between changes, and a site-wide pause switch.
- **Daily checks.** The app tells admins when a policy points at a scheme that has been deleted or renamed, or at a project that has been archived or rebuilt as team-managed.
- **Beta: workflow and issue security switching.** Off until an admin turns it on, and labelled Beta wherever it appears, because it depends on experimental Jira APIs. A workflow switch moves issues between statuses, so it asks where issues in each disappearing status should go, and warns when a revert could not put them all back.

## Who it is for

Jira site admins and platform teams who want to delegate routine configuration without widening who holds *Administer Jira*. The people who use it day to day are project admins.

## What it does not do

- It does not edit schemes. It only changes which approved scheme a project is assigned.
- It does not switch issue type schemes.
- It has no approval step. A project admin's switch executes within policy; it is not held for an admin to approve.
- Team-managed projects are not supported: their configuration lives in the project rather than in shared schemes.
- It does not manage Jira Service Management configuration such as request types or queues.
- Without a licence, history stays readable and exportable; switching is turned off.

## Permissions it asks for

<div class="table-wrap" tabindex="0" role="region" aria-label="Permissions the app asks for">

| Scope | Why |
|---|---|
| `read:jira-work` | Read projects, project roles, statuses and issue counts, and check the caller's permissions before anything else happens. |
| `manage:jira-configuration` | Read the site's schemes and assign notification, issue security and workflow schemes to a project. |
| `manage:jira-project` | Assign permission and issue type screen schemes to a project. |
| `storage:app` | The app's own storage: policies, settings, plans, locks, and the audit and history tables. |

</div>

The app declares no external egress: it talks only to Atlassian. Why the classic scopes and not granular ones, with the measurement behind it, is on the [security model](/docs/controlled-project-config/security-model/#why-the-app-holds-admin-scopes) page, along with how the permission checks work and what the audit log records.
