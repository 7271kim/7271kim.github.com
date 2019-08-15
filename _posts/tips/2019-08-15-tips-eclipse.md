---
title: 개발관련 팁 Eclipse
layout: post
summary: 개발관련 팁 Eclipse
categories: 
    - JAVA
tags: 
    - tips: "각종 팁"
    - eclipse: "이클립스"
thumbnail: posts/icon-tips.png
---
<p class="bold-text">1. 일반 Java 프로젝트 jar 파일 만들기</p>
- jar 파일 실행 : 이클립스 우클릭 >> Runable JAR file >> main() 있는 클래스 선택 >> 만들기 
- nohup java -jar settings.jar & ( 백그라운드 실행 & << 이거 자주 빼먹음 꼭 쓰기 )

<p class="bold-text">2. JAVA 자주 사용하는부분 개인 템플릿 세팅</p>
- Window > Preferences > Java > Editor > Template
<pre>
formy >>>
for( int index = 0; index < ${array}.length; index++  ){
    ${cursor}
}
</pre>
