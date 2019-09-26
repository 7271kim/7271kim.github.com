---
layout: page
permalink: /blog/categories/
title: Categories
---
 

<h3>  {{ page.title }} </h3>

<div id="categories">
{% for tag in site.categories %}
  <div class="category-box" >
    {% capture tag_name %}{{ tag | first }}{% endcapture %}
    <div id="#{{ tag_name | slugize }}"></div>
    <h4 class="tag-head">
        <li class="category-posts">
            <a href="{{ site.baseurl }}/blog/categories/{{ tag_name }}">
                {% assign tagName = tag_name %}
                {% for item in site.categories_korea %}
                    {% if item[tagName] %}
                        {% assign tagName = item[tagName] %}
                    {% endif %}
                {% endfor %}
                {{ tagName }}
            ( {{ tag | last | size }} )</a>
        </li>
    </h4>
    <a name="{{ tag_name | slugize }}"></a>
  </div>
{% endfor %}
</div>


