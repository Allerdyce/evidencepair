---
title: Admin guide
app: scheme-control
order: 2
description: Policies, settings, history, the daily checks, and what unlicensed and unsupported look like.
---

## Roles

| Role | Can |
|---|---|
| Jira admin | Everything: create and edit policies, pause, view all history, verify audit integrity, revert any change. |
| Project admin, or a role or group the policy allows, on project P | View P's page, switch within P's effective policy, revert P's changes within policy, view P's history. |
| Anyone else | Nothing. The page is not shown, or shows access denied. |

The app re-derives the effective policy and the caller's rights on every request. Nothing the browser sends is trusted: a crafted request naming a scheme outside the policy is rejected and recorded.

## Policies

A policy selects projects by an explicit list and/or a project category, and lists the allowed schemes per scheme type. A project may match several policies; its options are the union. Per policy you can require a reason, set a cooldown in minutes, and choose who may switch (project admins, or a named project role or group).

## Beta features

Workflow and issue security scheme switching are **beta**. They are off by default and are turned on by a global admin setting. While off, they are not offered anywhere in the app and direct requests for them are refused. They are labelled Beta wherever they appear, because they depend on experimental Jira APIs.

A workflow switch on a project with issues needs a status mapping: for each issue type, where issues in each disappearing status should go. The app suggests defaults by matching status names first, then status categories. A revert of a many-to-one mapping cannot put every issue back where it was; the app warns before you confirm.

## Pause

**Pause all delegated changes** is a global switch. While it is on, project admins see a notice and no switch or revert executes.

## History and export

The admin page lists every change site-wide, with filters for project, scheme type, actor and date range, and a CSV export. Each project's page lists that project's changes. Rejected and unauthorised attempts are recorded too; repeated attempts by the same person for the same action within a minute are counted rather than recorded one by one.

**Verify integrity**, on the audit screen, recomputes the audit chain and reports one of three outcomes: verified (with the record count), broken (naming the first broken sequence number), or could not be run (naming why, and stating that this says nothing about the chain).

## Daily checks

Once a day the app checks that every allowed scheme still exists under the same name, and that covered projects have not been archived or rebuilt as team-managed. Problems appear as warnings on the admin page.

## Locks and stuck changes

One change per project runs at a time. A second attempt while one is in progress is told “change in progress”. A queued change that keeps failing is ended on its next delivery after its retry window, and the project page shows the outcome.

## Unsupported projects

Team-managed and archived projects show an explanation instead of switch controls. Their configuration lives in the project rather than in shared schemes.

## Unlicensed

Without an active licence the app is read-only: current state and history can be viewed and exported, and switching and reverting are turned off. Admin and configuration screens show a banner that links to the Atlassian Marketplace.
