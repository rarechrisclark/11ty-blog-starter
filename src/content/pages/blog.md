---
permalink: blog/{%- if pagination.pageNumber != 0 -%}/{{ pagination.pageNumber }}/{%- else -%}index.html{%- endif -%}
layout: blog
title: Blog
description: This is my blog where I write about technology, programming, and software development.
pagination:
  data: collections.allPosts
  size: 6
---
