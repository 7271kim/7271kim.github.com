---
title: Maven(spring)
layout: post
summary: 메이븐 및 빌드 시스템 정리 
categories: 
    - maven
thumbnail: posts/icon-mvn.png
pre: ""
nex: ""
---
<p class="bold-text">1. 기본적인 Maven에대한 정리</p>
 - 프로젝트 관리 툴, POM( Project Object Model )모델애 기반하여 프로젝트를 빌드
 - 빌드, 문서화, 리포팅, 의존관계, 소스코드 관리, 릴리즈, 배포
 - JAVA를 통해 개발할 시 다양한 오픈소스를 사용한다. 이슈는 환경에 따라 잘못된 버전을 사용하면 돌아가지 않는 이슈를 해결할 수 있다.
 - IDE에 종속적인 부분을 제거 할 수 있다. (이클립스, 넷빈즈, 인텔리제이 등)
<br/>
<p class="bold-text">2.설치</p>
 - <a href="http://maven.apache.org/download.html" target="_blank">공식홈페이지</a>에서 다운로드 
 - 원하는 장소에 압축파일 풀고 해당경로를 환경변수에 담음( MAVEN_HOME 및 path추가 )
 - 기본 명령어 : maven options goal(s) phase(s)
 <p class="text-danger">MAVEN_HOME/settings.xml : 모든 사용자에 적용되는 전역적인 메이븐 설정 정보</p>
 <p class="text-danger">USER_HOME/.m2/setting.xml : 특정 사용자에 적용되는 메이븐 설정 정보</p>
<br/>
<p class="bold-text">3.메이븐 라이프사이클(각각의 단계를 페이즈라고 한다)</p>
 - BASE: 각각의 Phase는 의존관계를 가지고 있어 해당 Phase가 수행되려면 이전 단계의 Phase가 모두 수행되어야한다.

: 기본 라이프 사이클
 - compile : 소스 코드를 컴파일한다
 - test : 단위 테스트 실행 (기본설정은 단위 테스트가 실패하면 빌드 실패로 간주함)
 - package : 컴파일된 클래스 파일과 리소스 파일들을 war 혹은 jar와 같은 파일로 패키징
 - install : 패키징한 파일을 로컬 저장소에 배포 
 - deploy : 패키징한 파일을 원격 저장소에 배포 

: Clean라이프 사이클
 - clean : 메이븐 빌드를 통하여 생성된 모든 산출물을 삭제한다.

: site 라이프 사이클 (써본적 없음)
 - site : 메이븐 설정파일 정보를 활용하여 프로젝트에 대한 문서 사이트를 생성한다.
 - site-deploy : 생성한 문서 사이트를 설정되어 있는 서버에 배포

<p class="text-danger bold-text">전체 페이즈</p>
<img src="/assets/img/posts/maven/maven-pase.png" class="ratio-100" />

<p class="bold-text">4.페이즈와 플러그인 그리고 goal실행</p>
 - mvn의 모든 기능은 플러그인이 실행시킴.
 - mvn compile => compile 페이즈와 연결되어 있는 compiler 플러그인(maven-compiler-plugin)의 compile 골이 실행
 - <a href="http://maven.apache.org/plugins/index.html" target="_blank">메이븐 플러그인 검색 및 사용법</a>


<p class="text-danger bold-text">build</p>
 - sourceDirectory 및 resources 설정
 - plugins 설정 : 빌드에서 사용할 플러그인들을 설정, 플러그인에서 실행할 수 있는 각각의 작업을 goal 이라고 정의
 - executions설정 : Maven에서 정의해 놓은 Lifecycle 에 추가적인 작업을 하고자 할때 사용

<p class="text-danger bold-text">플러그인 goal 실행</p>
 - mvn groupId:artifactId:version:goal 
 - ex) mvn org.apache.maven.plugins:maven-compiler-plugin:2.1:compile
 - groupId 목록을 settings.xml에 잘 적어 놓는다면 groupId 생략 가능
 - ("org.apache.maven.plugins" and "org.codehaus.mojo" 이 두개는 자동으로 settings에 그룹 Id목록으로 잡혀있음 = 생략가능)
 - artifactId가 maven-이름-plugin 또는 이름-maven-plugin 으로 잘 적혀있다면, artifactId대신 이름 변경 가능
 - 가장 최신플러그인을 실행하기 원한다면 version 생략 가능

<p class="bold-text">5.Profile</p>
 - 서로 다른 환경에 따라 달라지는 설정을 바꿀 수 있다
 - mvm -P 뒤 profile id를 적어주면 해당 프로파일에 맞는 변수및 설정 값들이 빌드시 반영된다.
 - profile안에서 아예 빌드 초기세팅 자체도 변경 가능하다.

<pre>
{% raw %}
프로파일에 따른 패키징 데이터 변경 방법
일반 properise에 기본이 되는 것 적어주기
&lt;properties>
    &lt;!-- -P 로 명시하지 않을 경우 기본 프로파일 -->
    &lt;env>dev&lt;/env>
&lt;/properties>

profiles 기술
&lt;profiles>
    &lt;profile>
        &lt;id>dev&lt;/id>
        &lt;properties>
            &lt;env>dev&lt;/env>
        &lt;/properties>
    &lt;/profile>
    &lt;profile>
        &lt;id>test&lt;/id>
        &lt;properties>
            &lt;env>test&lt;/env>
        &lt;/properties>
    &lt;/profile>
    &lt;profile>
        &lt;id>local&lt;/id>
        &lt;properties>
            &lt;env>local&lt;/env>
        &lt;/properties>
    &lt;/profile>
    &lt;profile>
        &lt;id>prod&lt;/id>
        &lt;properties>
            &lt;env>prod&lt;/env>
        &lt;/properties>
    &lt;/profile>
&lt;/profiles>

build element 에 resource 를 찾는 경로를 변경

&lt;build>
        &lt;resources>
            &lt;resource>
                &lt;directory>src/main/resources/${env}&lt;/directory>
            &lt;/resource>
        &lt;/resources>
        &lt;testResources>
            &lt;testResource>
                &lt;directory>src/test/resources/${env}&lt;/directory>
            &lt;/testResource>
        &lt;/testResources>
&lt;/build>

베포에 따른 변화 

명시하지 않을 경우 dev 가 기본 profile로 적용
mvn clean package
  
local deploy
mvn clean package -P local
  
테스트용 deploy
mvn clean package -P test

production용
mvn clean package -P prod

{% endraw %}
</pre>

<p class="bold-text">프로젝트별 의존성 관리 및 Module로 구성은 추후 추가</p>

