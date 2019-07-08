---
title: 나도 GIT블로그 하고싶다.<br/>( 문법편  )
layout: post
summary: 깃 블로그의 문법이란
categories: 
    - gitBlog
tags: 
    - difficulty-mid: "난이도 중"
pre: "/gitblog/2019/06/17/how-to-ues-jekyll-settings.html"
nex: "/gitblog/2019/06/23/how-to-ues-jekyll-apply.html"
author: 김석진
thumbnail: posts/git-blog.jpg
---
# <br/>
<em>기본은 문법이라 생각하기에 공부하면서 정리한것들 나열.</em>
<br/>
바로 이 테마에대해서만 궁금한 경우 응용편으로 바로 가도 괜찮습니다. 

### 1. 지킬은 YAML 포맷을 사용한다.
- YAML : YAML Ain’t Markup Language ( 아재개그격 )
- 정의 : <em>YAML is a human friendly data serialization standard for all programming languages.</em>
- json과 xml 처럼 인터넷 상에서 주고받는 데이터의 형식 중 하나라고 보면 되는데 좀더 사람이 직관적으로 보기 자연스러운 형태를 위해 만들었다고 한다.( json에비해 구조는 복잡함 )

<br/>
### 2. YAML의 자료형 : <a href="https://yaml.org/" target="_blank">https://yaml.org/</a> ( 공식 홈페이지 )
- 스칼라 (scalar) : String 또는 숫자형
- 시퀀스 (sequence) : 배열 또는 리스트
- 매핑 (mapping) : key/value 형태
- 들여쓰기(탭문자 미사용)를 통해 블록을 구분
- #는 주석
- 특수문자는 역슬레쉬와 함께 사용

###### <b>sequence ( 리스트 ) : - 로 표현 </b>
###### <b>scalar ( 숫자 혹은 문자 ) : 문자열 숫자 등을 scalar라고 표현한다.</b>
<pre>
Ex)
- test1 (scalar)
- test2 (scalar)
</pre>

###### <b>mapping ( 해쉬맵 구조 ) : ' : ' 으로 구분  스칼라: 스칼라 - 띄어씌기 유의!!</b>
<pre>
Ex)
hr:  65
avg: 0.278  
</pre>

###### <b>스트림 내 여러 문서 표현의 예 --- 로 문서구분!</b>
<pre>
---
time: 20:03:20
player: Sammy Sosa
action: strike (miss)
...
---
time: 20:03:47
player: Sammy Sosa
action: grand slam
...
</pre>

<br/>
### 3. 사용법 비교
 <img src="/assets/img/posts/yaml/yaml2.png" alt='xml,json,yaml 구분' class="ratio-100"><br/>
 (https://m.blog.naver.com/PostView.nhn?blogId=wideeyed&logNo=221090209367proxyReferer=https%3A%2F%2Fwww.google.com%2F)
 

<br/>
### 4. Liquid 문법 개념과 사용법
<a href="https://shopify.github.io/liquid/tags/control-flow/" target="_blank">https://shopify.github.io/liquid/tags/control-flow/</a>
- 정의 : Liquid는 Shopify에 의해 개발되고 Ruby로 작성된 오픈소스 템플릿 언어이다.
- 사용 : Jekyll에 사용된다.

<br/>
###### <b> 기본 오브젝트(Object) </b>
오브젝트(Object)는 페이지의 어느 지점에 해당 대상을 배치할 지 지시합니다. 하나의 오브젝트는 변수명(variable name)을 둘러싸는 ‘{‘, ‘}’으로 둘러싸는 형태로 표현됩니다.
<pre>
{% raw %}
{{ page.title }}
{% endraw %}
</pre>

<br/>
###### <b> 변수 할당 : <a href="https://help.shopify.com/en/themes/liquid/tags/variable-tags" target="_blank">https://help.shopify.com/en/themes/liquid/tags/variable-tags</a></b>
assign
<pre>
{% raw %}
{% assign my_string = "Hello World!" %}
{% assign my_int = 25 %}
{% assign my_float = 39.756 %}
{% assign foo = true %}

출력
{{ my_string }}
{% endraw %}
</pre>

capture
<pre>
{% raw %}
{% assign favorite_food = 'pizza' %}
{% assign age = 35 %}

{% capture about_me %}
I am {{ age }} and my favorite food is {{ favorite_food }}.
{% endcapture %}

{{ about_me }}

출력
I am 35 and my favorite food is pizza.
{% endraw %}
</pre>

<br/>
###### <b> list 출력 </b>
for 
<pre>
{% raw %}
if : site.users = "Tobi", "Laura", "Tetsuro", "Adam"

{% for user in site.users %}
  {{ user }}
{% endfor %}

{{ site.users[0] }}
{{ site.users[1] }}
{{ site.users[3] }}

{% endraw %}
</pre>

<br/>
###### <b> Liquid 태그를 그대로 보여줄 수 있게 Escape하는 방법 </b>
{　% raw %　} 와 {　% endraw %　} 사이에 Liquid 문법을 입력
<br/><br/>
<img src="/assets/img/posts/yaml/grammer.png"><br/>
<pre>
{% raw %}
{{ page.title }}
{% endraw %}
</pre>

<br/>
###### <b> Tag </b>
if else문과 비슷한 역할. 논리적 흐름을 제어한다. <br/><br/>
<img src="/assets/img/posts/yaml/grammer_if.png"><br/>

<pre>
{% if site.url %}
  My Blog URL :  {{ site.url }}
{% endif %}
</pre>

<br/>
###### <b> Filter </b>
 Liquid의 Object가 출력되는 방식을 변경한다. 오브젝트 출력 시에 | 로 출력 대상과 구분되게 됩니다. <br/><br/>
<img src="/assets/img/posts/yaml/grammer_filter.png"><br/>

<pre>
  {{ "/my/fancy/url" | append: ".html" }}
</pre>

<br/>
###### <b> Jekyll 에만 추가된 필터와 태그 </b>
<a href="http://jekyllrb-ko.github.io/docs/templates/ " target="_blank">http://jekyllrb-ko.github.io/docs/templates/ </a>
- Relative URL
: 입력값 앞에 baseurl 값을 추가한다. 사이트가 최상위 경로가 아닌 하위 경로에서 호스팅 될 경우 유용하다.
<pre>
     { "/assets/style.css" | relative_url }
     = >
     /my-baseurl/assets/style.css
</pre>

- Absolute URL
: 입력값 앞에 url 과 baseurl 값을 추가한다.
<pre>
     { "/assets/style.css" | absolute_url }
     = >
     http://example.com/my-baseurl/assets/style.css
</pre>

- Where
: 배열 안에서 특정 키와 값을 가진 객체들을 선택한다.
<pre>
    { site.members | where:"graduation_year","2014" }
</pre>

- Where Expression
: 배열 안에서 표현식이 참인 객체들을 선택한다.
<pre>
    { site.members | where_exp:"item","item.graduation_year == 2014" }
</pre>

- Group By
: 배열 안의 항목들을 특정 속성으로 그룹 짓는다.
<pre>
   { site.members | group_by:"graduation_year" }
   =>
   [{"name"=>"2013", "items"=>[...]},
    {"name"=>"2014", "items"=>[...]}]
   
</pre>

- Group By Expression
: 배열 안의 항목들을 Liquid 표현식을 사용해 그룹 짓는다
<pre>
    { site.members | group_by_exp:"item","item.graduation_year | truncate: 3, \"\"" }
    =>
    [{"name"=>"201...", "items"=>[...]},
    {"name"=>"200...", "items"=>[...]}]
</pre>

<br/>
### 5. Markdown이란 
- 정의 : 마크다운(markdown)은 일반 텍스트 문서의 양식을 편집하는 문법이다[1]. README 파일이나 온라인 문서, 혹은 일반 텍스트 편집기로 문서 양식을 편집할 때 쓰인다. 마크다운을 이용해 작성된 문서는 쉽게 HTML 등 다른 문서형태로 변환이 가능하다. ( 위키백과 ) 
- 마크다운(Markdown)은 웹상 쉽게 디자인을 적용할 수 있는 하나의 글쓰기 도구라고 생각하면 됩니다. HTML을 몰라도 약간의 노력을 통해 적용 가능

<br/>
### 6. Markdown 디자인 가이드


<h1 class="text-center"> Devlopr - Styleguide </h1>

<hr />
 
 <img src="/assets/img/styleguide.png" width="100%" height="auto">

<p> Lets try the different text styles  <b> Bold </b> , <strong> Strong </strong>, <em> Emphasis </em>, <i> Italic </i> </p>


<p> Now, lets try different heading styles : </p>

<h1> Hello in h1 ! </h1>
<h2> Hello in h2 ! </h2>
<h3> Hello in h3 ! </h3>
<h4> Hello in h4 ! </h4>
<h5> Hello in h5 ! </h5>
<h6> Hello in h6 ! </h6>

<hr />
<p> Unordered List </p>

<ul>
<li> List Item 1 </li>
<li> List Item 2 </li>
<li> List Item 3 </li>
<li> List Item 4 </li>
<li> List Item 5 </li>
</ul>

<p> Ordered List </p> 
<ol>
<li> List Item 1 </li>
<li> List Item 2 </li>
<li> List Item 3 </li>
<li> List Item 4 </li>
<li> List Item 5 </li>
</ol>

<blockquote> 
<p>This is a Block Quote,  It can Expand Multiple Lines </p>

</blockquote>

<p>You can use the mark tag to <mark>highlight</mark> text. </p>

<p><del> This line of text is meant to be deleted text </del> </p>

<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>

<hr />
<div class="responsive-table">
<table>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
    </div> 

<hr />

<h3>YouTube Responsive Embed</h3>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/nuwjUZCSB2Y?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>

<hr />

<h3>Vimeo Responsive Embed</h3>

<iframe src="https://player.vimeo.com/video/212114694?title=0&amp;byline=0&amp;portrait=0" width="100%" height="360" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>

<hr />

<h3 id="ted-responsive-embed">TED Responsive Embed</h3>

<iframe src="https://embed.ted.com/talks/ted_halstead_a_climate_solution_where_all_sides_can_win" width="100%" height="360" frameborder="0" scrolling="no" allowfullscreen=""></iframe>

<hr />

<h3 id="twitch-responsive-embed">Twitch Responsive Embed</h3>

<iframe src="https://player.twitch.tv/?autoplay=false&amp;video=v248755437" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>

<hr />

<h3 id="soundcloud-embed">SoundCloud Embed</h3>

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/29738591&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

<hr />

<h3 id="codepen-embed">CodePen Embed</h3>

<p data-height="265" data-theme-id="light" data-slug-hash="YWvpRo" data-default-tab="css,result" data-user="kharrop" data-embed-version="2" data-pen-title="Referral Form" class="codepen"></p>
<script async="" src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<hr />

<h3 id="syntax-highlighting">Syntax Highlighting</h3>

<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="s1">'use strict'</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">markdown</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'markdown'</span><span class="p">).</span><span class="nx">markdown</span><span class="p">;</span>
<span class="kd">function</span> <span class="nx">Editor</span><span class="p">(</span><span class="nx">input</span><span class="p">,</span> <span class="nx">preview</span><span class="p">)</span> <span class="p">{</span>
  <span class="k">this</span><span class="p">.</span><span class="nx">update</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
    <span class="nx">preview</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">markdown</span><span class="p">.</span><span class="nx">toHTML</span><span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">value</span><span class="p">);</span>
  <span class="p">};</span>
  <span class="nx">input</span><span class="p">.</span><span class="nx">editor</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
  <span class="k">this</span><span class="p">.</span><span class="nx">update</span><span class="p">();</span>
<span class="p">}</span></code></pre></figure>

<p>You can add inline code just like this, E.g. <code class="highlighter-rouge">.code { color: #fff; }</code></p>

<figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="nt">pre</span> <span class="p">{</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="m">#f4f4f4</span><span class="p">;</span>
  <span class="nl">max-width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">auto</span><span class="p">;</span>
<span class="p">}</span></code></pre></figure>

<hr />

<h3 id="github-gist-embed">GitHub gist Embed</h3>

<script src="https://gist.github.com/ahmadajmi/dbb4f713317721668bcbc39420562afc.js"></script>

<hr />

<h3 id="input-style">Input Style</h3>

<p><input type="text" placeholder="I'm an input field!" /></p>

<hr />

<h3> Twitter Embed </h3>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I just published “Deploying a blog using Jekyll and Github Pages with SSL certificate for Free” <a href="https://t.co/B3T3IQVU93">https://t.co/B3T3IQVU93</a></p>&mdash; Sujay Kundu (@SujayKundu777) <a href="https://twitter.com/SujayKundu777/status/1012601950469160962?ref_src=twsrc%5Etfw">June 29, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<hr />

<h3> Instagram Embed </h3>

<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/BhFTg6uhNRi/" data-instgrm-version="9" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/BhFTg6uhNRi/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Ahmad Ajmi (@ahmadajme)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2018-04-02T21:18:58+00:00">Apr 2, 2018 at 2:18pm PDT</time></p></div></blockquote> <script async defer src="//www.instagram.com/embed.js"></script>

<br/><br/>
