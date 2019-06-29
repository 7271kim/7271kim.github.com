## 개발을 위한 로컬 세팅. 
#### # *.md 확장자 명은 Markdown 문법으로 작성된 파일이다.
#### https://github.com/sujaykundu777/devlopr-jekyll <- 해당 테마 포크 , fork의 경우 잔디가 심어지지 않아 신규 레포 생성

### 1. 원하는 테마 Fork 후 초기 세팅 정리
- 레퍼지토리 이름 정리 : 7271kim(개인 계정 이름).github.com
- _config.yml 설정 변경 : URL 수정  >> url: "7271kim.github.com" 
- 접속확인 : https://7271kim.github.io/

### 기본 구조 
 https://jekyllrb-ko.github.io/docs/structure/
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
 ├── _site
 ├── .jekyll-metadata
 └── index.html # 'index.md' 이어도 되지만 올바른 YAML 머리말이 필요합니다
</pre>
### 2. 설치
- 루비 버전 2.2.5 또는 그 이상.
- https://rubyinstaller.org/ 다운로드 및 설치
- gem install jekyll bundler 으로 기본 Jekyll 설치 
- 해당 템플릿에서 git 명령어를 사용하기 때문에  C:\Program Files\Git\bin git.exe 환경변수 path 세팅
- 템플릿 루트 폴더에서 cmd > bundle 명령어 실행 
- jekyll serve로 로컬서버 실행

#### #지킬은 기본적으로 YAML Front Matter을 가진 파일이 아니면 Liquid를 프로세싱하지 않는데, 이 YAML Front Matter은 기본적으로 아래 두 줄로 표시된다.
<pre>
---
---
</pre>

### 3. 환경변수 세팅 
- 기본 값은  {{ default: site.lang }} 이런식을 불러오기 위해서 _config.yml에 설정하기
<pre>  
defaults:
 -
  scope:
   path: ""
  values:
   lang: "ko-KR"
   layout: default
</pre>
- scope, values는 기본이다 해당 문법을 번역하면  모든 패스, default 레이아웃을 사용하는 곳의 lang 변수의 값은 ko다 


