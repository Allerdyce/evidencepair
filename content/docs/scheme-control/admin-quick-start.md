---
title: Admin quick start
app: scheme-control
order: 2
description: Set up your first policy in a few minutes.
source: apps/controlled-project-config/docs/admin-quick-start.md
sourceCommit: f285dbf
---

You are a Jira administrator. You want project admins to switch some of their own project's schemes without giving them *Administer Jira*. You do that with **policies**.

## 1. Create a policy

Open **Settings → Marketplace apps → Scheme Control for Jira → Policies**, and choose **New policy**.

- **Name.** Something a project admin will recognise, such as "Marketing projects".
- **Projects it covers.** Pick projects one by one, a project category, or both. A category covers every project in it, including projects added to the category later.
- **Allowed schemes, per type.** For each type (permission, notification, issue type screen), choose the schemes a project may switch to. A type with nothing chosen can't be switched under this policy.
- **Require a reason.** On by default. The project admin must say why. The reason is kept in the history.
- **Cooldown.** Optional. The minimum time between two changes to the same project. Reverts are exempt, so a mistaken change can always be undone straight away.
- **Who may switch.** Project admins always can. You can also allow one or more project roles, chosen by name. To let a group switch, add the group to one of those roles in the project, in Jira.

Save it. The **Effective policy** preview below the list shows, for any project, what its admins can actually switch to.

## 2. When a project is covered by more than one policy

A project gets the options of **every** policy that covers it, combined. The effective policy preview shows which policies contributed each option.

## 3. When no policy covers a project

Nobody can switch that project's schemes through the app, **including Jira administrators**. The policy is the authority: an app that let site-wide admin rights override it would have no governance to offer.

The project's page says so, and names the two ways forward. A Jira administrator can add the project to a policy, or change the scheme with Jira's own project settings, which the app never blocks.

## 4. The settings tab

- **Pause all delegated changes.** One switch stops every change through the app, everywhere. Project admins see a notice. History stays readable.
- **Beta features.** Workflow and issue security switching are off by default. See [How workflow mapping works](/docs/scheme-control/workflow-mapping/) before you turn them on.
- **Your data.** **Export all app data** downloads the app's records for your site as one file (policies, settings, the history, the audit trail and the refusal counters), and then the history of scheme changes as CSV. Uninstalling the app removes this data, so export it first if you need a copy.

## 5. History and checks

- **History** lists every change, refusal and revert on the site, and every change to policies and settings. A revert is marked as one, and a refused attempt shows the reason the person typed for it. You can filter it by type, including refused attempts, and export the changes as CSV, up to 10,000 per file; past that, the page says so and you narrow the dates. People are identified by their Atlassian account ID. See the [FAQ](/docs/scheme-control/faq/) for why.
- **Checks** shows the daily policy check. It flags any allowed scheme that was deleted or renamed, and any covered project that was archived or recreated as team-managed. From this tab you can also:
  - **Verify the audit trail.** This recomputes the chain of records and reports the first broken link, if there is one.
  - **Release a stuck project lock.** Only one change runs on a project at a time. If a change was interrupted and a project still says another change is in progress, release the lock here. Your reason is recorded.
