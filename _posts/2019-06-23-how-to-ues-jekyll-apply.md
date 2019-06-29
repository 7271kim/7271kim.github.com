---
title: 나도 GIT블로그 하고싶다.<br/>( 응용편 )
layout: post
summary: 깃 블로그의 테마 Jekyll 응용 
categories: 
    - gitBlog
tags: 
    - difficulty-low: "난이도 하"
pre: "/jekyll/gitblog/2019/06/22/how-to-ues-jekyll-grammer.html"
nex: "/jekyll/gitblog/2019/06/25/how-to-ues-jekyll-summary.html"
author: 김석진
thumbnail: posts/git-blog.jpg
---

### 1. Jekyll 사이트 구조
 <pre>
 .
 ├── _config.yml
 ├── _data
     └── members.yml
 ├── _drafts
     ├── begin-with-the-crazy-ideas.md
     └── on-simplicity-in-technology.md
 ├── _includes
     ├── footer.html
     └── header.html
 ├── _layouts
     ├── default.html
     └── post.html
 ├── _posts
     ├── 2007-10-29-why-every-programmer-should-play-nethack.md
     └── 2009-04-26-barcamp-boston-4-roundup.md
 ├── _sass
     ├── _base.scss
     └── _layout.scss
 ├── _site ( 컴파일 된 후 실제 html 및 css, js, img 등이 여기에 들어가지만.. 서버단에서 일어남으로 이외 폴더만 있음 알아서 자동으로 되는 부분 )
 ├── .jekyll-metadata
 └── index.html # 'index.md' 이어도 되지만 올바른 YAML 머리말이 필요합니다
 
 ** 컴파일 되면
 - _config.yml, --- 3단 대쉬 안 내용 등을 기본 변수로 가지고 있다
 - 각각 posts 파일에 존재하는 tags, category를 YAML형식으로 가지고 있다. > {page.categories}, {page.tags}를 통해 전체 페이지의 태그정보 및 카테고리 정보를 확인할 수있다.
 - 각각 posts 파일에 존재하는 category명 + 파일이름에 따라 페이지  URL 뎁스가 생성된다.
</pre>

<br />
###### <b>_config.yml</b>
- 환경설정 정보 저장 가능 YAML 문법 사용 ( YAML문법은 문법편 확인 ) 
- 종료 후 재시작 전까지 해당 파일은 반영되지 않는다.

<b>변수</b>
<br />
<a href="https://jekyllrb-ko.github.io/docs/variables/" target="_blank">https://jekyllrb-ko.github.io/docs/variables/</a>
- site : 사이트 정보 + _config.yml 의 환경설정 정보
: site.time, site.pages, site.posts, site.related_posts, site.categories.CATEGORY, site.tags.TAG, site.(config.yml에서 설정한 값들)
- page : 페이지 관련 정보 + YAML 머리말 ( 3단 대쉬 안 내용). YAML 머리말에 설정한 사용자 변수
: page.content, page.title, page.url, page.date, page.id, page.categories, page.tags, page.path, page.next, page.previous
- layout : 레이아웃 관련 정보 + YAML 머리말. 레이아웃의 머리말에 설정한 사용자 변수도 여기에 포함된다.
- content : 레이아웃 파일 내, 포스트 또는 페이지로 감싸진 렌더링된 컨텐츠. 포스트나 페이지 파일에는 정의되어 있지 않다.
- paginator :  이 변수는 환경설정 옵션 paginate 가 설정되어 있을 때 사용할 수 있다. 
: <pre>paginate: 5</pre>

<br />
###### <b>index.html or index.md</b>
- Jekyll 은 YAML 머리말 섹션을 가진 모든 파일을 찾아 변환 작업을 수행
- . 위에서 언급하지 않은 다른 디렉토리나 사이트의 루트 디렉토리에 있는 모든 .html,  .markdown, .md, .textile 이 여기에 해당한다.
- Jekyll 은 YAML 머리말 블록을 가진 모든 파일을 특별한 파일로 인식하여 처리합니다. 머리말은 반드시 파일의 맨 첫 부분에 위치해야 하고 시작과 끝을 대시문자 세 개로 감싸서 올바른 YAML 형식으로 작성
<pre>
{% raw %}
    ---
    layout: post
    title: Blogging Like a Hacker
    ---
{% endraw %}
</pre>

- 3개의 대시 문사 사의의 변수들은 해당 파일은 물론 해당 페이지 또는 포스트에 연결된 레이아웃이나 조각파일에서도 Liquid 태그를 사용하여 이 변수들에 접근할 수 있습니다.

<b> 3개의 대시 문사 사의 사전 전역 변수</b>
 - layout : 사용할 레이아웃 파일을 지정한다. 레이아웃 파일명에서 확장자를 제외한 나머지 부분만 입력한다. 레이아웃 파일은 반드시 _layouts 디렉토리에 존재해야 한다.
 - permalink : 생성된 블로그 포스트 URL 을 사이트 전역 스타일(기본설정: /year/month/day/title.html)이 아닌 다른 스타일로 만드려면, 이 변수를 사용하여 최종 URL 을 설정하면 된다.
 - published : 사이트가 생성되었을 때 특정 포스트가 나타나지 않게 하려면 false 로 설정한다.

<b> 포스트의 사전-정의 변수 </b>
 - date : 여기에 지정한 날짜가 포스트 이름에 있는 날짜보다 더 우선순위가 높다. 포스트를 올바르게 정렬하기 위해 사용할 수 있는 기능이다. 날짜 형식은 YYYY-MM-DD HH:MM:SS +/-TTTT 이다; 시간, 분, 초와 타임존 오프셋은 선택사항이다.
 - category : 포스트를 폴더 안에 넣는 대신, 포스트에 하나 또는 여러 개의 카테고리를 지정할 수도 있다. 사이트 생성 작업 중에 이 포스트들은 보통 방식으로 카테고리가 할당된 것과 동일하게 작동한다. 카테고리들(복수형)은 YAML 목록 또는 공백으로 구분된 문자열로 정의한다.
 - categories : [milk, pumpkin pie, eggs, juice]
 - tags : 카테고리와 비슷하게, 하나 또는 여러 개의 태그를 포스트에 추가할 수 있다. 또한 카테고리처럼, 태그는 YAML 목록 또는 공백으로 구분된 문자열로 정의한다.
 
<br />
###### <b>_includes</b>
- 재사용하기 위한 파일을 담는 디렉토리로서, 필요에 따라 포스트나 레이아웃에 쉽게 삽입할 수 있다.  % include file.ext % 와 같이 Liquid 태그를 사용하면 _includes/file.ext 파일에 담긴 코드가 삽입된다.


<br />
###### <b>_layouts</b>
- 포스트를 포장할 때 사용하는 템플릿이다. 
- {% raw %}{{ content }}{% endraw %} 와 같이 Liquid 태그를 사용하면 페이지에 컨텐츠가 주입된다.

<br />
###### <b>_posts</b>
- 한마디로 말하면, 당신의 컨텐츠다. 중요한 것은 파일들의 명명규칙인데, 반드시 이 형식을 따라야 한다.
- YEAR-MONTH-DAY-title.MARKUP
- 고유주소는 포스트 별로 각각 정의할 수 있지만(permalink변수 이용), 날짜와 마크업 언어 종류는 오로지 파일명에 의해 결정된다.

<br />
### 2. 해당 테마 분석
<br />
###### <b>index.md</b>
<pre>
{% raw %}
---
layout: blog
title: Blog
---
{% endraw %}
</pre>

<br />
###### <b>_layouts/blog.html</b>
<pre>
{% raw %}
--- 
layout: default 
---

{% endraw %}
</pre>


<br />
###### <b>_layouts/default.html</b>
<pre>
{% raw %}
<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "tt" }}">
{%- include head.html -%}
&lt;body>
    &lt;div class="container-fluid">
        {%- include header.html -%}
        &lt;div class="col-lg-12">
            {{ content }}
        &lt;/div>
        {%- include footer.html -%}
    &lt;/div>
&lt;/body>
</html>
{% endraw %}
</pre>
- Liqued 문법으로 header, footer 인클루드 
- {% raw %}{{ content }}{% endraw %} 해당 안에 불러온 해당 dealut.html을 불러온 html이 삽입된다.

<br />
### 3. 기본 설정
<br />
###### <b>상단 네비 위치 설정</b>
- _config.yml에 하단 내용 추가

<pre>

header_pages: 
 - "index.md"
 - "categories/all.md"
 
 머릿말 영역에 title: 해당 부분이 존재해야 등장한다.
 </pre>
 
 <br />
###### <b>home 우측 자기소개 영역</b>
- _config.yml에 하단 내용 추가

<pre>
intro: "자기소개 내용"
</pre>

<br />
###### <b>카테고리 한글화 ( 필자가 커스텀 )</b>
- _config.yml에 하단 내용 추가

<pre>
카테고리(영문): 한글
categories_korea: 
 - "jekyll": "지킬 테마"
 - "gitBlog": "깃 블로그"
</pre>

<br />
###### <b>태그 한글화 ( 필자가 커스텀 )</b>
- posts 파일 안 3단 대쉬에 tags 내용 추가 

<pre>
url경로: 한글명
tags: 
    - difficulty-low: "난이도 하"
</pre>

<br />
<div id="paging"></div>
### 4. 페이지 네비게이션 설정 ( Main쪽 )
<br />
###### <b>jekyll-paginate-v2 설치 => jekyll-paginate으로 변경</b>
- cmd > gem install jekyll-paginate-v2 > gem install jekyll-paginate
- jekyll-paginate-v2 는  GitHub Pages 에서는 이 플러그인을 지원하지 않는다.

###### <b>root 경로 Gemfile에 추가</b>
- gem "jekyll-paginate-v2" => gem "jekyll-paginate"

###### <b>Gemfile 추가한 부분 의존성 주입</b>
- Root 폴더 경로 cmd >bundle install 

###### <b>_config.yml 설정 추가</b>
<pre>
plugins: 
    - jekyll-paginate-v2
pagination:
  enabled: true
  per_page: 1
  permalink: '/page/:num/' #네이게이션 다음 누를시 가는 경로
  title: ' - page :num'
  limit: 0
  sort_field: 'date'
  sort_reverse: true
  
  변경 
  
plugins:
  - jekyll-paginate # 플러그인 사용을 의미한다.(Jekyll 3)
    # pagination settings
paginate: 10 # 한 페이지당 보여줄 posts 수
    # :num은 페이지마다 번호를 각각 부여한다.
paginate_path: "/page/:num" # 다음 페이지에 해당하는 URL
</pre>

###### <b>index.md 페이지 네비 추가 => 해당부분 index.html로 변경해야 가능</b>
<pre>
layout: blog
title: Home
pagination: 
  enabled: true
  
  해당 부분 필요없어짐
</pre>

###### <b>각각의 카테고리 md에 페이지 네비 추가</b>
<pre>
layout: page
permalink: /blog/categories/gitBlog
title: 깃 블로그
pagination:
  enabled: true
  per_page: 1
  permalink: '/page/:num/' #네이게이션 다음 누를시 가는 경로
  title: ' - page :num'
  limit: 0
  sort_field: 'date'
  sort_reverse: true
  trail: 
    before: 2
    after: 2

해당 부분 필요없어짐
</pre>

###### <b>blog.html 레이아웃 수정 및 pagination.html 생성</b>
<pre>
site.posts => paginator.posts

인클루드 폴더 pagination.html 세팅 
{% raw %}
{% if paginator.total_pages > 1 %}
  &lt;div class='pagination'>
    {% if paginator.previous_page %}
      &lt;a href="{{ paginator.previous_page_path | prepend: site.baseurl }}">
        &laquo; Prev
      &lt;/a>
    {% else %}
      &lt;span>&laquo; Prev&lt;/span>
    {% endif %}

    {% if paginator.page_trail %}
      {% for trail in paginator.page_trail %}
        &lt;span {% if paginator.page  == trail.num %} class="pagination-selected" {% endif %}>
          &lt;a href="{{ trail.path | prepend: site.baseurl }}" title="{{ trail.title }}">
            {{ trail.num }}
          &lt;/a>
        &lt;/span>
      {% endfor %}
    {% endif %}

    {% if paginator.next_page %}
      &lt;a href="{{ paginator.next_page_path | prepend: site.baseurl }}">
        Next &raquo;
      &lt;/a>
    {% else %}
      &lt;span>Next &raquo;&lt;/span>
    {% endif %}
  &lt;/div>
  {% endif %}
&lt;/div>

&lt;style lang="scss">
  .pagination {
    margin: auto;
    text-align: center;
    display: block;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 55px 0 25px 0;
    color: #999;
  }
  span.pagination-selected {
    display: inline-block;
    font-size: 1.3rem;
  }
&lt;/style>


해당부분 변경 ( 카카오 네비 사용 )

&lt;ul id="pagination" role="navigation">
    {% if paginator %}
        {% if paginator.total_pages &lt;= 5 %}
            {% assign first = 1 %}
            {% assign last = paginator.total_pages %}
        {% else %}
            {% assign first = paginator.page | minus: 2 %}
            {% if first &lt; 1 %}
                {% assign first = 1 %}
            {% endif %}
            {% assign last = first | plus: 4 %}
            {% if last > paginator.total_pages %}
                {% assign last = paginator.total_pages %}
            {% endif %}
        {% endif %}
        {% if paginator.previous_page %}
            &lt;li id="page-prev">&lt;a href="{{ site.baseurl }}{{ paginator.previous_page_path }}">&lt;span class="sr-only">Previous Page&lt;/span>&lt;/a>
            &lt;/li>
        {% else %}
            &lt;li id="page-prev" class="disabled">&lt;span class="sr-only">No Previous Page&lt;/span>&lt;/li>
        {% endif %}
        {% for p in (first..last) %}
            {% if p == paginator.page %}
                &lt;li class="page-number active">{{ p }}&lt;/li>
                {% elsif p == 1 %}
                &lt;li class="page-number">&lt;a href="{{ site.baseurl }}/">{{ p }}&lt;/a>&lt;/li>
            {% else %}
                &lt;li class="page-number">&lt;a
                            href="{{ site.baseurl }}{{ site.paginate_path | replace: ':num', p }}">{{ p }}&lt;/a>&lt;/li>
            {% endif %}
        {% endfor %}
        {% if paginator.next_page %}
            &lt;li id="page-next">&lt;a href="{{ site.baseurl }}{{ paginator.next_page_path }}">&lt;span class="sr-only">Next Page&lt;/span>&lt;/a>
            &lt;/li>
        {% else %}
            &lt;li id="page-next" class="disabled">&lt;span class="sr-only">No Next Page&lt;/span>&lt;/li>
        {% endif %}
    {% endif %}
&lt;/ul>

&lt;style lang="scss">
    #pagination {
        margin: 0;
        padding: 33px 0;
        text-align: center;
    }
    
    #pagination > li {
        list-style: none;
        display: inline-block;
        height: 20px;
        width: 20px;
        color: #1e1e1e;
        font-size: 14px;
        line-height: 18px; /* 18px = 20(height) - 2(border) */
        vertical-align: middle;
    }
    
    /* pagination */
    
    #pagination > li + li {
        margin-left: 10px;
    }
    
    #pagination > li.active, #pagination > li:hover {
        background-color: #e6e6e6;
        border-radius: 4px;
    }
    
    #pagination > li > a {
        color: #1e1e1e;
        width: 100%;
        height: 100%;
        display:block;
    }
    
    #page-prev {
        background: url(/assets/img/icon_pre.png) no-repeat center;
        background-size: 6px 11px;
    }
    
    #page-next {
        background: url(/assets/img/icon_next.png) no-repeat center;
        background-size: 6px 11px;
    }
&lt;/style>
{% endraw %}
</pre>
<br />

