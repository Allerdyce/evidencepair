---
title: Installing Scheme Control for Jira
app: scheme-control
order: 1
description: What the app needs, and why, and how to check that it is ready.
source: apps/controlled-project-config/docs/install.md
sourceCommit: 279b723
---

Scheme Control for Jira works on **Jira Cloud company-managed projects**. It installs from the Atlassian Marketplace like any other app.

## What the app needs, and why

When you install, Jira asks you to approve the app's access. The app asks for five permissions:

<div class="table-wrap" tabindex="0" role="region" aria-label="Permissions the app asks for">

| Permission | What the app uses it for |
|---|---|
| Read Jira work (`read:jira-work`) | Read projects, project roles, workflow statuses and issue counts, and check whether the person using the app may change a project. |
| Manage Jira configuration (`manage:jira-configuration`) | Read your site's schemes, and assign notification, issue security and workflow schemes to a project. |
| Manage Jira projects (`manage:jira-project`) | Assign permission and issue type screen schemes to a project. |
| App storage (`storage:app`) | Keep your policies, settings and the change history inside the app's own storage on Atlassian. |
| Report personal data (`report:personal-data`) | Tell Atlassian which account IDs the app stores, on Atlassian's reporting cycle, and learn which accounts have been closed so the app can erase them. It reads no personal data. |

</div>

The app never sends data outside Atlassian. It has no outside connections at all.

The app changes which scheme a project uses. That is an administrative action in Jira, so the app needs administrative access. **Its access comes from the permissions you approve at install.** It does not depend on the app's user being in the `atlassian-addons-admin` group.

## Check that it is ready

1. Go to **Settings → Marketplace apps** and open **Scheme Control for Jira** in the left menu.
2. The **Setup** tab runs a harmless check. It reads one permission scheme, which only an administrator can do.
   - **Ready** means the app can do its job.
   - **Not ready** shows the steps below.

### If the setup check says "not ready"

1. Open **Settings → Marketplace apps → Manage apps** and confirm that Scheme Control for Jira is installed and enabled.
2. If Jira asked you to approve the app's access again after an update, approve it.
3. If the check still fails, reinstall the app. Its administrative access comes from the permissions approved at install.

## Next steps

- [Admin quick start](/docs/scheme-control/admin-quick-start/): set up your first policy in a few minutes.
- [Security model](/docs/scheme-control/security-model/): what the app can and cannot do, and how it is checked.
