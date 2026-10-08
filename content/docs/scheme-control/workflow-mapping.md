---
title: How workflow mapping works (beta)
app: scheme-control
order: 4
description: Why a workflow switch asks questions, the suggested choices, the check before you confirm, resolutions that stay, lossy changes and reverts.
source: apps/controlled-project-config/docs/workflow-mapping.md
sourceCommit: f285dbf
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

## Checking the change

Before you confirm, the check screen lists where each status's issues go, with the number of issues.

If issues from more than one status will end up in one status, it says so plainly. For example: "Task: 200 issues in “To Do” will join the 150 already in “In Progress”. A later revert can't tell them apart." That includes a status both workflows have. Its own issues don't move, so any issues you send there join them.

### Resolutions stay as they are

A workflow switch changes each issue's status, and nothing else. **Jira keeps an issue's resolution when its workflow changes.** So if you move resolved issues, for example from "Closed" into "In Progress", they stay resolved: Jira shows their keys struck through, and they don't appear in "unresolved" filters or on boards that hide resolved issues.

When that will happen, the check screen says so, with the number of issues, for example: "Task: the 150 issues moving from “Closed” to “In Progress” keep their resolution." It also offers a search in Jira for the project's issues that are resolved but not in a done status. A revert that leaves resolved issues in such a status says the same in its warning, with the same search.

The app doesn't change issues, so it never clears a resolution itself. Clearing one would need permission to edit your issues, which the app doesn't ask for. If you want those issues unresolved, use the search to find them and change them in Jira. Moving issues into a status in the done category, such as "Closed" into "Done", keeps them resolved as they should be, so nothing is said.

## How long it takes

Jira moves the issues in the background. The check screen gives an estimate based on how many issues will move. It comes from measured switches and reverts: moving 150 issues took 20 to 30 seconds, moving 350 took 30 to 45, and a revert that moved no issues still took 23 to 28. The page shows progress and updates by itself, and you can leave it and come back.

## Lossy changes, and reverts

If you send issues from **several** statuses into **one**, the switch is **lossy**. Afterwards, nothing records which status each issue came from.

A switch is lossy too if you send issues into a status **both workflows have**, even from one status. Jira leaves issues in a status the old workflow also has, so a revert can't move them back. Sending an empty status there moves nothing, so that switch stays fully reversible.

You can still revert a lossy switch. The revert asks where issues should go, like any workflow switch. Its starting choices send each status back where the original change moved issues from, wherever that is possible. Where several statuses were merged into one, the starting choice sends it back to the one that held the most issues when the switch was made. If two held the same number, it starts at the first of them in the original switch. If the app did not record those numbers, because the switch was made before it recorded them or because Jira couldn't count them at the time, it makes no choice for that status: it tells you which status and why, and you choose before the revert can run.

Before you confirm, the revert warns you that merged issues can't be split back exactly, and says what will actually happen to them:

- **If the workflow being put back also has the merged status,** its issues **stay there**. None of them goes back to where it came from. The mapping step lists this status too, and says why it stays.
- **If it doesn't,** they **all move** to the one status chosen for them. Only the issues that came from that status are back where they were.

The revert's check screen also counts the issues it will move and estimates how long it will take, as a switch's does.

### Finding the issues a revert couldn't put back

The warning, and the result once the revert has run, offer a link to a search in Jira for those issues. It finds them by their status history: for example, issues that moved from "To Do" to "In Progress" when the switch ran. The search names the project, issue type and statuses in words, so you can read it in Jira and change it.

Once a revert that left issues behind has run, its result starts by saying how many issues didn't go back to the status they were in before the switch, and then that the previous scheme is in use again.

Jira reads the search's dates in your own time zone, which the app can't know. So the search looks from the day before the switch to the day after. It can also find issues someone moved the same way by hand in those days.

## If a workflow change can't finish

Only one change runs on a project at a time. A workflow or issue security change holds the project from the moment you confirm it, so a change confirmed while it waits for Jira or runs is refused with "Another change to this project is in progress." If a confirmed change still can't start, for example because an administrator released its lock and another change took the project, it waits its turn. It stops trying after **60 minutes**. A change that is stopped this way didn't take effect, and its history row says so. The daily check also ends any queued change that has been waiting longer than that, so a change can never stay "in progress" indefinitely.
