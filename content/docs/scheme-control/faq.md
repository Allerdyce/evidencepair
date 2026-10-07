---
title: FAQ
app: scheme-control
order: 6
description: Policies and Jira administrators, lossy reverts, Jira's own audit records, account IDs, licensing, stuck changes, export and uninstall.
source: apps/controlled-project-config/docs/faq.md
sourceCommit: 279b723
---

## I'm a Jira administrator. Why can't I switch a scheme on this project?

No policy covers the project. In Scheme Control for Jira, **the policy is the authority**, for everyone. If site-wide admin rights could override it, the app would offer no governance at all. You have two options:

- add the project to a policy, in **Settings → Marketplace apps → Scheme Control for Jira → Policies**; or
- change the scheme in Jira's own **Project settings**. The app never blocks that.

## What does "lossy" mean on a workflow revert?

Suppose a workflow switch moved issues from *several* statuses into *one*, or moved issues into a status both workflows have. Afterwards, nothing records which status each issue came from. A revert can still put the old workflow back, but it can't put those issues back exactly. What happens to them depends on the status they were merged into:

- If the old workflow has that status too, the issues **stay in it**.
- If it doesn't, they **all move** to one status: the one you choose in the revert's mapping step. It starts at the status that held the most of them. If the app didn't record those numbers, it doesn't guess: it tells you, and you choose.

The app tells you which of these will happen before you confirm. It also offers a search in Jira that finds the issues by their status history, so you can move them back by hand if you need to. See [How workflow mapping works](/docs/scheme-control/workflow-mapping/).

## Why does Jira's own audit log show so many records for one workflow switch?

Jira records a workflow switch as about eight records in its audit log. Most of them are Jira's own steps: it creates temporary workflows and a temporary scheme, uses them to move the issues, then deletes them. Jira also shows the app as the author of each record, because the app makes the change.

The app's **History** is the readable account. It shows one line per switch, with who asked for it, why, when, and how it ended. The app's audit trail holds the same, and can be verified on the **Checks** tab.

## Why does the history show an account ID instead of a name?

The app shows each person by their **Atlassian account ID**. Inside the audit trail, each person is stored as a pseudonymous reference, and a separate table maps it to the account ID, so a closed account can be erased without breaking the trail. Showing display names would need an extra permission to read user profiles. The app doesn't ask for it, because a name is a convenience and the account ID is the identity: it never changes, and it can't be confused with someone else's. An administrator can look up any account ID in Atlassian administration.

## What happens when the app isn't licensed?

History stays readable and can still be exported. Switching and reverting are turned off.

A note on how this was tested. Atlassian's development tools can't switch a test installation to unlicensed. So the unlicensed behaviour is verified by automated tests that run the app's own code in-process, with the licence reported as inactive. It hasn't been observed on a live unlicensed site.

## A change says "in progress" and nothing is happening. What now?

Workflow and issue security changes are finished by Jira in the background, and usually take seconds to a few minutes. A change that can't run within **60 minutes** is stopped, and its history row says it didn't take effect. A daily check also stops any queued change that has waited longer than that.

If a project still says another change is in progress after an interrupted change, a Jira administrator can release its lock. That is on the **Checks** tab, and the release is recorded with their reason.

## Does the app support team-managed projects?

No. A team-managed project keeps its configuration inside the project rather than in shared schemes, so there is nothing to switch. Its page says so.

## Can we export the app's data?

Yes. On the **Settings** tab, **Export all app data** downloads one file with the app's records for your site: policies, settings, the history of changes, the audit trail and the refusal counters. It is not a raw copy of every internal record: short-lived working records (previews, locks and in-progress markers) and the key used to make the audit trail's pseudonymous references are left out. A second button then saves the history as CSV. Both files are built in your browser. Only Jira administrators can export.

## What happens to our data if we uninstall the app?

Uninstalling removes everything the app stored for your site: policies, settings, history and the audit trail. Atlassian's platform does the removal. Atlassian soft-deletes it and keeps it for the retention period set out in its SOC 2 report, then destroys it ([data lifecycle](https://developer.atlassian.com/platform/forge/storage-reference/hosted-storage-data-lifecycle/)); its storage reference gives 28 days for an uninstalled app ([data recovery](https://developer.atlassian.com/platform/forge/storage-reference/#data-recovery-for-apps-with-hosted-storage)). A reinstall starts empty. Within 21 days of the uninstall, the old data can be restored to a new installation, but only if you ask us and Atlassian does it with your consent. Export your data first if you need a copy. The schemes your projects use belong to Jira, so they stay exactly as they are.

## Does any data leave Atlassian?

The app itself sends nothing outside Atlassian. It stores everything in its own storage on Atlassian and makes no outside connections. Two things to know: the app's developers can read its platform logs in Atlassian's developer console, which a site administrator can turn off; and anything you send to our support address goes through our email providers. The privacy policy and data processing agreement give the details.
