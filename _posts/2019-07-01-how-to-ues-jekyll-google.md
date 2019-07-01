---
title: 나도 GIT블로그 하고싶다.<br/>( 구글검색 )
layout: post
summary: 내 포스트 구글 검색 가능하게 하기 
categories: 
    - gitBlog
tags: 
    - difficulty-low: "난이도 하"
    - install: "설치"
pre: "/gitblog/2019/06/25/how-to-ues-jekyll-summary.html"
author: 김석진
thumbnail: posts/git-blog.jpg
---
######  구글 검색에 노출하기위해 필요한 것은 sitemap.xml과 robots.txt이다.
<br/>
<p class="bold-text">sitemap.xml</p>
 - sitemap.xml은 웹사이트 내 모든 페이지의 목록을 나열한 파일로 책의 목차와 같은 역할
 - robots.txt 파일과는 달리 sitemap.xml 파일은 꼭 루트 디렉토리에 위치하지 않아도 된다.
 
<p class="bold-text">robots.txt</p>
 - 검색 엔진 크롤러에서 사이트에 요청할 수 있거나 요청할 수 없는 페이지설정하는 부분 및 제어하는 부분
 - 검색 로봇들에게 웹사이트의 사이트맵이 어디 있는지 알려주는 역할
 - 항상 root 폴더에 위치해 /robots.txt를 입력하면 확인 가능
 - sitemap.xml은 정해진 양식으로 제작되어야 하고, 이 양식은 대한민국 뿐 아니라 전세계적으로 약속된 방식
<pre>
모든 웹사이트 콘텐츠에 대한 모든 웹 클롤러의 접근을 차단
User-agent: *
Disallow: /

만약 구글 로봇만 차단시키고 싶다면 User-agent에 * 부분을 Googlebot으로 변경하여 설정

User-agent: Yeti
Disallow: /hello/

이렇게 설정하면 웹사이트의 모든 콘텐츠의 네이버 검색로봇의 크롤링을 허용하되, /hello/  디렉토리 안의 페이지에 대한 접근만 차단한다는 의미

</pre>

#### 실제 적용
<p class="bold-text">1. _config.yml url에 자신의 홈페이지 주소 확인 : 꼭!!! http:// 까지 풀로 적어줘야가능하다.! ( 그래야 플러그인 생성시 앞에 붙음 )</p>
<p class="bold-text">2. root에 sitemap.xml 생성</p>
<p class="bold-text"> i) jekyll-sitemap plugin을 사용</p>
 - 플러그인 설치 gem install jekyll-sitemap
 - Gemfile파일에 작성 : gem "jekyll-sitemap" , 그리고 bundle install
 - _config.yml plugins에 추가 jekyll-sitemap
 - 서버 재부팅 후 이제 블로그 URL에 /sitemap.xml를 붙여 잘 열리는지 확인
 <br/>
<p class="bold-text"> ii) 일반 코드 삽입</p>
<pre>
{% raw %}
---
---
&lt;?xml version="1.0" encoding="UTF-8"?>
&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {% for post in site.posts %}
    &lt;url>
        &lt;loc>{{ site.url }}{{ post.url | remove: 'index.html' }}&lt;/loc>
    &lt;/url>
    {% endfor %}

    {% for page in site.pages %}
    {% if page.layout != nil %}
    {% if page.layout != 'feed' %}
    &lt;url>
        &lt;loc>{{ site.url }}{{ page.url | remove: 'index.html' }}&lt;/loc>
    &lt;/url>
    {% endif %}
    {% endif %}
    {% endfor %}
&lt;/urlset>
{% endraw %}
</pre>

<p class="bold-text">3.robots.txt 추가 </p>
: sitemap 주소확인. 하단 내용 삽입
<pre>
User-agent: *
Allow: /

Sitemap: https://7271kim.github.io/sitemap.xml
</pre>
<p class="bold-text">3. 구글 등록</p>
<a href="https://search.google.com/search-console/about?hl=ko&utm_source=wmx&utm_medium=wmx-welcome" target="_blank"> 구글등록 </a> 
 - URL 접두어 입력 > 소유권 확인 : HTML태그 중 사이트 안 메타태그추가 진행
 - 색인 > Sitemaps > sitemap.xml 위치 적용
 - 일주일정도 반영 기다리기

	
	