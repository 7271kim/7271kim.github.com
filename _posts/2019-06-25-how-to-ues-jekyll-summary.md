---
title: 나도 GIT블로그 하고싶다.<br/>( 요약편 )
layout: post
summary: 문법 및 소스가 어느 정도 눈에 들어왔을 때 쉽게 볼 수 있도록 요약 정리 
categories: 
    - gitBlog
tags: 
    - difficulty-low: "난이도 하"
    - summary: "요약"
pre: "/gitblog/2019/06/23/how-to-ues-jekyll-apply.html"
nex: "/gitblog/2019/07/01/how-to-ues-jekyll-google.html"
author: 김석진
thumbnail: posts/git-blog.jpg
---
<br>
#### 1. 루비 다운로드 및 설치 : https://rubyinstaller.org/ , ( cmd git 명령어 사용 여부 가능 확인, 없을 시 환경변수 추가 ), cmd > gem install jekyll bundler 
<br>
#### 1. 원하는 테마 FORK
<br>
#### 2. Repository name 설정 => 개인 계정 이름.github.com
<br>
#### 3. _config.yml 세팅 변경 : url, header_pages, categories_korea, social links ( _config.yml 세팅참고 )
<br>
#### 4. 로컬 서버 세팅 :root 폴더에서 bundle install , jekyll serve
<br>
#### 5. 필요 위젯 설치 ( 원하는 사람만 ) 
- MakerWidget ( 우측 하단 위젯 ) :  <a href="https://makerwidget.com" target="_blank">https://makerwidget.com</a> 등록 후 ENBED WIDGET 스크립트 페이지에 삽입
- Disqus (댓글) : 해당 블로그 참고 <a href="https://17billion.github.io/jekyll/disqus/reply/2017/06/01/jekyll_disqus.html" target="_blank">disqus 세팅</a>
- 페이지 네이게이션 : <a href="/jekyll/gitblog/2019/06/23/how-to-ues-jekyll-apply.html#paging" target="_blank">응용편</a>

<br>
#### 6. 포스트 작성 : 이름 구조 잘 지켜주기 ( 2019-06-17-주제 )
<br>
#### 7. tags, categories 폴더 및 내용 세팅 , 페이지 네비 세팅