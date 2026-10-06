---
title: Project admin guide
app: scheme-control
order: 3
description: Switch between the scheme options your Jira administrator has approved, and undo a change.
source: apps/controlled-project-config/docs/project-admin-guide.md
sourceCommit: 7fcc76f
---

Your Jira administrator has approved some scheme options for your project. You can switch between them yourself, without asking them each time.

## Where to find it

Open your project, go to **Project settings**, and choose **Controlled configuration**.

For each scheme type, the page shows the scheme your project uses now, the options you may switch to, and the most recent changes.

If the page says **No policy covers this project**, nothing here can be switched yet. Ask a Jira administrator to add your project to a policy.

## Switching a scheme

1. **Choose the scheme** you want, and select **Preview**.
2. **Read the preview.** It says what changes in the terms you work with:
   - **Permissions:** who gains or loses each permission. Grants that reach very broad audiences, such as anyone logged in, are highlighted.
   - **Notifications:** who starts or stops being told about each event.
   - **Issue type screens:** a summary of which screens change.
   - **Workflows (beta):** where issues in each status will go. See [How workflow mapping works](/docs/scheme-control/workflow-mapping/).
3. **Give a reason** if your project's policy requires one.
4. **Confirm** by typing your project key, and select **Apply change**.

Permission, notification and screen changes finish straight away. Workflow and issue security changes are finished by Jira in the background. The page updates by itself, and you can leave and come back.

The app checks the scheme again after the change. "Change applied" means Jira now shows the new scheme, not just that the request was sent. If the app is interrupted before it can confirm a change, it checks again later instead of reporting a failure, and the history shows the result once it is known. A workflow or issue security change that Jira has still not applied after several minutes is reported as not taking effect.

### If something stops you

- **"This changed since you previewed it."** Someone changed the scheme after your preview. Preview again.
- **"Another change to this project is in progress."** Only one change runs per project at a time. Try again in a few minutes.
- **A cooldown message.** Your policy asks for time between changes. The message says how long is left. A revert is never held back by the cooldown: putting back what you had is always allowed straight away.
- **"Changes are paused."** A Jira administrator has paused all changes for now.

## Undoing a change

Every successful change has a **Revert** action in the history. A revert puts back the scheme your project had just before that change. It is allowed even if that scheme is no longer one of your options, because you are restoring, not choosing.

A workflow revert asks where issues should go, like a workflow switch does. It warns you if it can't put every issue back exactly where it was. See the [FAQ](/docs/scheme-control/faq/).
