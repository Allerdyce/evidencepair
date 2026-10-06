---
title: How workflow mapping works (beta)
app: scheme-control
order: 4
description: Why a workflow switch asks questions, the suggested choices, lossy changes and reverts.
source: apps/controlled-project-config/docs/workflow-mapping.md
sourceCommit: 7fcc76f
---

Workflow and issue security switching are **beta features**. They depend on Jira REST APIs that Atlassian marks as experimental. Both are off until a Jira administrator turns on **Beta features** in the app's settings.

## Why a workflow switch asks questions

A workflow scheme decides which statuses each issue type uses. The new workflow may not have every status your issues are in today. Jira must be told where those issues go before it can switch.

So before a workflow switch, the app shows each status that is missing from the new workflow, with the number of issues in it. You choose a status in the new workflow for each one. Issues in statuses that both workflows share stay where they are.

## The suggested choices

The app picks a starting choice for each status:

1. a status in the new workflow **with exactly the same name**, if there is one;
2. otherwise, one in the **same category** (to do, in progress, or done).

You can change any choice. You can't continue until every status has one.

## How long it takes

Jira moves the issues in the background. The preview gives an estimate based on how many issues will move. The page shows progress and updates by itself, and you can leave it and come back.

## Lossy changes, and reverts

If you send issues from **several** statuses into **one**, the switch is **lossy**. Afterwards, nothing records which status each issue came from.

You can still revert a lossy switch. The revert asks where issues should go, like any workflow switch. Its starting choices send each status back where the original change moved issues from, wherever that is possible. Where several statuses were merged into one, the starting choice sends it back to the one that held the most issues when the switch was made. If two held the same number, it starts at the first of them in the original switch. If the app did not record those numbers, because the switch was made before it recorded them or because Jira couldn't count them at the time, it makes no choice for that status: it tells you which status and why, and you choose before the revert can run. Before you confirm, it warns you that issues merged into one status can't be split back exactly. They will all move to one status.

## If a workflow change can't finish

Only one change runs on a project at a time. A workflow or issue security change holds the project from the moment you confirm it, so a change confirmed while it waits for Jira or runs is refused with "Another change to this project is in progress." If a confirmed change still can't start, for example because an administrator released its lock and another change took the project, it waits its turn. It stops trying after **60 minutes**. A change that is stopped this way didn't take effect, and its history row says so. The daily check also ends any queued change that has been waiting longer than that, so a change can never stay "in progress" indefinitely.
