---
title: 나도 GIT블로그 하고싶다.<br/>( 세팅편 )
layout: post
summary: 깃 블로그를 세팅하면서 겪었던 어려운 점
categories: 
    - gitBlog
tags: 
    - difficulty-low: "난이도 하"
nex: "/gitblog/2019/06/22/how-to-ues-jekyll-grammer.html"
author: 김석진
thumbnail: posts/git-blog.jpg
---
# <br/>
남들 다 하는 기술 블로그에 관심을 두지 않고  WORD! WORD!!!로만 정리하던 개발자..<br/>
이제는 남들 다 하는 GIT블로그를 해보자! 
<br/><br/>
### 1. 無념無상
- 제일 처음 드는 의문. https://github.com/으로 계정을 로그인 할 수 있지만 github에서 블로그를 할 수 있도록 도메인도 연결해 준단 말인가!
<br/><br/>
`그러하다.
세팅만 잘 한다면 계정 1개당 1개씩 도메인 https://(자기 계정 아이디).github.io으로 기본 제공해준다. 
( 이를 잘 꾸며 놓으면 나 블로그 한다.. 라고 할 수 있다. )`

<br/>
### 2. 개발을 위한 로컬 환경 세팅.
- 루비 버전 2.2.5 또는 그 이상.
- <a href="https://rubyinstaller.org/" target="_blank">https://rubyinstaller.org/</a> 다운로드 및 설치
- git 명령어를 위해 git 설치 위치인 git/bin 환경 변수 세팅 <br>
( 필자의 경우 git 위치가 C:\Program Files\Git\bin 여서 내 PC 우클릭 > 고급 시스템 설정 > 환경변수 > 시스템변수의 path에 해당경로 추가 , 이제 cmd창에 git --version 으로 git 명령어 사용 가능 확인.  )
 
<br/>
### 3. 원하는 jekyll theme Fork 후 초기 세팅 정리
- <a href="http://jekyllthemes.org/" target="_blank">http://jekyllthemes.org/</a> 여기서 원하는  테마 검색
- fork하기 ( 필자의 경우 https://github.com/sujaykundu777/devlopr-jekyll )
- fork시 Repository name 설정 : <b> 7271kim(개인 계정 이름).github.com </b>
: 핵심!!! 개인 계정 이름.github.com 으로 Repository name를 해 놓은다면 레퍼지토리 세팅에 하위 이미지처럼 변해있을 것이다.
<img src="/assets/img/posts/yaml/github.png" class="ratio-100">
- _config.yml 설정 변경 : URL 수정  => url: "7271kim.github.com" 
- 접속확인 : <a href="https://7271kim.github.io/" target="_blank">https://7271kim.github.io/</a>

<br/>
##### 기본 구조 
<a href=" https://jekyllrb-ko.github.io/docs/structure/" target="_blank"> https://jekyllrb-ko.github.io/docs/structure/</a>
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
</pre>

#### # *.md 확장자 명은 Markdown 문법으로 작성된 파일이다.

<br/>
### 4. 로컬 서버 세팅
- fork 뜬 폴더를 clone 후 root페이지에 있는 ReadMe.md를 읽어보고 테마에 맞는 세팅 진행. (아래는 필자가 받은 테마의 세팅법)
- cmd창 => gem install jekyll bundler 으로 기본 Jekyll 설치 
- 해당 템플릿에서 git 명령어를 사용하기 때문에  C:\Program Files\Git\bin git.exe 환경변수 path 세팅
- 템플릿 루트 폴더 > cmd > bundle 명령어 실행 
- 템플릿 루트 폴더 > cmd > jekyll serve로 로컬서버 실행
- <a href="http://localhost:4000/" target="_blank"> http://localhost:4000/</a> : 해당 로컬서버로 개발 환경 구축 가능
- 배포는 쉽다.. 푸쉬하면 바로 각자의 블로그에 적용된다 ( https://7271kim.github.io )
- 로컬에서 블로그 소스 확인 > Git에 푸쉬 > 개인블로그 적용.

<br/>