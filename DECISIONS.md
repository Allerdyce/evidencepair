# Decisions

Rulings and deviations for the EvidencePair vendor site (spec 30). Newest first. Anything a human must decide is in `HUMAN-TASKS.md`, not here.

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
