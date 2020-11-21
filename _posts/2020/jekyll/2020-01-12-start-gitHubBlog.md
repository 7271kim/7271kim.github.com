---
title: GitHub 블로그 시작하기
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
popular: true
categories:
- Jekyll
toc: true
toc_sticky: true
toc_label: 목차
description: 깃 블로그 하는 방법을 기술하고 깃 블로그란 무엇인지  GitBlog와 Jekyll란 무엇인지 또한  로컬 개발 환경을 위한 루비설치를 어떻게 하는지 _config.yml 세팅 등 깃 블로그를 처음 시작할때 겪었던 어려움을 극복하는 페이지
article_tag1: GitHub(GitBlog) 블로그
article_tag2: minimal-mistakes
article_tag3: Jekyll
article_section: 깃 블로그 따라하기
meta_keywords: 깃블로그,GitBlog,GitHub블로그,minimal-mistakes,Jekyll
last_modified_at: 2020-01-23T00:00:00+08:00
---

기존에 하던 깃 블로그에서 모바일 구간 깨지는 이슈를 수정하고 디자인적인 아쉬움을 보완하고자  하였습니다.
또한 GitBlog 새로운 테마를 세팅하면서 겪었던 어려움을 공유하고 누구나 바로 Github 블로그에 자신의 글을 쉽게 올릴 수 있도록 글을 공유합니다.

## Step 1:  깃 블로그란
깃 블로그란  Github 저장소에 저장된 html 파일과 같은 정적 웹 문서들을 GitHub에서 무료로 웹에서 볼 수 있도록 호스팅 서비스를 제공해 주는 것입니다. 
때문에 Github을 이용하는 사용자들은 **누구나 고유의 정적 웹 사이트 1개를 가질 수 있습니다.** 계정이 없다면 [Github]({{ "https://github.com/" }}){:target="_blank"} 에서 Github계정 생성합니다.
계정을 만들고 신규 Repository를 **{Git ID}.github.com** 으로 세팅합니다. 

**Please Note:** 해당 포스트는 어느 정도 깃의 사용법을 알고 있다는 가정하에 작성하였습니다.
{: .notice--danger}

![Git repository 신규 생성 이미지]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/create-repository.png){: .align-center .open-new}

정상적으로 생성되었다면 세팅 메뉴 중 하단 GitHub Pages가 그림과 같이 활성화되어있을 것입니다.
<br /> https://github.com/{ Git ID }/{ Repository 이름 }/settings <br />

![Git repository Setting 확인]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/settings-1.png){: .align-center .open-new}

![Git repository Setting 확인]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/settings-2.png){: .align-center .open-new}

위 그림과 같이 정상적으로 반영 되었다면 https://{ Git ID }.github.io/ URL 접근 가능합니다.

## Step 2: GitBlog와 Jekyll

이러한 Github page에 Jekyll을 결합한다면 좀 더 생산적이고 강력한 블로그를 만들 수 있습니다. Jekyll이란 HTML(.html), Markdown(.md) 등 다양한 포맷의 텍스트들을 읽고 가공하여 자신의 웹 사이트에 바로 게시할 수 있게 해주는 Rubby언어로 만들어진 하나의 **텍스트 변환 엔진**이라고 보면 됩니다. 쉽게 말해 html을 모르더라도 공부하기 비교적 수월한 markdown 파일을 작성하면 알아서 html파일로 변환되어 웹 서비스를 구축해 준다고 생각하면 됩니다. 지킬을 사용하여 게시글을 작성한다면 웹 사이트를 효율적으로 구성할 수 있습니다. Jekyll은 Github의 내부 엔진이기 때문에 Github page에서도 자연스럽게 동작합니다. 감사하게도 이러한 jekyll을 가지고 사용자들이 다양한 테마를 미리 만들고 공유하여 디자인에 대해 깊은 고민은 하지 않게 해주었습니다. 주소는 아래와 같습니다.<br>
<br>
[http://jekyllthemes.org/]({{"http://jekyllthemes.org/"}}){:target="_blank"}<br>
[http://themes.jekyllrc.org/]({{"http://themes.jekyllrc.org/"}}){:target="_blank"}<br>
[https://jekyllthemes.io/]({{"https://jekyllthemes.io/"}}){:target="_blank"}<br>
<br>
필자의 선택은 꾸준한 업데이트가 강점인 [https://github.com/mmistakes/minimal-mistakes]({{"https://github.com/mmistakes/minimal-mistakes"}}){:target="_blank"}테마를 선택하였습니다. ReadMe.md파일 안에 해당 테마에 대한 자세한 사용 방법이 기술되어 있습니다.<br>
테마를 Fork뜨거나 Download합니다.  필자는 Fork시 GitHub 녹색 잔디가 심어지지 않아 다운로드 후  작업하였습니다. 

![Fork확인]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/fork.png){: .align-center .open-new}

다운로드한 minimal-mistakes테마 Zip파일을 Step1에서 생성한 Repository하위에서 압축 해제합니다. 왼쪽 이미지는 압축해제한 파일 이고, 
우측 이미지는 모든 build 및 과정이 끝났을 때 Repository에 push 했을 때 최종 파일입니다.

![최종 폴더구조]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/structure.png){: .align-center .open-new}

## Step 3: 로컬 개발 환경을 위한 루비설치

Jekyll은 하나의 동적 객체 지향 스크립트 프로그래밍 언어인 Ruby로 작성되었기 때문에 로컬 개발 환경 세팅을 위해서는 Rubby 설치가 필요합니다. 필자는[ https://rubyinstaller.org/downloads/ ]({{" https://rubyinstaller.org/downloads/ "}}){:target="_blank"}해당 사이트에서 2.5.7 버전으로 받아 설치하였습니다. 이제 minimal-mistakes테마를 다운받고 압축해제 하였던 폴더 위치로 이동합니다. 이 후 cmd창을 열어 아래 명령어를 차례로 실행합니다. 꼭 **Gemfile**이 있는 위치에서 실행하여야 합니다.

![최종 폴더구조]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/structure-2.png){: .align-center .open-new} 
 

```java

# gem install bundler
# bundle 
# jekyll serve

```

![Ruby Setting 확인]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/console.png){: .align-center .open-new}

정상적으로 설치가 되었다면 이제 [http://localhost:4000/ ]({{"http://localhost:4000/"}}){:target="_blank"}으로 해당 테마를 확인할 수 있습니다.

![로컬서버]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/start-mini.png){: .align-center .open-new}

**Please Note:** Rubby 버전에 따라 안되는 케이스가 발생하여 2.5.7로 진행하였습니다. 로컬 서버 포트를 4000에서 다른것으로 바꾸고 싶다면 # jekyll serve --port {원하는 포트 번호} 명령어로 서버를 실행하면 됩니다.
{: .notice--danger}

**Tip:** 기존 로비가 설치되어있고 플러그인 의존성 이슈가 발생하여 특정 버전은 안된다고 나온다면 아래와 같은 명령어로 전체 삭제 후 플러그인 재설치를 해주면 됩니다. <br>
**# gem uninstall -aIx ( 설치된 플러그인 전체 삭제 명령어 )**<br>
**# gem uninstall { 충돌한 플러그인 명 } ( 특정 플러그인 삭제 명령어  )**<br>
{: .notice--info}

이제 Git에 push를 진행하기 전에 압축 해제한 파일 중 불필요한 파일들을 삭제하겠습니다. 
```
.github
test
.editorconfig
.gitattributes
.travis.yml
CHANGELOG.md
docs( 샘플 파일들이 들어가 있는  폴더로 우선 나중을 위해 다른 곳으로 옮겨줍니다. )
```
push를 진행하면 이제 https://{GitID}.github.io 주소로 같은 화면을 볼 수 있습니다. 

## Step 4: Sample 게시물 확인
이전에 이동했덩 docs폴더안 _post폴더를  우리 _post에 덮어 씌운 후  jekyll 서버를 재시작 합니다.  그렇다면 이제   [http://localhost:4000/ ]({{"http://localhost:4000/"}}){:target="_blank"}에서  블로그 게시물 디자인에 참고할 만한  다양한 샘플 포스트를 확인할 수 있습니다.
![Ruby Setting 확인]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/sample-post.png){: .align-center .open-new}

블로그 게시물에 대한 네이밍 규칙은 YEAR-MONTH-DAY-title.md입니다. 추후 _post폴더 아래에 게시물을 작성할 때 해당 형식을 지켜 작성해야합니다. 

**Please Note** <br>
필자는 블로그 페이지 작성이 목적이라  .md파일 작성법 및  Jekyll에 대해 깊게 포스팅 하지 않겠습니다.  .yml로 된 파일이나  .md 같은 markdown언어에 대해서 공부하고 싶을 경우를 대비하여 공식 사이트 주소는 남겨드리겠습니다. <br> 
YAML :  [ https://yaml.org/ ]({{" https://yaml.org/"}}){:target="_blank"} <br>
Liquid 문법 : [https://shopify.github.io/liquid/ ]({{"https://shopify.github.io/liquid/"}}){:target="_blank"} <br>
Jekyll 폴더구조 :  [https://jekyllrb-ko.github.io/docs/structure/ ]({{"https://jekyllrb-ko.github.io/docs/structure/"}}){:target="_blank"} <br>
{: .notice--info}

 
```java

# gem install bundler
# bundle 
# jekyll serve

```

## Step 5: 프로젝트 세팅
### _config.yml 수정

지킬 테마에서 자신의 블로그 페이지에 맞게 커스텀 하기위해 _config.yml 을 수정하였습니다.  웹에대한 기본 지식이 있다면 어디를 수정하면 어디가 반영 될 지 직관적으로 알 수 있게 되어있습니다.  꼭 수정해 주어야 하는 부분만 포스팅 하고 이 외 수정한 부분은 아래 주소에서 확인하시기 바랍니다.
[https://github.com/7271kim/7271kim.github.com/blob/master/_config.yml]({{"https://github.com/7271kim/7271kim.github.com/blob/master/_config.yml"}}){:target="_blank"} 

```java


minimal_mistakes_skin    : "default" # 태마 색 설정 "air", "aqua", "contrast", "dark", "dirt", "neon", "mint", "plum", "sunrise" 

# Site Settings
locale                   : "ko-KR"
title                    : "JAVA Blog" # Meta 태그에 들어가는 영역 , masthead_title등이 없으면 기본값으로 나온다.
title_separator          : "&#124;" # 타이틀 사이 구분자 <title>Welcome to Jekyll | Minimal Mistakes</title> 해당 형식으로 들어갑니다.
subtitle                 : "Version 1.0" # 타이틀 아래에 나올 작은 글씨 
name                     : "김석진" # 맨 하단 이름 찍히는 영역
description              : "JAVA와 Spring Boot 혹은 Sever등 다양한 개발을 공부하는 블로그" # Meta 태그에 들어가는 영역 
url                      : "https://7271kim.github.io/" # GitBlog 호스트 주소
baseurl                  : # subPath https://7271kim.github.io/blog라고 하고 싶을 시 "/blog" 라고 적는다.
repository               : "7271kim/7271kim.github.com" # GitHub username/repo-name  
teaser                   : # "/assets/images/senior-couple-4723737_640.jpg" # 홈페이지 기본 티져 이미지
logo                     : # 타이틀 옆에 작게 들어갈 이미지.
masthead_title           : "기록하는 개발자 Blog" # 홈페이지 최 상탄에 들어갈 타이틀
breadcrumbs              : true # 브래드크럼 사용 여부 true, false (default) , _data/ui-text.yml에 다국어 지원 가능합니다.
words_per_minute         : 200 # 해당 포스트 읽는데 걸리는 시간을 계산하기 위해 대락 분당 읽는 수가 몇글자가 될지 적는 공간.

# Site Author
author:
  name             : "김석진" 
  avatar           : "/assets/images/profile/poto.jpg" # 프로필 이미지
  bio              : "꾸준히 공부하는 개발자입니다. <br> 블로그 포스트 글에서 잘못된 부분이나 수정했으면 하는 부분, 적극적으로 댓글 남겨주신다면 감사하겠습니다."
  location         : "Republic of Korea"
  email            : "7271kim@naver.com"
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      #url: mailto:7271kim@naver.com
    - label: "Website"
      icon: "fas fa-fw fa-link"
      url: "http://honbabzone.com/"
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      # url: "https://twitter.com/"
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
      url: "https://www.facebook.com/seokjin.kim.16"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/7271kim"
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      # url: "https://instagram.com/"

# Site Footer
footer:
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      url: mailto:7271kim@naver.com
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      # url:
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
      url: "https://www.facebook.com/seokjin.kim.16"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/7271kim"
    - label: "GitLab"
      icon: "fab fa-fw fa-gitlab"
      # url:
    - label: "Bitbucket"
      icon: "fab fa-fw fa-bitbucket"
      # url:
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      # url:

# Defaults Post들에 적용될 기본 설정들
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: true
      share: true
      related: true
  
  # _pages
  - scope:
      path: "_pages"
      type: pages
    values:
      layout: single
      author_profile: true

```

**Tip:** config.yml  설정에 대한 공식 사이트<br>
[https://mmistakes.github.io/minimal-mistakes/docs/configuration/ ]({{"https://mmistakes.github.io/minimal-mistakes/docs/configuration/"}}){:target="_blank"} 
{: .notice--info}


### navigation 설정
기본 파일은 상단 네비게이션 설정이 되어있지 않습니다. _data/navigation.yml, _config.yml 파일, _pages를 수정하여  Categories, Tag, About이 노출되도록 해보겠습니다.

#### _data/navigation.yml 수정
원하는 네비게이션 url을 설정해 줍니다. http://naver.com과 같이 상대경로가 아닌 절대경로도 가능합니다. 
[https://github.com/7271kim/7271kim.github.com/blob/master/_data/navigation.yml]({{"https://github.com/7271kim/7271kim.github.com/blob/master/_data/navigation.yml"}}){:target="_blank"}

```java
main:
  - title: "Categories"
    url: /categories/
  - title: "Tags"
    url: /tags/
  - title: "About"
    url: /about/
  - title: "연도별 포스트"
    url: /posts/
```

####   _pages 폴더  및 필요한 .md파일 생성
이제 카테고리, 테그, about 등 필요한 페이지 정보들을 삽입합니다. 요약해서 말하면 permalink에 쓰여진 url로 요청이 들어오면 layout에 지정된 즉 _layout에 존재하는 {파일명}.html을 불러와 삽입합니다.
[https://github.com/7271kim/7271kim.github.com/tree/master/_pages]({{"https://github.com/7271kim/7271kim.github.com/tree/master/_pages"}}){:target="_blank"} <br>
<br>
**category-archive.md에 대한 예시**

```java
---
title: "Posts by Category"
layout: categories
permalink: /categories/
author_profile: true
---

```

####  _config.yml 수정
하단 defaults: 부분에 _pages 부분을 추가합니다. 
[https://github.com/7271kim/7271kim.github.com/blob/master/_config.yml]({{"https://github.com/7271kim/7271kim.github.com/blob/master/_config.yml"}}){:target="_blank"} 

```java
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: true
      share: true
      related: true
  
  # _pages
  - scope:
      path: "_pages"
      type: pages
    values:
      layout: single
      author_profile: true
```

### js 빌드를 위한 설정
minimal-mistakes 테마의 경우 node.js를 이용하여 js를 쉽게 minify하거나 원하는 js 플러그인들을 하나의 파일로 합칠 수 있습니다. Node.js를 이용하고 싶지 않을 경우 assets/js/main.min.js에 원하는 스크립트 부분을 추가하면 됩니다. 필자는 Node.js까지 설치하고 /assets/js/custom/custom.js로 추가적인 js 파일을 만들고 템플릿에서 사용할 js를 여기에 집어 넣겠습니다.

#### Node.js 설치
[https://nodejs.org/en/]({{"https://nodejs.org/en/"}}){:target="_blank"} 해당 사이트에서 Node.js 12.14.0 버전을 다운로드 후 인스톨합니다. 

#### package.json 수정
개발환경은 minify 옵션을 제거하고 파일만 합친 형태로 진행하고 배포시에 minify옵션을 설정하도록 세팅 진행하겠습니다. <br>
[https://github.com/7271kim/7271kim.github.com/blob/master/package.json]({{"https://github.com/7271kim/7271kim.github.com/blob/master/package.json"}}){:target="_blank"} <br>

① devDependencies안에 해당 내용을 추가합니다.
```java
"concat": "^1.0.3"
```

② scripts에 하위 내용 추가 
```
"watchDev:js": "onchange \"assets/js/**/*.js\" -e \"assets/js/main.min.js\" -- npm run buildDev:js",
"concat-js": "concat -o assets/js/main.min.js (요약)... assets/js/custom/custom.js(추가부분)",
"buildDev:js": "npm run concat-js && npm run add-banner"
"uglify": "uglifyjs (요약)... assets/js/custom/custom.js -c -m -o assets/js/main.min.js(추가 부분)",
```

#### cmd창에서 명령어 실행
package.json이 존재하는 위치에서 해당 명령어를 실행 하면 현재 /assets/js/ 아래에 있는 js파일들이 main.min.js에 합쳐서 나옵니다. uglifyjs 옵션에 대해 더 알고자 한다면 아래 문서를 참고하시면 됩니다.
[http://fibjs.org/ko/docs/awesome/module/uglify-js.md.html]({{"http://fibjs.org/ko/docs/awesome/module/uglify-js.md.html"}}){:target="_blank"}

```
# npm install
```
**개발시**
```
# npm run watchDev:js
```
**배포시**
```
# npm run build:js
```

### SCSS설정
scss문법을 설명하지 않겠습니다. 다만 "/_sass/custom" 위치에 원하는 폴더 및 SCSS파일을 만들고 /_sass/minimal-mistakes.scss 파일 하단에 @import "custom/_cunstomcss"; 같이 작성 한다면 자동으로 컴파일하여 _site/assets/css/main.css으로 들어가게 됩니다.
[https://github.com/7271kim/7271kim.github.com/blob/master/_sass/minimal-mistakes.scss]({{"https://github.com/7271kim/7271kim.github.com/blob/master/_sass/minimal-mistakes.scss"}}){:target="_blank"} 
```css
/* Custom */
@import "custom/_cunstomcss";
```

## Step 6: Admin 세팅
게시글을  md문법으로 작성하면 되지만 뭔가 불편하여 찾아보니 admin페이지를 통해 쉽게 게시글을 작성할 수 있다는 것을 알게 되어 방법을 공유합니다. 세팅하는 방법은 간단합니다. Gemfile파일 안에 해당 부분을 작성합니다. 
[https://github.com/7271kim/7271kim.github.com/blob/master/Gemfile]({{"https://github.com/7271kim/7271kim.github.com/blob/master/Gemfile"}}){:target="_blank"}
```
gem 'jekyll-admin', group: :jekyll_plugins
```
cmd창에서 해당 명령어 실행합니다.
```
# bundle install
# jekyll serve 
```
이제  [http://localhost:4000/admin/]({{"http://localhost:4000/admin/"}}){:target="_blank"} 으로 접근 가능하며 게시물을 쉽게 작성하고 수정할 수 있습니다.

![admin Setting 확인]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/admin.png){: .align-center .open-new}

## Step 7: 도메인 연결
구매한 도메인이 있어 http://{깃헙id}.github.io/ 형식이 아닌 자신이 구매한 도메인으로 연결하는 방법을 공유하겠습니다. 우선 자신 Repository의 Settings로 접속합니다. ( https://github.com/{깃헙 id}/{Repository}/settings) 이제 중반 GitHub Pages 옵션 중 Custom domain부분에 자신이 구매한 Domain주소를 작성합니다.
![도메인 연결]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/domain.png){: .align-center .open-new}
이미지 중 Custom domain 옆 [Learn more]({{"https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site"}}){:target="_blank"}을 눌러보면  관련된 정보를 획득할 수 있습니다. 이 중  [Managing a custom domain for your GitHub Pages site]({{"https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site"}}){:target="_blank"} 내용 중  중반 ALIAS설정하는 방법이 나와있습니다.
![admin Setting 확인]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/alias.png){: .align-center .open-new}
해당 A 레코드를  도메인을 구매한 사이트에 세팅해줍니다. 필자는 가비아를 사용하여 해당과 같이 수정진행 하였습니다. 
![가비아 Setting 확인]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/gabia.png){: .align-center .open-new}

## Step 8: MakerWidget 및 Disqus 세팅
필자 블로그 우측 하단에 떠있는 위젯과 댓글을 위한 Disqus세팅방법을 공유하겠습니다. 

### MakerWidget 세팅
[https://makerwidget.com]({{"https://makerwidget.com"}}){:target="_blank"}에서 회원 가입을 진행합니다. 이후 LINK LISTS , PROJECTS등 원하는 부분을 작성하고 SAVE합니다. 
![MakerWidget 세팅]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/marker-widget.png){: .align-center .open-new}
최종적으로 저장 후 EMBED WIDGET을 확인합니다. 
![MakerWidget 세팅]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/marker-widget2.png){: .align-center .open-new}
해당 스크립트를 프로젝트 js에 적어주시면 바로 적용됩니다. 

### Disqus 세팅
게시물에 댓글을 달 수있게 기능을 제공하는 Disqus는 유로인 경우도 있지만 무료서비스 중 Non-Commercial(Under 5,000 total daily pageviews)로 선택한다면 무료로 사용 가능합니다. 우선 
[https://disqus.com/]({{"https://disqus.com/"}}){:target="_blank"}에서 회원가입을 진행합니다.
![DisQue 세팅]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/disque.png){: .align-center .open-new}
![DisQue 세팅]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/disque2.png){: .align-center .open-new}
![DisQue 세팅]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/disque3.png){: .align-center .open-new}
![DisQue 세팅]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/disque4.png){: .align-center .open-new}

회원가입이 완료되셨다면  이제 _config.yml을 수정해 줍니다.  provider에  disqus를 추가해주고  shortname에  가입시 작성하였던 Website Name을 적어주시면 됩니다.

[https://github.com/7271kim/7271kim.github.com/blob/master/_config.yml]({{"https://github.com/7271kim/7271kim.github.com/blob/master/_config.yml"}}){:target="_blank"} 

```
# 댓글 관련 부분
comments:
  provider               : "disqus" # false (default), "disqus", "discourse", "facebook", "staticman", "staticman_v2", "utterances", "custom"
  disqus:
    shortname            : 7271kim # https://help.disqus.com/customer/portal/articles/466208-what-s-a-shortname-
		
```

![DisQue 세팅]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/disque5.png){: .align-center .open-new}

## Step 9: 구글 검색 가능하게 하기
게시글에 대해 구글 검색이 가능하게 하고 싶다면 [Google Search Console]({{"https://search.google.com/search-console/about?hl=ko&utm_source=wmx&utm_medium=wmx-welcome"}}){:target="_blank"}을 통해 등록을  진행해야 합니다.  좌측은 구매한 도메인이 있을때 사용하며 하나의 도메인 등록을 통해 모든 서브도메인을 통합 관리하는 방식입니다. 우측(URL prefix)은 일반적인 GitBlog일 때입니다. 우선 우측 URL prefix 방식을 통해 먼저 진행하겠습니다. URL에  http://7271kim.github.io/ 통째로 적습니다.
![Google세팅]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/google-regist.png){: .align-center .open-new}
![Google세팅]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/google-regist2.png){: .align-center .open-new}

이제 블로그 도메인에 대한 소유권 인증을 진행해야 합니다. 사이트에 소유권자만이 구글 검색에 대해 허가를 내줄 수 있기 때문입니다. 소유권 확인을 위한 html파일을 다운로드 한 후 index.html페이지 위치에 올린 후 push합니다. 정상적으로 push가 되었다면 이제 Verify 혹은 확인 버튼을 클릭하여 소유권 인증을 마무리합니다. 아직은 아무 정보가 없어 웹사이트 유입현황이나 정보를 취득하지 못합니다. 물론 검색도 되지 않습니다. 구글 검색 엔진이 웹사이트를 읽어가는 작업이 진행되어야 검색이 노출되는데 이를 크롤링이라 합니다. 정상적인 크롤링을 위해서는 sitemap.xml과 robots.txt이 필요합니다. 

**sitemap.xml**<br>
sitemap.xml은 웹사이트 내 모든 페이지의 목록을 나열한 파일로 책의 목차와 같은 역할<br>
 robots.txt 파일과는 달리 sitemap.xml 파일은 꼭 루트 디렉토리에 위치하지 않아도 된다.<br><br>
**robots.txt**<br>
검색 엔진 크롤러에서 사이트에 요청할 수 있거나 요청할 수 없는 페이지 설정하는 부분 및 제어하는 부분<br>
검색 로봇들에게 웹사이트의 사이트맵이 어디 있는지 알려주는 역할<br>
항상 root 폴더에 위치해 /robots.txt를 입력하면 확인 가능<br>
sitemap.xml은 정해진 양식으로 제작되어야 하고, 이 양식은 대한민국 뿐 아니라 전 세계적으로 약속된 방식<br>
{: .notice--info}

### sitemap.xml 생성
sitemap.xml을 수동으로 작성하기보단 jekyll-sitemap 플러그인 통해서 관리하는 방법을 알아보겠습니다. 우선 Gemfile에 하단부분을 적어줍니다. 
[https://github.com/7271kim/7271kim.github.com/blob/master/Gemfile]({{"https://github.com/7271kim/7271kim.github.com/blob/master/Gemfile"}}){:target="_blank"}
```
gem 'jekyll-sitemap'
```
이제 cmd창에서 bundle install 명령어를 통해 플러그인 설치를 진행하고 서버를 시작합니다.
```
# bundle install
# jekyll serve
```
정상적으로 설치가 되었다면 아래와 같이 접근 가능합니다. <br>
[http://localhost:4000/sitemap.xml]({{"http://localhost:4000/sitemap.xml"}}){:target="_blank"}<br>
플러그인이 자동으로 페이지에 있는 모든 정보를 가지고 와 sitemap을 만들어 줍니다.

### robots.txt 생성
이제 index.html위치에 robots.txt파일을 생성하고 아래에 내용을 작성합니다.
[https://github.com/7271kim/7271kim.github.com/blob/master/robots.txt]({{"https://github.com/7271kim/7271kim.github.com/blob/master/robots.txt"}}){:target="_blank"}
```
User-agent: *
Allow: /

Sitemap: https://7271kim.github.io/sitemap.xml
```

모든 웹사이트 콘텐츠에 대한 모든 웹 클롤러의 접근을 차단<br>
User-agent: *<br>
Disallow: /<br><br>
만약 구글 로봇만 차단시키고 싶다면 User-agent에 * 부분을 Googlebot으로 변경하여 설정<br>
User-agent: Yeti<br>
Disallow: /hello/<br><br>
이렇게 설정하면 웹사이트의 모든 콘텐츠의 네이버 검색로봇의 크롤링을 허용하되, /hello/  디렉토리 안의 페이지에 대한 접근만 차단한다는 의미
{: .notice--info}

### Google에 sitemap.xml등록 
 [Google Search Console]({{"https://search.google.com/search-console"}}){:target="_blank"}페이지 메뉴 중 sitemaps에 들어가서 생성한 sitemap.xml을 제출합니다. 
![Google세팅]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/google-regist6.png){: .align-center .open-new} 

**Please Note:** sitemap까지 등록되었다면 검색 노출까지 일주일 정도 기간이 걸린다고 합니다.
{: .notice--danger}

이제 좌측 도메인 등록방법을 설명하겠습니다.  http를 제외한 도메인 주소를 작성합니다. 필자의 도메인 주소인 honbabzone.com을 적어준 후 TXT를 얻습니다.<br><br>
![Google세팅]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/google-regist3.png){: .align-center .open-new}<br>
![Google세팅]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/google-regist4.png){: .align-center .open-new}<br>

해당 텍스트를 도메인 설정에 등록합니다. 
![Google세팅]({{ site.url }}{{ site.baseurl }}/assets/images/post/jekyll/google-regist5.png){: .align-center .open-new}

10분정도 시간이 지난 후 도메인 소유권 확인을 누르면 도메인 인증이 됩니다.

이상으로 블로그를 처음 시작하시는 분들에게 도움이 되었길 바라며 GitBlog 시작하기에 대한 포스팅을 마치겠습니다. 감사합니다.
{: .notice--info}