# Decisions

Rulings and deviations for the EvidencePair vendor site (spec 30). Newest first. Anything a human must decide is in `HUMAN-TASKS.md`, not here.

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

Graded by a separate agent with the source repository and no sight of the drafting (spec 30 §9). Results are recorded below as they happen.
