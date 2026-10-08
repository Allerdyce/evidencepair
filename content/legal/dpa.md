---
title: Data processing agreement for Atlassian Marketplace apps
updated: 2026-10-07
description: EvidencePair LLC's revised draft data processing agreement for Scheme Control for Jira, pending legal and implementation review and not yet effective.
---

**EvidencePair LLC | Revised draft | 6 October 2026**

**Pending legal and implementation review - not yet effective.** This is a proposed agreement, not an operative customer DPA. The completion items and implementation checks must be resolved before this notice is removed and the DPA is incorporated into a customer agreement.

This data processing agreement ("DPA") is between EvidencePair LLC ("EvidencePair", "we" or "us") and the customer identified in the applicable app order or other agreement ("Customer" or "you"). It covers **Scheme Control for Jira**. It does not cover Paperloft apps or automatically extend to future EvidencePair products.

Once approved, this DPA becomes binding when it is identified in the Provider-Specific Terms applicable to your app order, or when we otherwise agree to it in writing. The underlying agreement is the Bonterms Standard End User Agreement, Version 1.0, made available by Atlassian, together with the applicable order and Provider-Specific Terms, or another written agreement between us (the "Agreement"). See our [terms](/terms/).

"Data Protection Law" means the privacy and data protection laws applicable to the processing under this DPA, including, where applicable, the EU GDPR, UK GDPR and Data Protection Act 2018, Swiss Federal Act on Data Protection, and California Consumer Privacy Act as amended ("CCPA"), together with their applicable regulations. Terms such as controller, processor, personal data and personal data breach have the meanings given by the applicable law.

"Customer Personal Data" means personal data we process on your behalf to provide the app and related support, including identifiable information in application records, relevant platform logs, and customer-data material supplied for troubleshooting. Annexes A and B form part of this DPA.

## 1. Roles and your responsibilities

You determine the purposes of the processing. Where you are a controller, EvidencePair acts as your processor. Where you process data for another controller, EvidencePair acts as your sub-processor, and you confirm that you are authorized to give the instructions and authorizations in this DPA on that controller's behalf.

You are responsible for having a lawful basis for the processing, providing required notices, managing your users' permissions, and giving lawful instructions. You decide whether the app's functions and disclosed retention periods meet your needs. These responsibilities do not reduce our own obligations under this DPA or Data Protection Law.

The app runs on Atlassian's Forge platform. This DPA does not replace your separate agreement with Atlassian for Jira or govern processing Atlassian performs independently under that agreement.

## 2. The personal data

**Whose data.** People who administer or use the app, including Jira administrators, project administrators, members of project roles permitted by a policy, and people whose attempts the app refuses. It may also include people identified in user-entered text, configuration labels, diagnostic information or support material, whether or not they use the app.

**Identifiers.** Atlassian account IDs associated with previews, changes, reversions, refusals, policy edits and related operations; pseudonymous actor references; and the separate mapping between those references and account IDs.

**Associated activity.** Actions, timestamps, outcomes, refusal counts, project and scheme identifiers, relevant configuration values, and related operational records, where they relate to an identifiable person. An activity record may be personal data even when it does not contain an account ID directly.

**User-entered and diagnostic content.** Reasons are stored as entered. Reasons, names or labels entered by users, error messages, relevant API responses and support material may contain additional personal data. The app does not guarantee that these fields are free of names, email addresses or other identifying information.

**What the app does not retrieve as a feature.** The app does not use Jira profile lookups to collect display names or email addresses, and it does not read issue content, comments or attachments. It reads the configuration, permissions, roles, schemes, workflow statuses and issue counts needed for its functions. These limits do not imply that personal information cannot appear in the free-text or diagnostic content described above.

**Sensitive data.** The app is not intended to collect special-category data, criminal-offence data, passwords, credentials or payment information. Do not put that information in reasons or send it for support. Unexpected sensitive information remains protected under this DPA; we will restrict its handling and cooperate with you on appropriate removal.

**Pseudonymisation, not guaranteed anonymity.** Audit records use an actor reference derived from an account ID. A separate table maps the reference to the ID outside the audit trail's hash chain. Deleting the mapping does not necessarily anonymize the remaining records: the reference, free text or surrounding activity may still allow a person to be identified. We will continue treating such information as personal data for as long as it remains identifiable under Data Protection Law.

## 3. Purpose, processing and instructions

The subject matter is the provision of project-scheme governance and its audit history. Processing includes collection, consultation, permission checks, recording, organization, storage, display, export, authorized disclosure, restriction and deletion.

We will process Customer Personal Data only on your documented instructions to provide, secure and support the app: checking who may preview or change schemes; applying authorized changes or reversions; recording and exporting activity; maintaining policies and operational state; handling permitted background jobs; performing Atlassian-required personal-data reporting and erasure; and investigating relevant faults or security incidents.

The Agreement, this DPA, authorized app settings and actions, and additional lawful written instructions form your documented instructions. We will not use Customer Personal Data for unrelated advertising, profiling, sale, cross-context behavioral advertising or training general-purpose AI models. A general usage-data permission elsewhere in the Agreement does not override these restrictions for Customer Personal Data.

We will immediately inform you if, in our opinion, an instruction infringes Data Protection Law and may suspend the affected processing while we resolve it with you. We will not expand the processing simply because an instruction requires a product change. We will explain any necessary change, lawful alternative or service limitation without using that limitation to excuse a mandatory obligation.

If applicable law requires processing other than on your instructions, we will tell you about that requirement before processing unless the law prohibits that notice. This provision is subject to the applicable international-transfer terms and does not create a general permission to disregard them.

## 4. Where data is processed

**App runtime and storage.** The app uses Atlassian-hosted Forge compute and storage, including Forge Key-Value Store and Forge SQL, for the relevant installation. Its described runtime declares no external egress or remote services and communicates with Atlassian APIs rather than EvidencePair-operated servers. It does not automatically send application records to EvidencePair's own systems.

**Data residency.** Forge-hosted storage follows Atlassian's supported residency arrangements for the relevant installation and storage service. This is not a promise that every category of processing, platform logging, support access, backup or downstream service takes place only in the selected storage region. See Atlassian's [hosted-storage lifecycle documentation](https://developer.atlassian.com/platform/forge/storage-reference/hosted-storage-data-lifecycle/).

**Logs and support.** Developer access to platform logs and any separately supplied support material are distinct from runtime network egress. They are covered by Sections 5, 7 and 12 and the applicable sub-processor arrangements.

**Runs on Atlassian.** The app is designed for the Runs on Atlassian program, but this DPA does not represent that Atlassian has awarded a badge or independently certified the app. Any badge status is determined by Atlassian. The runtime's described no-egress configuration is a separate statement, not a definition of every app eligible for that program.

## 5. Retention, return and deletion

### 5.1 While the app is installed

The current application retention behavior is set out below. These periods do not override a valid earlier deletion or restriction instruction or a requirement of Data Protection Law. We will not retain identifiable data longer than necessary for the specified purposes. The app does not currently provide a customer-configurable retention setting.

| Record | Current application retention |
| --- | --- |
| Audit trail, change history, refusal counters and change outcomes | Life of the installation, subject to applicable erasure or restriction requirements. |
| Policies and settings | Until deleted or replaced, or until the installation's deletion lifecycle applies. |
| Audit account mappings | Life of the installation, subject to account-related or other required erasure. |
| Unapplied change previews | 24 hours. |
| Applied change previews | 30 days, except successful changes retained for reversion, which remain for the installation's life. |
| Inputs to a change | 180 days. |
| Marker for a change being applied | Removed when the change is recorded; otherwise retained for no more than 30 days. |
| Project locks | 15 to 30 minutes. |
| Short-lived refusal-suppression markers | Five minutes; separate refusal counts follow the longer period above. |
| Queued work | Until the work completes or is ended; subject to the applicable processing timeout and erasure requirements. |

Keeping audit information for the installation's life supports the app's history and governance functions; it is not permission to keep every identifiable field indefinitely. We will assist with lawful, targeted retention and deletion requirements under Section 10.

### 5.2 Account closure and other erasure requests

The app uses Atlassian's personal-data reporting process to identify accounts requiring erasure. The described implementation includes a weekly reporting check. We will comply with Atlassian's applicable reporting cycle, including a different cycle returned by its API where required.

The account-erasure process removes account IDs and mappings from supported structured application records, including history, refusal counters, policy-editor fields and relevant preview or in-progress records. That automated process is not a complete mechanism for every individual-rights request. It does not, by itself, remove personal information embedded in reasons or other free text, purge platform logs, or establish that retained references are anonymous.

**Under verification:** a preview created around an erasure run may keep an account ID after that run. We are verifying the longest time it can remain, what a reversion keeps, and whether queued work can bring the ID back. We will replace this paragraph with the verified behavior before this DPA takes effect.

Account closure is not required to make a valid access, correction, deletion or restriction request. Contact us under Section 10 for requests the app's automated functions do not cover. We will assess all relevant storage locations, free-text content, pseudonymous records, logs, queued work and any support copies and take the measures required by your lawful instructions and Data Protection Law. Preserving a hash chain is not, by itself, a reason to refuse required erasure.

### 5.3 Exports and return

A Jira administrator can use **Settings -> Export all app data** to obtain the app's available customer-data export as JSON, with change history also available as CSV. We will provide information about its coverage and assist with any required Customer Personal Data not included in that export. The feature is not represented as a raw copy of every database entry, cryptographic secret or item of platform state.

At the end of the service, you may choose return followed by deletion, or deletion without return, subject to legally required retention. Export or request return before uninstalling wherever possible. We will reasonably assist with later requests while the relevant data remains available, but do not promise recovery after the platform has deleted it.

Exports may contain account IDs and other personal data. You control copies you download or distribute; the app cannot erase those copies. A copy received and retained by EvidencePair remains subject to this DPA where we process it on your behalf.

### 5.4 Uninstall and remaining copies

Once uninstall takes effect, Atlassian administers the hosted-storage deletion lifecycle. Uninstall is not a promise of immediate destruction of every copy. Atlassian's current recovery documentation describes 28 days of hosted-storage retention after uninstall and a recovery request submitted within 21 days, with customer consent. Reinstallation does not automatically restore the old data. See [Atlassian's recovery documentation](https://developer.atlassian.com/platform/forge/storage-reference/#data-recovery-for-apps-with-hosted-storage).

Recovery copies, backups and platform logs may follow different documented platform schedules. The 28-day recovery period must not be read as a verified maximum retention period for every such copy. We will make the applicable retention information available and ensure that remaining Customer Personal Data is protected, access-restricted and deleted in accordance with the applicable schedule and Data Protection Law. A platform dependency does not remove our responsibility to give accurate retention information and meet our processor obligations.

Remaining copies must not be used for ordinary production purposes. If a recovery restores data that should already have been deleted or restricted, we will ensure that the applicable instruction is reapplied before ordinary use resumes. Recovery of uninstalled customer data requires your authorization.

If law requires retention, we will identify the requirement to you unless legally prohibited, isolate and protect the retained data, use it only for that legal purpose, and delete it when the requirement ends. We will confirm completion of required deletion on request, identifying any remaining copies and applicable retention basis. This DPA continues to apply while Customer Personal Data remains in our or our sub-processors' possession.

### 5.5 Platform logs and support material

Atlassian's developer console makes app logs available for the preceding 30 days. Console availability is not a guarantee about destruction of every underlying log copy. Turning off log sharing controls developer access; it is not represented as deleting logs already held by the platform.

Customer-data support material will be retained only while necessary to resolve the relevant request and complete associated security or remediation work, unless you instruct earlier deletion or law requires retention. We will delete or return it when that purpose ends and will not keep full exports merely as a general correspondence history. Any retained support copy must be covered by the approved support-handling arrangements in Annex B.

## 6. Sub-processors

You give general written authorization for us to use the sub-processors identified in the completed Annex B for the specified services. Atlassian may use its own downstream sub-processors; the absence of runtime external egress does not mean no other organization participates in providing its infrastructure.

Before engaging a sub-processor, we will impose written data protection obligations appropriate to its services and no less protective than the applicable obligations in this DPA. We remain responsible to you for performance of our sub-processors' obligations as required by Data Protection Law.

We will maintain the sub-processor information and give you at least **10 calendar days' prior written notice** before a new or replacement sub-processor, including a relevant downstream sub-processor, begins processing your Customer Personal Data. Notice will describe its identity, services, processing locations and applicable safeguards. We will monitor relevant supplier notices and pass them on in sufficient time; a silent website update is not notice.

You may object during that notice period on reasonable data protection grounds. We will work with you in good faith on an alternative or adequate safeguard. The disputed new processing will not begin while a timely, reasonable objection remains unresolved. Where we cannot provide a compliant alternative, either party may terminate the affected service without an early-termination penalty, subject to the Agreement's applicable refund provisions and the return/deletion obligations in this DPA.

We will not treat a shorter supplier notice as automatic permission to bypass these requirements. If necessary, we will delay or suspend affected processing. The notice periods and rights in mandatory transfer terms take precedence where they require more.

## 7. EvidencePair access and support

EvidencePair's described app architecture does not use an external connection to the installation's storage. Authorized developers can access platform logs through Atlassian's developer console when the customer shares those logs. A site administrator can control log sharing through Atlassian Administration, subject to Atlassian's available controls.

The current inventory identifies one type of log line that includes the account ID of a person who initiated a queued switch. Error messages and API responses may also contain identifying information. We do not claim that all platform logs are anonymous or free of personal data.

We will limit access to authorized personnel who need it for the specified support or security purpose. Anyone authorized to process Customer Personal Data must be bound by confidentiality obligations or an equivalent statutory duty. Access from another country must satisfy Section 12 and be recorded in Annex A.

Do not email an unredacted export, credentials or unnecessary personal information. We will prefer non-identifying reproductions and redacted diagnostics. Before requesting Customer Personal Data for support, we will identify an appropriate channel, any additional provider, the purpose, authorized access and retention arrangements. Any provider handling that material must first be covered by Section 6 and Annex B.

Personal data in a support export remains Customer Personal Data; labelling the message "correspondence" does not remove the DPA's protection. If unexpected Customer Personal Data is received, we will restrict access, tell you where material has been received, and coordinate its secure return or deletion and any required incident response.

Ordinary business-contact information used to administer our relationship, such as the name and email address of your support or contractual contact, is addressed separately in our [privacy policy](/privacy/). This distinction is based on the actual processing purpose, not a blanket exclusion of support messages from this DPA.

## 8. Security measures

We will implement and maintain technical and organizational measures appropriate to the risk, including the measures below, for the duration of the processing. These are contractual commitments from the effective date, not a claim that this draft constitutes an independent security audit.

**Installation isolation and protected storage.** Use installation-scoped Forge storage and platform access controls. Use Atlassian's encryption for hosted storage and encrypted connections for data in transit. Keep the installation's pseudonymisation key access-restricted and out of customer-data exports and ordinary logs.

**No unapproved external runtime transmission.** Maintain the app's no-external-egress runtime design unless a change is disclosed, lawfully authorized and reflected in the applicable terms and permissions. Maintain the described build check rejecting manifests that declare external egress. Do not add external analytics, error-reporting or remote-processing services without the required review and authorization.

**Authorization and least privilege.** Validate user-initiated requests on the server using trusted identity, current permissions and the applicable stored policy. Do not trust authorization decisions supplied by a page. Limit app-initiated work to documented operational purposes and authorized queued actions, with controls appropriate to their execution context.

**Customer access controls.** Restrict site-wide policy and history access and export to authorized Jira administrators. Restrict project pages and history to authorized project administrators or project-role members permitted by policy. Deny access to other users.

**Audit integrity and data minimization.** Use pseudonymous actor references, separate the account mapping from the hash chain, and provide hash-chain verification. Describe the audit trail as tamper-evident, not tamper-proof. Minimize identifying information in logs and exports and maintain a process for personal information in free-text fields.

**Personnel and development controls.** Restrict production and developer-console access by role and need; use multi-factor authentication for privileged access; review and revoke access when no longer needed; protect work devices; and apply confidentiality obligations. Use controlled release practices, dependency and vulnerability review, and risk-appropriate remediation.

**Operational assurance.** Maintain incident response, data-rights and deletion procedures; periodically assess and test the effectiveness of relevant controls; and maintain appropriate availability and recovery arrangements using the platform's capabilities. Test customer isolation, authorization and account-erasure behavior, including queued work and recovery scenarios.

We may update measures to address changing risks or technology, but will not materially reduce the overall protection of Customer Personal Data during the service. No certification or independent audit of EvidencePair is represented unless separately identified with its actual scope.

## 9. Personal data breaches

If we become aware of a personal data breach affecting Customer Personal Data, we will notify you **without undue delay**. We will use your designated privacy or security contact, or an appropriate administrator or contractual contact where none is designated. You are responsible for keeping contact details current; absence of a designated contact does not excuse withholding notice.

As information becomes available, we will describe the nature of the breach; affected data and people, including approximate numbers where known; likely consequences; containment and remediation taken or proposed; and a contact for further information. We will provide updates without undue delay and will not wait for a complete investigation before sending the initial notice.

We will take appropriate steps to contain, investigate and mitigate the breach, preserve relevant evidence, and assist you with required notifications and other response obligations. We will coordinate communications concerning your Customer Personal Data unless law requires otherwise.

A notification is not an admission of liability. An unsuccessful attempt that does not compromise personal data is not, solely for that reason, a personal data breach; it remains subject to appropriate security handling.

## 10. Helping with your obligations

Taking into account the nature of the processing and information available to us, we will provide appropriate and timely assistance with individual rights, security obligations, breach assessment and notification, data protection impact assessments, and required consultation with supervisory authorities.

For access, correction, deletion, restriction, portability or another applicable right, use available administrator controls or contact support. We will verify authority proportionately and request only the information needed to identify the relevant data. We will explain which actions are available directly and carry out or coordinate additional measures required by lawful instructions and Data Protection Law.

Where a person contacts us directly about Customer Personal Data, we will promptly inform you and will not respond substantively without your authorization unless required by law. We will assist sufficiently promptly to support applicable statutory deadlines. We will notify you promptly if we can no longer meet a relevant obligation and cooperate on stopping or remediating non-compliant processing.

For exceptional assistance beyond our ordinary obligations, we may agree reasonable charges in advance where lawful. Charges or agreement on them will not delay legally required assistance or require you to pay to remedy our own non-compliance.

## 11. Compliance information and audits

We will make available the information necessary to demonstrate compliance and allow and contribute to audits, including inspections, by you or an independent auditor you appoint.

We may first provide relevant policies, security information, questionnaire responses and available independent platform reports where these adequately address the request. That process does not extinguish audit rights where further verification is reasonably necessary or legally required.

Routine audits will be coordinated on reasonable notice, ordinarily no more than once in 12 months, during normal business hours and under appropriate confidentiality and security safeguards. These limits do not apply where law or a regulator requires otherwise, following a relevant personal data breach, or where there are reasonable grounds to suspect material non-compliance.

An audit must protect other customers' information and avoid unnecessary disruption. Intrusive testing of shared systems requires the relevant operator's authorization. We will provide appropriate alternative evidence or coordinate lawful access rather than use platform restrictions to defeat a mandatory audit right. The parties ordinarily bear their own costs; we bear the cost of remedying our non-compliance. Regulatory powers and mandatory transfer-clause rights are not restricted.

## 12. International transfers

Storage residency and runtime egress restrictions do not, by themselves, resolve whether access, support or onward processing is an international transfer. We will identify relevant processing and access locations and ensure a lawful basis for each restricted transfer.

Where a transfer requires safeguards because it is not covered by an applicable adequacy decision or another lawful basis, the applicable terms in Annex A apply, provided the selected mechanism is legally suitable for that transfer. We will not begin a restricted transfer until the required mechanism, party details, transfer information and safeguards are complete and effective. No Data Privacy Framework certification by EvidencePair is represented in this DPA.

We will cooperate with required transfer assessments, provide information reasonably necessary to evaluate local-law and government-access risks, and implement appropriate supplementary safeguards. If a lawful transfer basis ceases to be available, we will take the required corrective measures or suspend the affected transfer. A sub-processor's transfer arrangements do not automatically replace the safeguards required between you and EvidencePair.

## 13. California personal information

Where the CCPA applies and we process your personal information as a service provider or contractor, you disclose that information only for the specific purposes in Section 3. We will comply with applicable CCPA obligations, provide the same level of privacy protection required by the CCPA, and maintain appropriate security.

We will not sell or share that information as those terms are defined by the CCPA; retain, use or disclose it outside our direct business relationship with you; or use it for another commercial purpose except as expressly permitted by the CCPA and consistent with this DPA. We will not combine it with personal information from other customers or our own interactions with individuals except as expressly permitted by the CCPA and consistent with your lawful instructions.

We will assist with applicable consumer requests, notify you without undue delay if we determine that we can no longer meet our obligations, and permit reasonable and appropriate steps to verify compliance and stop or remediate unauthorized use. The information, oversight, audit and sub-processor provisions of this DPA support those rights and do not restrict mandatory CCPA rights. We certify that we understand these restrictions and will comply with them.

## 14. Contract rules, changes and duration

If there is a conflict concerning Customer Personal Data, mandatory transfer terms take precedence, then this DPA, then the remaining Agreement. Our privacy policy explains data handling but cannot reduce the obligations in this DPA or authorize a new processing purpose.

Except where Data Protection Law or mandatory transfer terms require otherwise, the Agreement's liability provisions, governing law and dispute provisions apply. Nothing in this DPA limits a regulator's authority or a person's mandatory rights. The governing-law and court selections for transfer clauses apply specifically to those clauses and do not silently replace the Agreement's general commercial terms.

We will keep a dated version history. Material changes to this DPA or its processing description require direct notice, ordinarily at least 30 days before the proposed effective date. Changes will take effect only through a legally valid contractual process; notice alone does not authorize a material reduction in protection or a new processing purpose. Changes urgently required by law or to address a security risk may need shorter notice, but do not bypass required authorizations, sub-processor procedures or transfer safeguards.

This DPA remains effective for as long as we or our sub-processors process Customer Personal Data. Return, deletion, confidentiality and other obligations that need to continue will survive termination of the Agreement.

## 15. Contacts

**Support, data-rights requests and processing instructions:** <a href="mailto:{{ site.emails.support }}">{{ site.emails.support }}</a>

**Security, suspected breaches and vulnerabilities:** <a href="mailto:{{ site.emails.security }}">{{ site.emails.security }}</a>

You may designate or update a privacy and security notice contact through support. We will confirm the designation and maintain a reliable means of providing notices without requiring the app runtime to send email.

---

## Annex A. International-transfer terms and particulars

### A.1 Parties and transfer description

**Data exporter:** the Customer identified in the applicable order or written acceptance. Its legal name, business address, authorized contact and role are recorded in that order or a transfer record agreed by the parties. You act as controller, or as processor for an authorized controller, as described in Section 1.

**Data importer:** EvidencePair LLC. Contact: Privacy and Security Contact, <a href="mailto:{{ site.emails.support }}">{{ site.emails.support }}</a>; security incidents: <a href="mailto:{{ site.emails.security }}">{{ site.emails.security }}</a>. Role: processor or sub-processor, as applicable.

**Business address:** 109 W Cota St, Santa Barbara, CA 93101, United States.

EvidencePair's official registration number, if any, is still to be inserted.

**EvidencePair personnel access locations:** United States.

The parties' valid acceptance of the Agreement incorporating this DPA constitutes their signature and acceptance for these transfer terms. The signature date is the date that acceptance becomes effective. Required party details must be complete before a transfer relies on these terms.

The data subjects, data categories, operations and purposes are described in Sections 2 and 3. Processing is ongoing during use of the app; log access and support disclosures occur as needed for their authorized purposes. The duration and retention criteria are in Section 5. Sensitive data is not intended; unexpected sensitive information is access-restricted and addressed under Sections 2, 7 and 10. The technical and organizational measures are in Section 8. Sub-processing services, locations and duration are identified in Annex B.

For each restricted transfer, the parties will record the actual route and destination, the applicable law and mechanism, and any supplementary measures. For EU transfers, the competent supervisory authority is determined under Clause 13 of the EU clauses according to the exporter's establishment, representative or relevant data subjects; the applicable authority must be identified in that record, not selected solely for convenience.

### A.2 European Economic Area

Where legally applicable and needed for a restricted transfer, the standard contractual clauses in the Annex to [Commission Implementing Decision (EU) 2021/914](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021D0914) ("EU SCCs") are incorporated without modifying their mandatory text.

Module Two applies where you are a controller and EvidencePair is a processor. Module Three applies where you are a processor and EvidencePair is a sub-processor. Clause 7's optional docking provision and Clause 11's optional independent dispute-resolution provision are not selected. Clause 9 uses Option 2, general written authorization, with at least 10 calendar days' prior notice. Clause 17 uses Option 1 and Irish law; Clause 18 selects the courts of Ireland, without restricting the individual rights provided by the clauses.

For the EU SCCs, Annex I.A is completed by A.1 and the incorporated party record; Annex I.B by A.1 and Sections 2-5; Annex I.C by the supervisory-authority information in A.1; Annex II by Section 8 and any recorded supplementary safeguards; and the sub-processor information by Annex B. These particulars must be complete and accurate before reliance on the clauses. If the 2021 clauses are not legally suitable for a particular transfer, an appropriate alternative must be agreed and implemented before it proceeds.

### A.3 United Kingdom

For restricted transfers protected by UK law, the [ICO International Data Transfer Addendum, version B1.0](https://ico.org.uk/media2/migrated/4019539/international-data-transfer-addendum.pdf), in force from 21 March 2022, is incorporated with its mandatory clauses unmodified, subject to revisions required under that instrument.

Table 1 uses the parties, contacts and effective date in A.1 and their completed party record. Table 2 selects the EU SCCs and options in A.2. Table 3 uses the annex information identified in A.2. In Table 4, both importer and exporter may end the Addendum as permitted by its Section 19. The Addendum determines its applicable law, courts and UK-specific interpretation. Required table information must be complete before reliance on it.

### A.4 Switzerland

For restricted transfers protected by Swiss law, the EU SCCs apply with the adaptations needed to protect those transfers: references to the GDPR are read as references to the Swiss Federal Act on Data Protection to the relevant extent; the Federal Data Protection and Information Commissioner is the competent Swiss authority; and the clauses must not prevent individuals habitually resident in Switzerland from enforcing their rights there.

For transfers governed exclusively by Swiss law, Clause 17 selects Swiss law and Clause 18 selects the courts of Switzerland. Where both EU and Swiss law apply, the EU selections remain for the EU-protected transfer and the Swiss protections apply in addition. The parties will record any further adaptation needed for the particular transfer before it begins.

## Annex B. Sub-processor register

### B.1 Atlassian

**Legal entity:** Atlassian Pty Ltd, ABN 53 102 443 916, as identified in the Forge Data Processing Addendum.

**Services:** Forge-hosted application execution, installation storage, queues, platform logs, relevant platform APIs and supporting infrastructure.

**Data and duration:** the categories necessary to provide those services under Sections 2-5, for the service duration and the applicable deletion lifecycle.

**Locations:** the relevant Forge-supported storage region and additional applicable processing or access locations used by Atlassian and its service providers. The relevant service-specific locations must be reflected in the transfer assessment; a selected storage region is not an exclusive access-location promise.

**Safeguards:** the applicable [Forge Data Processing Addendum](https://developer.atlassian.com/platform/forge/resources/Forge-Data-Processing-Addendum.pdf), platform security commitments and appropriate transfer arrangements. Atlassian's current downstream providers are described in its [sub-processor list](https://www.atlassian.com/legal/sub-processors), to the extent they participate in the Forge services used by the app. That list is not blanket authorization to use unrelated Atlassian services or providers for new purposes.

### B.2 Support and email processing

Email sent to the support and security addresses in Section 15 is forwarded by Porkbun to a mailbox in Apple's iCloud Mail.

#### Porkbun: email forwarding

**Legal entity:** Porkbun LLC, 11575 SW Pacific Hwy PMB 40649, Tigard, OR 97223, USA, as identified in its [Privacy Policy](https://porkbun.com/legal/agreement/privacy_policy) and in the Email Service Agreement in its [Product Terms of Service](https://porkbun.com/legal/agreement/product_terms_of_service).

**Services:** email forwarding for the support and security addresses: Porkbun receives each message sent to them and forwards it to the mailbox below.

**Data and duration:** support and security emails and their attachments, including any Customer Personal Data they contain, while Porkbun keeps the messages.

**Locations:** Porkbun's Privacy Policy says it may transfer personal data to service providers, vendors, registries or partners outside the country where you are located, and that information may be stored on servers located in other jurisdictions.

**Safeguards:** Porkbun's Privacy Policy says it uses physical, technical and administrative procedures to protect personal data, and appropriate safeguards for international transfers, for example Standard Contractual Clauses. The Email Service Agreement refers to that policy.

Written data protection obligations for Porkbun's handling of forwarded messages, as Section 6 requires, have not been identified in its published terms.

#### Apple: iCloud Mail

**Legal entity:** Apple Inc., One Apple Park Way, Cupertino, California 95014, United States, which the [iCloud Terms and Conditions](https://www.apple.com/legal/internet-services/icloud/) identify as the provider of iCloud for users in the United States.

**Services:** iCloud Mail, the mailbox that receives the forwarded support and security email.

**Data and duration:** support and security emails and their attachments, including any Customer Personal Data they contain, while the messages are kept in the mailbox.

**Locations:** the iCloud Terms and Conditions say content is stored on Apple's or third-party providers' servers. Apple's [Privacy Policy](https://www.apple.com/legal/privacy/en-ww/) says personal data collected by Apple worldwide is generally stored by Apple Inc. in the United States, and that personal data may be transferred to or accessed by entities around the world, including Apple-affiliated companies.

**Safeguards:** Apple's [iCloud data security overview](https://support.apple.com/en-us/102651) says iCloud Mail is encrypted in transit and on the server, with the keys held by Apple, and is not end-to-end encrypted. Apple's Privacy Policy describes administrative, technical and physical safeguards, and says its privacy practices comply with the Global Cross-Border Privacy Rules (CBPR) System and the Global Privacy Recognition for Processors (PRP) System.

Written data protection obligations for Apple's handling of the mailbox, as Section 6 requires, have not been identified in its published terms.

No unidentified provider is authorized by this draft. Before activation, EvidencePair must either complete this register for the actual support process or adopt and verify a support arrangement that does not route Customer Personal Data through an unlisted provider. Merely asking customers not to email exports does not eliminate the need to assess the providers that actually receive support messages or attachments.

---

**End of revised draft.** The separate release checklist is implementation and legal-review guidance, not part of the proposed customer contract.
