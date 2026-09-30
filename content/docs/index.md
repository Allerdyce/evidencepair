---
layout: layouts/page.njk
title: Documentation
permalink: /docs/
description: Documentation for EvidencePair apps.
---

{% for a in collections.apps %}
## {{ a.data.name }}

{{ a.data.tagline }}

<ul>
{% for d in collections.docs %}{% if d.data.app == a.fileSlug %}<li><a href="{{ d.url }}">{{ d.data.title }}</a>{% if d.data.description %} — {{ d.data.description }}{% endif %}</li>{% endif %}{% endfor %}
</ul>
{% endfor %}

Can't find what you need? See the [support](/support/) page.
