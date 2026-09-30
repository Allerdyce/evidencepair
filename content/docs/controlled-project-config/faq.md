---
title: FAQ
app: controlled-project-config
order: 4
description: Lossy reverts, stale previews, concurrent changes, identity in the audit log.
---

## When is a revert lossy?

A revert restores the scheme a project had immediately before a change. For permission, notification, issue type screen and issue security schemes that is a straight restore. For a workflow scheme (beta), issues were moved between statuses by the original switch. If two or more old statuses were mapped to one new status, a revert cannot tell which issues came from which, so it cannot put every issue back where it was. The app shows a lossy warning before you confirm such a revert.

## Why is the revert target allowed even though it is no longer in the policy?

A revert is a restore, not a new choice. It puts the project back to what it had before, so it is always allowed to the same audience under the same policy.

## The page says the configuration changed since my preview. What happened?

Someone or something changed the scheme between your preview and your confirmation. The app checks that the current scheme still equals what you previewed before it does anything; if not, it makes no change and asks you to review again.

## Two people tried to switch the same project at once. What happens?

Exactly one executes. The other is told “change in progress”. Once the first finishes, the second can preview again.

## Why does the app need `manage:jira-configuration`?

Reading the site's schemes and assigning notification, issue security and workflow schemes to a project are administrator operations in Jira that need that scope. A granular-only scope list was measured on a real site and could not read permission, notification, workflow or issue security schemes.

## Does any data leave our Atlassian site?

No. The app declares no external egress and talks only to Atlassian. Its data lives in Forge storage for your installation, on Atlassian infrastructure. See the [security model](/docs/controlled-project-config/security-model/) and the [privacy policy](/privacy/).

## How are people identified in the audit log?

In the tamper-evident audit records, by a per-installation pseudonym derived from the Atlassian account ID. A separate, erasable table maps that pseudonym to the account ID and a display-name snapshot so the log can show names. In the change history table behind the History screen, by Atlassian account ID and a display-name snapshot.

## What does the app do without a licence?

It becomes read-only. History can be viewed and exported; switching and reverting are turned off.

## Does it work on team-managed projects?

No. Their configuration lives in the project rather than in shared schemes. The project page shows an explanation instead of switch controls.
