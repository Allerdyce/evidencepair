# Scheme Control for Jira — Privacy, Security & Runs on Atlassian Architecture

**App Key:** `com.evidencepair.scheme-control-for-jira`  
**Forge ARI:** `ari:cloud:ecosystem::app/8efdae22-d33c-4d6b-9417-803d789add36`  
**Marketplace App ID:** `2318583989`  
**Vendor:** EvidencePair LLC (`security@evidencepair.com` / `support@evidencepair.com` / `support@titlecovenant.com`)

---

## 1. 100% Runs on Atlassian — Zero Data Egress

**Scheme Control for Jira** runs 100% on Atlassian Forge (`nodejs24.x` runtime):
- **Zero External Remotes:** `manifest.yml` declares no `remotes:` and no `permissions.external` egress.
- **In-Realm Forge Storage:** All policies, switch records, and hash-chained audit entries are stored exclusively inside Atlassian Forge SQL and Forge Hosted Storage (KVS) within the customer's Atlassian Cloud tenant.
- **Personal Data Reporting (`report:personal-data`):** Implements Atlassian's Forge Personal Data Reporting lifecycle API to pseudonymize closed accounts automatically using an installation-scoped HMAC-SHA256 secret while preserving audit-chain integrity.

---

## 2. Permission Scopes & Caller Authorization Guards

Every resolver verifies the calling user's Jira permissions (`asUser()`) before performing any administrative operation:
- **Global Admin Page:** Requires `ADMINISTER` global permission in Jira.
- **Project Settings Page:** Requires `ADMINISTER_PROJECTS` on the target project (or global `ADMINISTER`).
- **Declared Scopes:** `read:jira-work`, `manage:jira-configuration`, `manage:jira-project`, `storage:app`, `report:personal-data`.

---

## 3. Security Incident & Vulnerability Reporting

- **Security Contact:** `security@evidencepair.com`
- **Support Contact:** `support@evidencepair.com` (fallback: `support@titlecovenant.com`)
- **Full Security Model:** [https://evidencepair.com/docs/scheme-control/security-model/](https://evidencepair.com/docs/scheme-control/security-model/)
