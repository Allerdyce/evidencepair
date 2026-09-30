---
title: Security
updated: 2026-09-29
description: How EvidencePair apps are built, what they can and cannot reach, and how to report a vulnerability.
---

## Posture

- **Forge only.** Every EvidencePair app is built on Atlassian Forge and runs on Atlassian infrastructure. There are no Connect modules and no servers of our own in the path.
- **No egress.** Each app's manifest declares no external permissions and no remote services, and a check in our build refuses any manifest that does. Customer data stays in the customer's Atlassian site.
- **No third parties.** No analytics, no error-reporting service, no content delivery networks, no external fonts. Every asset in an app's user interface is bundled with it.
- **We cannot see your data.** An app's storage is provisioned for your installation on Atlassian infrastructure, and only that app's own code can read or write it. EvidencePair has no route to it from outside the app.

## The guard model

An app acts with its own identity only after a permission check, performed as the person who made the request, in that same request. For Jira that means reading Jira's own answer about that user's permission on that project or site. Background work that has no calling user (scheduled checks, queued completions, install and upgrade) takes app identity through a separate path that refuses to run if a calling user is present, so it can never stand in for a permission check.

## Scopes

Each app lists its scopes, and a one-line reason for each, on its page. For example, [Controlled Project Configuration for Jira](/apps/controlled-project-config/#permissions-it-asks-for) holds administrator scopes because assigning a scheme to a project is an administrator-only operation in Jira; a granular-only scope list was measured on a real site and could not read the schemes involved.

## The audit log

Every change an app makes writes one audit record: what changed, when, the before and after values (identifiers and version numbers, never page bodies or attachment contents), and who made it. People are stored as a per-installation pseudonym. The mapping from pseudonym to account is kept outside the hash chain, so erasing it leaves the log verifiable. How and when closed accounts are erased is described in the [privacy policy](/privacy/).

Records form a hash chain. Each record includes the SHA-256 hash of the record before it, and records are numbered in sequence. **Verify integrity**, on the admin audit screen, recomputes the chain and reports the first broken link. It detects any modified, deleted or reordered row, and any row inserted between genuine rows. Concurrent writers never create a fork. Removal of the newest rows is detected back to the latest recorded checkpoint. A row whose writer failed before recording the checkpoint can be removed without detection; that needs database write access, which platform isolation controls.

Forged rows appended by code with database write access are out of scope, because Forge platform isolation is the control. We do not use a secret key for the chain: the key would have to be stored where the same app code can read it, so it would not add protection, and a lost key would make every record look tampered with.

## This website

This site is static HTML served from our own origin. It sets no cookies, writes nothing to browser storage, loads no fonts or scripts from elsewhere, and makes no request to any third party. That is checked by an automated browser test on every build, not by policy alone.

## Reporting a vulnerability

Email <a href="mailto:{{ site.emails.security }}">{{ site.emails.security }}</a>. Tell us the app, what you found, and how to reproduce it. Please do not test against sites you do not own.

{% if site.supportResponseTarget %}We acknowledge every report within {{ site.supportResponseTarget }}.{% else %}{% pending "State the acknowledgement and response commitment for vulnerability reports.", "HUMAN-TASKS H-05" %}{% endif %}

We do not currently run a bug bounty programme.
