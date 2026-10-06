---
layout: layouts/page.njk
title: Support
permalink: /support/
description: How to get help with an EvidencePair app, and what to include.
---

## Paperloft apps

Email <a href="mailto:{{ paperloft.supportEmail }}">{{ paperloft.supportEmail }}</a>, or see [Paperloft support]({{ paperloft.supportUrl }}) for the FAQ.

## Atlassian apps

Email <a href="mailto:{{ site.emails.support }}">{{ site.emails.support }}</a>. {% if site.supportPortalUrl %}You can also raise a request in our [support portal]({{ site.supportPortalUrl }}).{% endif %}

{% if site.supportResponseTarget %}We reply within {{ site.supportResponseTarget }}. That is our own target. We also commit to Atlassian's minimums for Marketplace apps: critical issues get a response within 24 hours, every other request within 5 business days, and support is available at least 8 hours a day on business days.{% else %}{% pending "State the support response target.", "HUMAN-TASKS H-05" %}{% endif %}

### What to include

- Which app, and the page or action you were using.
- What you did, what you expected, and what happened instead.
- The message the app showed, if any. The app shows a short code with each unexpected error; that code is enough for us to find the detail.
- A screenshot, with any personal data removed.

Please do not send account passwords, API tokens or session data. We never need them.

### Other addresses

- Security vulnerabilities: <a href="mailto:{{ site.emails.security }}">{{ site.emails.security }}</a>, see the [security page](/security/).
- Billing: <a href="mailto:{{ site.emails.billing }}">{{ site.emails.billing }}</a>. Marketplace purchases, trials and invoices are handled by Atlassian, so for those start with your Marketplace account.
- Everything else: <a href="mailto:{{ site.emails.hello }}">{{ site.emails.hello }}</a>.

### Data-integrity issues

If you believe an app has changed something it should not have, or that a history or audit record is wrong, say so in the subject line. We treat those reports as the highest severity.
