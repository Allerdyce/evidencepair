# Decisions

Rulings and deviations for the EvidencePair vendor site (spec 30). Newest first. Anything a human must decide is in `HUMAN-TASKS.md`, not here.

## 2026-10-13 · Docs re-copied at the app's `0c0de7e`: the production-log rule (branch only, unpublished)

The app fixed its docs in `0c0de7e`. `faq.md` and `security-model.md` are re-copied with the usual adaptations. The script first reproduced both `279b723` copies byte for byte, and `sourceCommit` is now `0c0de7e`. Both pages now state the production-log rule instead of “the app's developers can read its platform logs”, and the FAQ names Zoho Mail. The FAQ also picks up the app's answer on issues still resolved after a switch, and its description gains that topic. `data-inventory.md` is not a published page here; its change is recorded in DI-20. Details: `provenance/claims.md`.

## 2026-10-13 · Ali's owner packet, second version: production-log rule, EEA restriction, aliases (branch only, unpublished)

**Source:** app repository `docs/launch/owner-packet-2026-10-12/2026-10-13-v2-application-answers.md`, `…-v2-dpa-draft-for-adoption.md` and `…-v2-incident-response-plan-adopted.md`, which supersede the first versions (app `DECISIONS.md`, 2026-10-13). Same branch; not pushed or published.

- **DPA:** v2 verbatim. That adds the §7 production-log rule, the §12 EEA restriction, the A.1 logs sentence and the B.2 aliases. A script checked every v2 line is on the page and nothing else. The seven pending statements are unchanged: v2 adds no new sentence that says an item is open.
- **Privacy:** v2's mail paragraph, data-disclosure passage, personal-data, uninstall and erasure texts, verbatim. The builder's bridging sentence is gone.
  - **Logs:** the production-log rule replaces “While it is on, the app's developers at EvidencePair can read these logs …” (with the contributors link and the 30-day console sentence) and “We read the logs only to troubleshoot the app”. The customer controls (log sharing on at install; a site administrator can turn it off) stay.
  - **Where data lives:** “What EvidencePair can see is the app's platform logs” is removed, because it contradicts the rule.
  - **EEA:** the interim sentence and its pending marker are replaced by the “Listing EEA restriction” text.
  - **Not placed:** v2's “Zoho retention wording” would repeat the mail paragraph's new schedules sentence.
- **Terms:** not changed. The page carries no Provider-Specific Terms: it says there are none yet. The v2 Provider-Specific Terms text is in DPA §12 word for word (H-27).
- **Security:** the posture wording is unchanged in v2. Nothing else on the page refers to reading logs.
- **hello@ and billing@:** restored in `data/site.json` (H-28 done).
- **Incident response plan:** adopted, but not published. The site has no place for it, so H-29 asks Ali whether to publish a summary.
- **For the builder, in the app repository:** `security-model.md` and `faq.md` still say the developers “can read its platform logs”. The site's copies follow once they change.

## 2026-10-13 · Ali's follow-up: four privacy sentences, the interim EU-transfer position, hello@ and billing@ (branch only, unpublished)

**Source:** Ali's follow-up, landed verbatim in the app repository at `docs/launch/owner-packet-2026-10-12/2026-10-13-followup-eu-transfers-mail-privacy-wording.md`. Same branch, `draft/owner-packet-2026-10-12`; not pushed or published.

- **Privacy, four replacements in his words:** uninstall; account-erasure timing; the register (“the register is not yet complete”); Zoho's schedules. The register sentence before it now says “use service providers for the stated purposes”, so the passage reads without “completed”. Two links are added on his words: “the draft DPA” (to B.2) and “Our DPA's sub-processor register” (to Annex B). His curly apostrophes are set as the page's straight ones.
- **EU transfers:** his interim sentence is on the privacy page after the data-disclosure passage, as a pending statement citing H-27, with his condition in the reference. The DPA is not edited.
- **hello@ and billing@:** rejected by Zoho (550 5.1.1). `data/site.json` now gives support@ for both keys, so every advertised address on the site is support@ (H-28).
- **Provenance:** `privacy-traceability.md` and `claims.md` cite the follow-up file.

## 2026-10-12 · Ali's owner packet: his revised DPA, the Zoho mail facts, the privacy and security wording (branch only, unpublished)

**Source:** Ali's owner packet, landed verbatim in the app repository at `docs/launch/owner-packet-2026-10-12/` (app `DECISIONS.md`, 2026-10-12, and Ali's ruling there, `docs/rulings/2026-10-13-prs-ai-data-rule-packet-next.md`, item 3: “Prepare the website changes on a local branch … unpushed, for his review”). Prepared on branch `draft/owner-packet-2026-10-12`; nothing is pushed or published. The incident response plan in the packet is **not** published: Ali has not adopted it.

**DPA (`/dpa/`).** The body is Ali's `2026-10-12-dpa-draft-for-adoption.md`, word for word; a script checked that every line of his text appears on the page and nothing else does. The site's own changes:
- **Front matter kept** (title, description); last updated 2026-10-12. His document title, “EvidencePair Data Processing Agreement”, is not used as the page heading; the page keeps its title.
- **His notice and date line** open the page, in bold, as the previous notice did.
- **Links:** the same URLs as before where his text names the same documents; addresses come from `data/site.json`. His closing reference list keeps its four titles; “Zoho Mail deletion and retention policy” has no link, because the packet gives no URL.
- **His footer** (“EvidencePair LLC |”) is dropped, as was the last draft's closing line.
- **Pending statements, seven, each one of Ali's own sentences that says an item is still open.** Where such a sentence sat inside a paragraph, it is lifted out, in place, into its own pending statement:
  - §5.5: the deletion procedure must be implemented first (H-26);
  - B.2: the legacy forwarding is not yet retired; the contracting entity; the processing countries; the contractual safeguards paragraph; the register's completion (all H-24);
  - B.2 Retention: the provider's schedules and the deletion procedure must be verified (H-26).
- **Gone:** the H-22 pending statement (the entity number is filled), the H-23 one (§5.2 is now Ali's wording), and the six Porkbun and Apple ones (B.2 is now Zoho).
- **Not pending statements:** live erasure validation, the transfer particulars and the legal review. Ali's notice names all three; no sentence in his body says they are open, so marking one would mean writing text that is not his.

**Privacy page.** The packet's three passages, verbatim: the mail paragraph (Zoho, replacing the whole “If you email us” paragraph), the personal-data description (replacing its first two sentences; the preview sentences stay), and the data-disclosure sentence (replacing the body of “What we never do”; the heading stays). One more sentence follows DPA §4: “No app data reaches EvidencePair's own systems” → “The app does not automatically send application records to EvidencePair's own systems”, because it repeated the overbroad claim the packet replaces. Nothing else is changed. Last updated 2026-10-12.

**Security page.** The packet's posture wording leads the Posture section, verbatim; it names Zoho for support email and says no independent penetration test, certification or external audit is represented. The page never claimed any of those. Removed as overbroad: “Customer data stays in the customer's Atlassian site” and the “We cannot see your data” label, with “The one thing the platform does show us is its logs”. “No third parties” is relabelled “No analytics or external assets”, its content unchanged. Last updated 2026-10-12.

**Support page:** unchanged. It names no mail route.

**Left for Ali, not changed** (listed in HUMAN-TASKS H-10 and H-24, 2026-10-12):
- the site still lists `hello@` and `billing@`, which the packet does not cover;
- privacy “Uninstall” opens with “removes everything it stored”, and “Account closure and erasure” says an ID is erased at the next report. DPA §5.2 and §5.4 are more guarded.

**Provenance:** `claims.md` (security rows, the DPA's §5.2, §5.4, §5.5, §7, §8, A.1 and B.2 rows, the commitments and the differences) and `privacy-traceability.md` (four rows, and a 2026-10-12 section) cite the packet files.

## 2026-10-07 · Site sync, third pass: the app's docs at `279b723` (retention wording, residency scope)

The app repository changed its docs again in `279b723` (docs only), from the Marketplace answers draft. The site follows:
- **Docs:** install, security-model and faq are re-copied at `279b723`.
  - **install:** five permissions, with the `report:personal-data` row.
  - **security-model:** a paragraph on queued changes and the app's own jobs.
  - **faq:** the uninstall answer cites the retention period in Atlassian's SOC 2 report, with the storage reference's 28 days beside it.
  - **The copy script now also applies the install page's table wrapper.** Before writing, it reproduced all six existing copies byte for byte.
- **Privacy page.** Brought into line with the app's inventory at `279b723`. Atlassian's data lifecycle page (updated 28 Sep 2026) and its storage reference were re-read the same day.
  - **Uninstall:** the retention period in Atlassian's SOC 2 report, then destroyed; the storage reference gives 28 days.
  - **Erasure:** Atlassian keeps a soft-deleted copy of data the app erases, and backups taken before the erasure, until the end of that period.
  - **“Where data lives”:** gains the inventory's data-residency lists, what is in scope and what is out of scope, with Atlassian's note that Forge may sometimes run an invocation elsewhere (linked).
  - **Ali's re-read:** these are added to his pending re-read (H-10, 2026-10-07).
- **DPA, not edited.**
  - §5.4's “28 days of hosted-storage retention after uninstall” cites the recovery documentation, which still says 28 days, so it stays accurate. Its caveat already allows for other copies to follow other schedules.
  - §4's residency wording is consistent with the new scope list.
  - Nothing in the text is now inaccurate. One silence is recorded under H-21: §5.2 does not mention Atlassian's soft-deleted copies of erased data, or the 21-day restore a developer can request.
- **Provenance:** the `claims.md` docs rows and the DPA §5.4 row, DI-12, DI-13 and DI-24, and the traceability map.

## 2026-10-07 · Site sync, second pass: the app's docs-only fixes at `358d3a2`

The app repository fixed the five upstream inconsistencies the first sync recorded, in `358d3a2` (docs only, no code change). The site follows:
- **Docs:** admin-quick-start, security-model and faq are re-copied at `358d3a2` with the same script and adaptations. Their `sourceCommit` is now `358d3a2`. Three sentences change: the export is “the app's records”, and the FAQ's “Does any data leave Atlassian?” and the security model's storage paragraph now name the platform logs and support email instead of saying nothing leaves Atlassian. project-admin-guide and workflow-mapping are unchanged and stay at `8a818f8`; install stays at `c6b1960`.
- **App page:** the `report:personal-data` scope row follows the README at `358d3a2` (“on Atlassian's reporting cycle (every 7 days when it names none)”). The history bullet follows the CHANGELOG's “What it does” at `358d3a2`: “Scheme changes can be exported as CSV, and everything, refusals included, in the JSON export.”
- **Privacy page:** one sentence is adjusted to match the app's inventory at `358d3a2`. The report covers “the five places that hold one for longer than a few minutes”, and a queued switch's message and the five-minute refusal marker are not reported. The rest already agreed. This is part of the same re-read as the first sync (H-10, 2026-10-07).
- **Provenance:** DI-12, the traceability map and `claims.md` cite `358d3a2` where it is the source.

## 2026-10-07 · Site sync with the app at `8a818f8`: docs re-copied, privacy page made precise (awaits Ali's re-read)

The app repository is at `8a818f8`: iteration 30 complete, all suites green (1565/0), not yet a released build and not yet run on the test site.

**Docs.** Five of the six copies are re-copied at `8a818f8`: admin quick start, project admin guide, workflow mapping, security model and FAQ. The install page is unchanged since `c6b1960`. The copy was made by script with the same adaptations as before. It first rebuilt each existing copy from its old `sourceCommit` and checked the result matched byte for byte. Each `sourceCommit` is now `8a818f8`. Two descriptions gain the new topics: the FAQ (Jira's own audit records) and workflow mapping (the check before you confirm). `provenance/claims.md` lists what changed in each page.

**Privacy page: factual precision fixes, from the app's `docs/data-inventory.md` and `faq.md` at `8a818f8`.** These go beyond what Ali signed off on 2026-10-06 (H-10, renewed that day), so the page awaits his re-read (HUMAN-TASKS H-10, 2026-10-07). The builder has also listed it for him. The three points recorded under H-21:
- “reports the account IDs it stores” became every stored account ID, from each place the app keeps one;
- “until it expires” became “kept until the next report, one reporting cycle later, and then erased”;
- the email sentence names the providers, Porkbun forwarding to Apple's iCloud Mail, and links the DPA's Annex B.2.

Four more, made for the same reason, because the page would otherwise contradict the app's docs at `8a818f8`:
- “once a week” became Atlassian's reporting cycle, 7 days when none is named;
- the export is “the app's records”, not a raw copy of every internal record (the FAQ's new wording);
- a preview may show a person's name when Jira includes it in the scheme; the app never looks it up and never stores it (the security model's new wording);
- the logs paragraph drops “weekly” (the daily line now also carries the cycle, `cycle-seconds=`).

The inventory lines behind them (DI-12, DI-14, DI-18, DI-20) and the privacy traceability map are updated to match.

**Not yet seen on a site.** The reporting changes are in the app's code and tests. Reading `Cycle-Period` is a SPIKE until a site run logs `cycle-seconds=`. The privacy page states what the app does, as it did for the erasure branch, which has not run on a site either. DI-12 records both.

**DPA.** Its text is unchanged. In `claims.md` the two commitments (follow `Cycle-Period`; report every stored account ID) are now recorded as implemented in code at `8a818f8`, and verified on a real site only after the next gate run. **The §5.2 implementation-review pending statement stays** (H-23) until that site evidence exists.

**App page.** Its claims still hold at `8a818f8`: the same five scopes, no egress, and both page titles “Scheme Control for Jira”. The page lists History features, so two sentences were added:
- the preview bullet gains the CHANGELOG's “Screen changes list the fields that appear and disappear.”;
- the history bullet gains “The admin History also lists every change to policies and settings, and marks a revert as one.” (admin quick start §5).

**Left as the app wrote it, for the builder to fix in the app repository:**
- the README's `report:personal-data` row says “weekly” (the app page's scope table copies the README);
- `admin-quick-start.md` says the export “downloads everything the app stores for your site”;
- the CHANGELOG says “Export all app data holds everything”.

## 2026-10-07 · Ali's revised DPA replaces the builder's draft at `/dpa/`, with his completion facts (H-21 stays open)

**Ruled: Ali,** 2026-10-06 local time. His revised DPA, `EvidencePair_Atlassian_DPA_Revised_Draft_2026-10-06.md`, replaces the builder's draft. Its completion facts were answered through the question prompt (app repository `docs/rulings/2026-10-07-dpa-address-access-email-providers.md`; app `DECISIONS.md`, 2026-10-07):
- the business address is 109 W Cota St, Santa Barbara, CA 93101, United States;
- EvidencePair personnel access customer personal data from the United States only;
- Porkbun (forwarding) and Apple (iCloud Mail) are the providers that handle support email.

**Supersedes** the text of the 2026-10-06 entry “A draft DPA for the Atlassian apps, at `/dpa/` (H-21)”. The URL is unchanged, so the footer link and the links from the privacy and terms pages still reach it.

**What the site changed in Ali's text, and nothing else.** A diff against his file shows only these:
- **Front matter:** his H1 is the page title; last updated 2026-10-07.
- **Links:** `/terms/` and `/privacy/` are root-relative; the support and security addresses come from `data/site.json` as mailto links.
- **Annex A.1:** the business address is filled, and the personnel access location is the United States.
- **Annex B.2:** completed for Porkbun and Apple. Each fact is taken from the provider's own privacy policy, terms or security page, and linked. “Completion required” is dropped from its heading.
- **Open items are pending statements** (below).

**Kept exactly as Ali wrote it:** the top notice (“Pending legal and implementation review - not yet effective”), his date line, his §5.2 review paragraph (now inside a pending statement), “Settings -> Export all app data”, and his straight quotes.

**Pending statements, eight:**
- **A.1:** the registration number (H-22).
- **§5.2:** Ali's implementation review item, his wording unchanged (H-23).
- **B.2, four facts the providers' pages do not give** (H-24): how long Porkbun keeps forwarded messages; where Porkbun processes them; how long Apple keeps a deleted message; where Apple stores iCloud Mail.
- **B.2, two for the legal review** (H-21): no written data protection terms with Porkbun or with Apple, which §6 requires, were found in their published terms.

**Ali's notice is not a pending statement.** It is his text and says H-21 remains open. The build's gate on publishing (H-16) therefore rests on the eight pending statements. Two of them cite H-21 and only the legal review can clear them. The notice itself is removed by hand when the review is done.

**Provenance:** `provenance/claims.md`, new section “DPA”, sources each factual statement in the app repository at `8ff3eec`. It lists separately the two commitments the app does not yet meet, the contractual commitments, and where the text and the app differ. The old DPA map in `privacy-traceability.md` described the builder's draft; it is replaced by a pointer.

**Found while sourcing it** (details in `claims.md`):
1. **Two commitments not yet implemented,** both in the app's iteration 30: follow Atlassian's `Cycle-Period` (the app uses a fixed 7 days), and report every stored account ID (it reports only the audit mapping's).
2. **Display names.** Since `d9cbf7c` the permission preview shows a person's display name when Jira returns one without a profile permission (an unmeasured SPIKE). It is shown, not stored. §2's “does not use Jira profile lookups” stays literally true.
3. **Export.** Ali's §5.3 is right that the export is not every stored record. The app's FAQ and this site's privacy page say “everything the app stores”.
4. **§6 and the email providers.** Porkbun's Email Service Agreement and the iCloud Terms describe services for individual or personal use, and neither publishes data processing terms. This is for the legal review.

**The privacy page now lags the DPA in three places.** It is not changed here, because Ali signed it off (H-10, renewed 2026-10-06) and a change needs his read again. Recorded under H-21:
- it says the app reports “the account IDs it stores” (only the mapping's are reported);
- it says a preview made just before the check keeps an ID “until it expires” (an applied, revertible preview is kept until uninstall);
- its sentence on email correspondence names no email provider.

## 2026-10-06 · Ali re-reads the changed privacy page and approves it (Ali)

On 2026-10-06, after the draft with the H-06, H-07 and H-08 answers was published, the builder asked Ali to read the
privacy page, the DPA draft and the app page. It asked him to confirm two sentences in particular:
- "We read the logs only to troubleshoot the app."
- "The app's data never leaves Atlassian, and the only part of it we can see is what the platform logs hold." This
  replaces the earlier "cannot see" any customer data, which stopped being true once the logs were documented.

Ali answered: "OK".
- **This renews the 2026-10-02 sign-off (H-10) for the privacy page as it now stands.**
- **It is not the DPA's legal review.** That is H-21, still open.
- The site stays in draft until H-21 is done, because a pending statement remains in the DPA (H-16).

## 2026-10-06 · Support page: Atlassian's minimums beside our one-business-day target (Ali)

**Ruled: Ali,** 2026-10-06, app repository `docs/rulings/2026-10-06-price-domain-terms-support.md`, answer 4 (“Yes”): EvidencePair commits to Atlassian's support terms for paid Marketplace apps. The support page already states a commitment (one business day, H-05), so it now also states Atlassian's minimums: critical issues get a response within 24 hours, every other request within 5 business days, and support is available at least 8 hours a day on business days. Atlassian's sources: the [Marketplace Partner Agreement](https://www.atlassian.com/licensing/marketplace/partneragreement) §6.3 for the response times, and the [cloud app operations guide](https://developer.atlassian.com/platform/marketplace/cloud-app-operations-guide/) for the hours. The minimums sit inside the same template condition as the target, so a page without a commitment would show neither.

**Wording:** the partner agreement's 24 hours applies to a request “that Atlassian identifies as critical”; the page says “critical issues”, as Ali committed, which is at least as strong. The one-business-day target stays the headline. `supportPortalUrl` stays null: the portal the ruling mentions is not set up yet (H-14).

## 2026-10-06 · A draft DPA for the Atlassian apps, at `/dpa/` (H-21)

Ali's 2026-10-06 ruling (app repository `docs/rulings/2026-10-06-price-domain-terms-support.md`, answer 3) asks for a data processing agreement drafted from the app's data inventory, for review by a lawyer or against a template. Atlassian's standard end-user agreement includes none, and a listing without one is a common rejection (app repository `docs/launch/2026-10-06-marketplace-research.md` §4).

**What it is built from:** only the data inventory (`provenance/data-inventory/scheme-control.md`), which follows the app repository's own inventory, plus Atlassian's documentation for platform facts. Every sentence is mapped in `provenance/privacy-traceability.md`. It states the personal data (account IDs and reason text; no display names; pseudonymous audit records), where it is processed (Forge storage for the installation, no egress, Atlassian's location rules), the one sub-processor (Atlassian), retention and deletion, the security measures that are true of the app today, breach notification without undue delay, and the support and security addresses.

**What it deliberately leaves out:** no certification, audit, insurance or service level is claimed, because none exists in either repository. International transfers, notice of new sub-processors, audit rights, liability and governing law are not written; a second pending statement says so. The “Runs on Atlassian” line claims the design (no egress, Atlassian-hosted compute and storage), not the badge, which Atlassian applies to listed apps and which no `forge eligibility` result in the app repository yet confirms.

**Where it is linked:** the footer's legal links (“Data processing”), the privacy page's Atlassian section and the terms page's Atlassian section. It uses the legal layout, so it shows a last-updated date. While `draft` is true it carries a pending statement at the top citing H-21; it cannot be published with that statement in place.

## 2026-10-06 · Terms: Atlassian's standard end-user agreement, superseding H-04's wording (Ali)

**Ruled: Ali,** 2026-10-06, app repository `docs/rulings/2026-10-06-price-domain-terms-support.md`, answer 3 (“Agreed please write”), to the builder's recommendation of “Atlassian's free standard end-user agreement rather than writing your own”; recorded in that repository's `DECISIONS.md`, 2026-10-06, item 3.

**Supersedes the wording of H-04 (2026-10-02),** which said the Atlassian Marketplace Terms of Use apply by reference. Those are the terms between Atlassian and Marketplace users; the agreement between a customer and the app's provider is the end-user agreement the listing names. The terms page's Atlassian section now names Atlassian's standard, customizable end-user agreement, the [Bonterms Standard End User Agreement (Version 1.0)](https://www.atlassian.com/licensing/marketplace/end-user-agreement-v1), between the customer and EvidencePair LLC as provider ([how a listing adopts it](https://developer.atlassian.com/platform/marketplace/list-customizable-end-user-agreement/)). It says that any EvidencePair-specific terms appear in the listing's Provider-Specific Terms, which take precedence where they differ, and that there are none today because no app is listed yet. The Paperloft section is unchanged.

**For Ali, when the listing is created:** under that agreement a DPA, security measures, a support policy and an SLA apply only if the Provider-Specific Terms identify them. Whether to link the DPA and the support page there is his decision; nothing on the site says they are linked.

## 2026-10-06 · Privacy page: the three app gaps answered from the app repository and Atlassian's docs (H-06, H-07, H-08)

The three pending statements are replaced, each from a line of the data inventory, which was re-derived from the app repository at `7fcc76f` (identical to the released build `ba8d3d8` for the app and core). The app repository now has its own inventory, `apps/controlled-project-config/docs/data-inventory.md`, written from the code on 2026-10-01; the site's inventory now follows it line by line and adds code references where the app's inventory is silent (the queue message, the logs). No pending statement remains on the privacy page.

- **H-06, account closure and erasure (DI-12).** Wired on 2026-10-01: the daily job (`apps/controlled-project-config/src/triggers.ts`, `daily`, lines 57–72) calls `reportPersonalDataIfDue` (`src/privacy.ts`), which runs the core's `runPersonalDataReport` once every seven days through `privacy.reportPersonalData`, with erasers for the history, the refusal counters, policies' “last edited by”, and the change engine's stored plans and intents. Site evidence: `daily-personal-data-report-done reported=2 erased=0` on the test site at 2026-10-01T22:02:01.936Z (`qa/controlled-project-config/iter-26/run/scheduled/RESULTS.md`), and `daily-personal-data-report-not-due` at 2026-10-05T22:02:01.653Z on `ba8d3d8` (`iter-29/run/scheduled-rerun-1/daily-report-lines.txt`). The erasure branch is covered by the app's automated tests but has not run on the site, because no closed account has been reported there; the page states what the app does and does not claim it has been observed.
- **H-07, uninstall (DI-13).** The app has no uninstall handler. Uninstalling removes the app's data, which the app repository observed on its test site and states in its FAQ and inventory. What Atlassian does with it is from Atlassian's documentation, linked on the page: soft-deleted and kept 28 days, a reinstall is a new installation, and a relink within 21 days needs the developer's request with the customer's consent. The two Atlassian pages phrase the period differently (one says 28 days, the other “the retention period as outlined in the Atlassian SOC 2 report”); the page uses the explicit figure and links both.
- **H-08, platform logs (DI-20).** What the app writes comes from reading every log call in the app and core code; the app repository documents none of it for customers. One finding the page states plainly: when a queued switch is ended, the `switch-abandoned` line includes the starter's account ID (`src/queue.ts` line 268). Atlassian's guidance rates an account ID in a log “log with caution”, not “no”. Who reads the logs, how a site admin turns sharing off, and the 30-day window are Atlassian's documentation, linked.

**Corrected in the same change, because they had become untrue** (details in `provenance/privacy-traceability.md`): display-name snapshots (the app no longer stores any), delegation to a group (project roles only), the refusal counter (now also durable), and several stored items the page did not list. “What we never do” no longer says we cannot see any customer data: the logs are visible to the app's developers. These are corrections to the text Ali signed off on 2026-10-02 (H-10), so the page needs his read again before it is published.

## 2026-10-06 · The site publishes copies of the app repository's customer docs

**The app repository is the source of the docs; this site publishes copies.** Scheme Control for Jira's six customer pages live in the app repository, `apps/controlled-project-config/docs/` (install, admin quick start, project admin guide, how workflow mapping works, security model, FAQ; spec 10 §12). The site's pages under `/docs/scheme-control/` are copies of them, read at `7fcc76f`, which is identical to the released build `ba8d3d8` for that folder. Each copy keeps the source's wording. The only changes: the H1 becomes the page title, links between pages become site URLs, the FAQ's question headings move up a level, and the install page's table gets the site's scroll wrapper. Each page's front matter names its source path and commit, and `provenance/claims.md` lists them.

**To change a doc, change it in the app repository first**, then copy it here and update the commit. A fix made only here would be overwritten by the next copy and would make the site disagree with the app's own documentation.

**What this replaced.** The site's four earlier pages were written by the site builder from spec 10 at `0f51c26`, before the app had customer docs. They had fallen behind the app: delegation to a named group (the app delegates to project roles only), display-name snapshots in the history and audit mapping (the app stores account IDs only), a Jira administrator able to revert any change (site-wide admin rights do not override a policy), and nothing about the daily sweep of stalled changes or **Export all app data**.

**The scope measurement moved to the app page.** Ali ruled on 2026-09-29 (H-18) that the 2026-09-22 measurement table is published, and it sat on the old security model page. The app repository's security model page does not carry it, so a faithful copy cannot either. It now sits on the app page under “Why classic scopes, not granular ones”, unchanged, and the security page's link to the app page's scopes section still reaches it.

## 2026-10-06 · The app is Scheme Control for Jira, at `/apps/scheme-control/` (H-11)

**Supersedes** the 2026-09-29 entry “The app is named by its working title”. Ali named the product on 2026-09-30: “The app has a name: Scheme Control for Jira”, vendor EvidencePair LLC (app repository, `docs/rulings/2026-09-30-name-fold-and-spec-window.md`; spec 10 v1.6). The site now uses that name and the slug `scheme-control`, which is also the example spec 30 §5 gave. What moved: `content/apps/scheme-control.md`, `content/docs/scheme-control/` (each page's `app` field), `provenance/data-inventory/scheme-control.md`, every internal link, and the claims register. Status stays `coming soon`, so the page still shows no price, no Marketplace link and no purchase language.

**The deviation from the working title, and why the app repository looks different:** the same ruling keeps the app repository's identifier, `apps/controlled-project-config/`, the `CPC` code prefix and the `CPC-AC-nn` criterion IDs, because those IDs are the contract with its test protocol. So every source path the provenance files cite still says `controlled-project-config`, while every customer-facing string here says Scheme Control for Jira. That split is intended, not a half-finished rename.

**The old URLs are not redirected.** `/apps/controlled-project-config/` and `/docs/controlled-project-config/…` existed only in draft builds, which carry `noindex`. A redirect would need either a script or a meta refresh per page; neither is worth it for pages no search engine was allowed to index.

**One correction made with the rename:** the app now asks for five scopes, not four. `report:personal-data` was added on 2026-10-01 so the weekly personal-data report can run (app repository `README.md` and `manifest.yml` at `7fcc76f`). The app page's scope table gains that row, in the README's words.

## 2026-10-02 · evidencepair.com is the company-wide site (Ali)

Spec 30 §1 scoped this site to the Atlassian apps, and the 2026-09-29 H-17 ruling matched. Ali now rules that evidencepair.com is the company-wide site, calling out Paperloft and the Atlassian apps first. What changed: the home page presents both product lines; the terms page has a section per line (Apple's standard EULA for Paperloft, Atlassian's terms for the Marketplace apps); the privacy page covers Paperloft by reference to its published policy with five sentences taken from it; the security and support pages gain a Paperloft section. What did not change: Paperloft's details, privacy policy and support live at paperloft.app (its own repository, plain HTML, same no-third-party rules as here), and this site links to them rather than duplicating them, so there is one home for each fact. Every Paperloft sentence here traces to the published Paperloft pages or its spec (`provenance/claims.md`). Two new human tasks: H-19 (the Apple standard-EULA sentence) and H-20 (Private Cloud Compute is a planned opt-in that would qualify “on your Mac”).

**Validator grade, same day:** SITE-AC-02 PASS, SITE-AC-05 PASS for the Paperloft content, every sentence traced to paperloft.app or the Paperloft spec. Three minor wordings fixed: “refunds” dropped from the terms sentence (not in either source), “are sold only through the Mac App Store” instead of “are distributed” (nothing is released yet), and the security page's “Every EvidencePair app is built on Forge” narrowed to Atlassian apps.

## 2026-10-02 · Sign-off and four rulings (Ali)

**Launch-gate sign-off (H-10):** Ali has read the privacy, terms and security pages and adopts the reviewer's two HUMAN-QA verdicts as his own: SITE-AC-16 PASS, SITE-AC-15 PASS. The site stays in draft until the three app-gap statements (H-06, H-07, H-08) are answered; while in draft every page carries `noindex` and the preview banner.

**Host (H-01):** GitHub Pages, deployed by the CI workflow after every check passes. The repository was made public for it. Consequence: `HUMAN-TASKS.md`, `DECISIONS.md` and the draft data inventory, including its three gaps, are public. Cloudflare Pages was the recommendation but needs the nameservers at Cloudflare for an apex domain; GitHub Pages works with DNS staying at Porkbun, so the existing Porkbun email forwarding is untouched (H-02 is then a Porkbun setting, not Cloudflare Email Routing; spec 30 §4 named Cloudflare, and this is the recorded substitution).

**Response commitment (H-05):** one business day, for support replies and vulnerability acknowledgements.

**Terms (H-04):** the Atlassian Marketplace Terms of Use apply by reference. Revisit only if EvidencePair wants its own terms.

**Hosting provider on the privacy page (H-03):** GitHub Pages, with a link to GitHub's privacy statement; the link is checked at build time like every external link.

## 2026-09-29 · H-17 and H-18 ruled (Ali)

**H-17:** “This site covers its Atlassian apps” is the scope-safe sentence; confirmed, and the privacy page's “builds apps for Atlassian products” line now carries the same qualifier (“This policy covers those apps and this website.”).

**H-18:** publish the measurement table. Eight reads by three scope lists teaches a competitor nothing, and it is what makes the scope sentence evidence rather than a claim. The app repository's `DECISIONS.md` is the record; the site is the public copy, the normal arrangement for a private repository.

## 2026-09-29 · HUMAN-QA: provisional reads, SITE-AC-16 pass with notes, SITE-AC-15 pass with conditions

**Correction:** these two reads were done by a reviewer and forwarded by Ali, not by Ali. They are provisional. Under spec 30 §8 the HUMAN-QA verdicts and the launch-gate sign-off are Ali's (H-10). The reviewer's stated verdicts: home page pass with notes, security page pass once H-05 and the H-08 link are filled.

**SITE-AC-16, home page read cold: PASS (provisional).** Clear and honest; a Jira admin knows within ten seconds what the company does. Three notes, none a launch blocker, all acted on the same day: the headline said “Jira and Confluence” while the shelf holds one Jira app marked coming soon (now “Governed change for Jira”, with “starting with Jira” in the lede); the admin who arrives first wants the one sentence of what they stop doing, which the app card had (“without handing out Jira admin rights”), so each app's tagline now sits directly under the lede; and the “Who we are” sentence needs its scope decided now because it is wrong the day TitleCovenant ships under the same LLC (“This site covers its Atlassian apps.” added; decision stays with H-17).

**SITE-AC-15, security page read as a buyer's security reviewer: PASS (provisional), with two conditions.** The reviewer's words: strong, unusually so for a Marketplace vendor; it says what it cannot do, explains why there is no secret key, and “checked by an automated browser test on every build, not by policy alone” is the sentence a reviewer wants. Conditions: (1) “We cannot see your data” rests on Forge storage isolation and a reviewer will ask about Forge logs within two minutes, so the bullet now points at the privacy page's platform-logs section, which stays pending until H-08 is answered; (2) the H-05 pending statement sits in the vulnerability section, where a reviewer looks last and hardest, so the page cannot be shown to a buyer until it is filled. Both conditions are recorded on H-05 and H-08.

**New task H-18:** publish the scope measurement the security wording invites reviewers to ask for. Done on the security-model docs page, from the app repository's `DECISIONS.md` (2026-09-22 CPC-S9); Ali confirms it may stay public.

The validator re-graded the three additions (measurement table, “starting with Jira”, the logs sentence) against the sources: AC-02 PASS, all 24 table cells match.

## 2026-09-29 · Built in `Allerdyce/evidencepair`, not `evidencepair-site`

Spec 30 §2 says to name the repository `evidencepair-site`. Ali created `Allerdyce/evidencepair` and pointed the session at it, so the site lives here. Everything else in §2 holds: separate from the app monorepo, no shared code, the app repository may read from it only through published URLs. Renaming the repository later is a GitHub setting and changes nothing in the tree.

## 2026-09-29 · Generator: Eleventy 3, no plugins

As specified (§4). Nunjucks templates, Markdown content, one hand-written stylesheet, no JavaScript on any page. No Eleventy plugins, so nothing runs a network call at build time and the output is deterministic (SITE-AC-14 passes with two builds in `scripts/check-reproducible.mjs`).

## 2026-09-29 · The app is named by its working title

Spec 30 §5 used `scheme-control.md` as the example content file. The app repository calls the app “Controlled Project Configuration for Jira (working title)” in its README, spec and manifest, and spec 20 §6 makes the final name Ali's decision. The site uses the working title and the slug `controlled-project-config`. Renaming later is a content change: rename one file and one docs folder, and update `name` and `docsPath` (H-11).

## 2026-09-29 · The app is `coming soon`

It is built and deployed to the Forge development environment but has not been through its test loop or been submitted to the Marketplace (README status). Under SITE-AC-11 the page therefore shows no Marketplace link, no price and no purchase language. The price hypothesis in spec 10 is not published anywhere on the site.

## 2026-09-29 · Data inventory drafted here, marked draft

Spec 30 §7: the app repository produces the data inventory, and if it is missing the builder stops and writes it to `HUMAN-TASKS.md`. It was missing. Writing a policy from guesswork was not an option, and leaving the privacy URL returning nothing would block SITE-AC-01. The middle path taken: a draft inventory derived line by line from the app repository's manifest, specs and code, each line citing its source (`provenance/data-inventory/controlled-project-config.md`), and a privacy page whose every factual sentence maps to a line of it (`provenance/privacy-traceability.md`). Where the sources do not answer a question, the page carries a **pending** statement instead of a claim. The inventory's proper home is the app repository; moving it and confirming each line is H-09.

## 2026-09-29 · Pending statements are a build-time mechanism

A `{% pending %}` shortcode renders a marked paragraph while `site.draft` is true and throws at build time when it is false, so the site cannot be published with an unresolved statement by forgetting one. `scripts/check-pending.mjs` double-checks the built output.

## 2026-09-29 · Spec 30's “known fact” about audit identity is stated more precisely

Spec 30 §7 says “Audit records identify actors by Atlassian account ID, not display name.” The sources say two things: the tamper-evident audit chain stores a per-installation pseudonym (an HMAC of the account ID), never the account ID or a name, with an erasable mapping table beside it; and the app's change-history table stores the account ID and a display-name snapshot. The site says both, exactly. Ali to confirm (H-12).

## 2026-09-29 · Three gaps found in the app, not papered over

Reading the code for the inventory surfaced three things the privacy page cannot state: the app never calls the shared core's personal-data reporting routine (DI-12); nothing documents what happens on uninstall (DI-13); nothing documents what the platform logs hold or who reads them (DI-20). Each is a pending statement on the page and a human task (H-06, H-07, H-08). They belong to the app repository; this repository only records that they exist.

## 2026-09-29 · Hosting: Cloudflare Pages recommended, not yet chosen

Spec 30 §4 allows Cloudflare Pages or GitHub Pages. Recommendation: Cloudflare Pages, so DNS, hosting and the email routing the spec asks for are in one free account. The build output is plain files in `_site`, so either host works without changes. Until Ali chooses (H-01), `site.host` is null and the privacy page carries a pending statement for it.

## 2026-09-29 · Domain assumed to be `evidencepair.com`

`whois` shows `evidencepair.com` registered on 2026-09-05 at Porkbun, the same month as the LLC's formation, with Porkbun parking DNS and Porkbun email forwarding. It is assumed to be Ali's. The site uses it for its URL and the four addresses. Confirming is H-01.

## 2026-09-29 · SITE-AC-02 and SITE-AC-05 grading

Graded by a separate agent with the source repository and no sight of the drafting (spec 30 §9).

**Run 1, 2026-09-29, against sources at `0f51c26` (identical to `8656572` for every file read): both FAIL, then fixed.**
- AC-02 blocking: two pages promised that the audit-actor mapping “can be erased when an account is closed” while no app code path erases anything (the privacy page already said so). Reworded to the structural fact: the mapping is kept outside the hash chain, so erasing it leaves the log verifiable; the process is pending (H-06).
- AC-02 blocking: the admin guide said a stalled queued change is ended “rather than left hanging”; the daily reaper (CPC-AC-33) is not built, only the on-delivery bound (CPC-AC-28). Reworded to “on its next delivery after its retry window”.
- AC-02 minor: home bullet now scopes the guard rule to requests a person makes; quick start no longer implies the app is installable today; unlicensed banner links “to the Atlassian Marketplace”, not a listing; the security-model page now labels issue security and workflow switching as beta; the company description is an Ali item (H-17).
- AC-05 blocking: DI-09 said CPC writes core job records; it does not. The account ID and display name of a person who starts a background switch travel in the queue message. Inventory, privacy page and map corrected.
- AC-05 minor: the rejection counter's KVS key holds the account ID for five minutes (added to DI-10 and the page); audit events also cover lock releases and the daily check (DI-06 and the page); two vendor-practice sentences added to the map as **Ali** rows.
- **Re-grade, same day, same sources: AC-02 PASS, AC-05 PASS.** One non-blocking note (the audit-records bullet on the privacy page listed a switch event's fields as if every event had them) was reworded. Both criteria remain contingent on Ali's review of the rows marked **Ali** in the map and register (H-10, H-17).
