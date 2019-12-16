---
title: Cake Factory
layout: default
---

<main class="page-content" aria-label="Content" onclick="$('.site-nav').removeClass('active')">
  {% for section in site.sections %}
    <section id="{{ section.title }}" class="closed">
      <div class="wrapper">
        {{ section.content }}
      </div>
    </section>
  {% endfor %}
</main>