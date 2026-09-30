---
title: Quick start
app: controlled-project-config
order: 1
description: Install, check the setup, create a policy, make the first switch.
---

## 1. Install the app

Install Controlled Project Configuration on your Jira Cloud site from the Atlassian Marketplace. Installing needs a Jira administrator. The app asks for the scopes listed on the [app page](/apps/controlled-project-config/); it declares no external egress.

## 2. Check the setup

Open **Jira settings → Apps → Controlled Project Configuration**. The admin page runs a setup check: it probes a harmless administrator-only read that the app needs for every change, and reports **ready** or **not ready**. If it is not ready, the page says so plainly and lists the setup steps.

## 3. Create a policy

A policy says which projects it covers, by listing them or by project category, and which schemes those projects may use for each scheme type. The core scheme types are permission, notification and issue type screen. Scheme types you leave without an allowed list are not switchable under that policy.

Each policy also sets:

- **Require a reason** (on by default). The person switching must say why.
- **Cooldown**, in minutes (0 by default). How long a project waits between changes.
- **Who may switch**: project admins by default, or a named project role or group.

A project covered by more than one policy gets the union of their options. The admin page shows the effective policy for any project before you save.

## 4. Make a switch as a project admin

On a project, open **Project settings → Controlled configuration**. The page shows each scheme type's current scheme, the approved alternatives, and the last change.

1. Choose the target scheme.
2. Read the preview. It says what will change: for a permission scheme, who gains and loses each permission; for a notification scheme, who starts and stops being told about each event.
3. Enter a reason, if the policy requires one.
4. Confirm by typing the project key.
5. Watch the progress, then the result. The app re-reads the project after applying the change, and only a match with the target counts as success.

If someone else changed the scheme between your preview and your confirmation, nothing is changed and the page asks you to review again.

## 5. Revert, if needed

Every successful change has a **Revert** action for the same audience, under the same policy. The revert target is the scheme the project had immediately before that change, and it is always allowed, even if it is no longer on the approved list.
