---
layout: page
permalink: /blog/tags/
title: Tags
---
 

<h3>  {{ page.title }} </h3>

<!-- 
태그설계 
tags: 
    - difficulty-low: "난이도 하"
해당 형식이기 때문에 
{"difficulty-low=>난이도 하"=>[포스트 항목 1, 포스트 항목2]}
형식으로 들어간다.
 -->
 
<div id="categories">
{% assign tags = site.tags %}
{% for category in tags %}
    {% assign postList = category[1] %}
    {% assign categoryInfo = category[0] %}
    {% for category in categoryInfo %}
         {% assign tagUrl = category[0] %}
         {% assign tagName = category[1] %}
    <div class="category-box" >
         <div id="#{{ tagUrl | slugize }}"></div>
         <h4 class="tag-head">
         <li class="category-posts">
             <a href="{{ site.baseurl }}/blog/tags/{{ tagUrl }}">#{{ tagName }}( {{postList| size}} )</a>
         </li>
         </h4>
    </div>
    {% endfor %}
{% endfor %}
</div>


