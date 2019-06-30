---
title: Gygwin 설치하기
layout: post
summary: 윈도우에서도 리눅스 쉘 스크립팅 명령어 사용 가능한 프로그램 
categories: 
    - cygwin
tags: 
    - difficulty-low: "난이도 하"
    - install : "설치"
author: 김석진
thumbnail: posts/icon-cygwin.png
---
##### 실용주의 프로그래머를 읽다가 중간에 나온 윈도우에서도 리눅스 쉘 스크립팅 명령어 사용 가능한 프로그램 
<br>
<p class="bold-text"> 1. 설치하기 <p>
- <a href="https://cygwin.com/install.html" target="_blank">https://cygwin.com/install.html</a>
- 설치 진행

<p class="bold-text"> 2. 어떤 폴더에서든 우클릭으로 cygwin 열기 세팅 <p>
- setup-x86_64.exe 설치 파일 다시 실행 chere 설치 <br/> 
<img src="/assets/img/posts/cygwin/install.png"><br/> 

<p class="bold-text"> 3. 윈도우 탐색기 > cygwin 우클릭 > 관리자 권한으로 실행 <p>
- 해당 명령어 실행 : chere -i -t mintty -s bash<br/> 
- 어떤 폴더에서든 " Bash Prompt Here " 열명 cygwin 실행 가능 <br/> 
- find . -name "*.png" 해당 명령어 실행해보기