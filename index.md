---
title: Cake Factory
layout: default
---

<main class="page-content" aria-label="Content" onclick="$('.site-nav').removeClass('active')">
	<div itemscope itemtype="http://schema.org/Organization">
		<meta itemprop="name" content="cake factory">
		<meta itemprop="location" content="Boston">
	    {% for section in site.sections %}
	    	<section id="{{ section.title }}" class="closed">
	        	{{ section.content }}
	    	</section>
	    {% endfor %}
	</div><!-- itemscope -->
</main>