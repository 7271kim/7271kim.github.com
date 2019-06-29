---
layout: page
permalink: /blog/categories/JAVA
title: JAVA
---
 
<h3> Posts by Category : {{ page.title }} </h3>

<div class="card no-margin">
{% for post in site.categories.JAVA %}
 <li class="category-posts"><span>{{ post.date | date_to_string }}</span> &nbsp; <a class="no-br" href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</div>