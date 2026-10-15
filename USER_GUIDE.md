# Scheme Control for Jira — User & Administrator Guide

**App Key:** `com.evidencepair.scheme-control-for-jira`  
**Forge ARI:** `ari:cloud:ecosystem::app/8efdae22-d33c-4d6b-9417-803d789add36`  
**Marketplace App ID:** `2318583989`  
**Vendor:** EvidencePair LLC (`support@evidencepair.com` / `support@titlecovenant.com`)

---

## 1. Overview

**Scheme Control for Jira** allows Jira administrators to define approved permission, notification, issue-type screen, workflow, and issue-security schemes per project or project category, enabling project administrators to safely preview, switch, audit, and revert schemes without requiring global `Administer Jira` privileges.

---

## 2. Administrator Quick Start (`Jira Settings -> Apps -> Scheme Control for Jira`)

1. **Create or Edit a Policy:** Scope a policy to a specific project or project category and select the approved Permission, Notification, and Screen schemes that project administrators are allowed to choose.
2. **Guard Rails & Cooldowns:** Configure mandatory change reasons, typed confirmations, cooldown windows between switches, or pause all delegated switches globally.
3. **Integrity Checks & Exports:** Use the **Checks** tab to verify that every active policy still matches live Jira configuration and that the SHA-256 hash-chained audit trail is intact. Export full JSON/CSV compliance records at any time.

---

## 3. Project Administrator Guide (`Project Settings -> Scheme Control for Jira`)

1. **Preview Before Switching:** Select a target approved scheme to compute an exact diff of which roles/groups gain or lose permissions or notifications.
2. **Execute & Verify:** Provide a business justification and confirm the switch. The app applies the scheme in Jira, verifies the live post-switch state, and records a tamper-evident audit entry.
3. **One-Click Revert:** Revert to the previous scheme configuration cleanly if needed.

---

## 4. Support & Escalation

- **Primary Support Email:** `support@evidencepair.com` (fallback: `support@titlecovenant.com`)
- **SLA:** 1 business day (within 24 hours Monday–Friday)
- **Full Documentation:** [https://evidencepair.com/docs/scheme-control/](https://evidencepair.com/docs/scheme-control/)
