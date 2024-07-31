---
permalink: /projects/
layout: page
title: Projects
description: This is a list of my open-source projects
---

{% for item in repos %}
{% if item.fork == false %}
  <div class="card mb-4 shadow-sm">
    <div class="card-header">
      <h2 class="card-title h5 mb-0">
        <a href="{{ item.html_url }}" class="text-decoration-none">{{ item.name }}</a>
      </h2>
    </div>
    <div class="card-body">
      <p class="card-text">{{ item.description }}</p>
    </div>
    <div class="card-footer text-end">
      <a href="{{ item.html_url }}" class="icon-link icon-link-hover">
        View on GitHub
        {% svg "ui/arrow-right" %}
      </a>
    </div>
  </div>
{% endif %}
{% endfor %}
