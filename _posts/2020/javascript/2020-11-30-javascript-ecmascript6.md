---
title: Javascript ECMAScript6( ES6 )
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- Javascript
tag:
- ES6
description: 자바스트립트 중 이크마6에 관에 공부해보겠습니다.
article_tag1: 이크마6
article_section: ECMAScript6
meta_keywords: 이크마스크립트, EMCA-262
last_modified_at: '2020-11-30 14:00:00 +08000'
toc: true
toc_sticky: true
toc_label: 목차
---
최근 Node.js를 공부하면서 Front-End 개발에 높은 가능성과 흥미를 느끼게 되어 front-end 개발자가 되기 위한 첫 관문인 ES6 문법에
대해 한번 정리하는 게시물을 작성하고자 합니다. 주안점은 차이점을 서술하는 것이지 javascript 문법을 공부하는 포스트는 아닙니다.

**빌트인(Built-in) 오브젝트** : 자바스크립트 엔진이 랜더링 시 미리 생성하는 것으로 개발자가 사전처리 하지 않아도 바로 사용할 수 있는 object입니다. 
Function, Object, Array, Number, String 등의 오브젝트가 이에 속합니다.<br>
{: .notice--info}

# var, let, const
변수를 설정하는 방법에는 크게 3가지 선언문이 존재합니다. ES6 이전에 존재하였던 var과 ES6에 등장한 let, cont 변수에  관해 한번 차이점을 
비교해보겠습니다.

## var
var의 경우는 ES6 이전의 문법으로 매우 유연한 방식의 변수 선언 방법입니다. var의 경우는 let, cont와 다르게 블럭 단위 scope가 
아닌 함수 단위 scope입니다. 때문에 if {} 해당 블럭내부에 선언되나, 밖에 선언되나 같은 scope입니다. 이 외 javascript 변수에 
관한 특징들은 나열하지 않겠습니다.

테스트 1
```java
var test = "test1";
function temp(){
    var test = "test2";
    console.log(test);
}

temp();
console.log(test);
```

{% highlight wl linenos %}
test2
test1
{% endhighlight %}

테스트 2
```java
var test = "test1";
if( true  ){
    var test = "test2";
    console.log(test);
}

console.log(test);
```
{% highlight wl linenos %}
test2
test2
{% endhighlight %}

## let
let은 var과 다르게  블록 scope({}) 변수입니다. 

```java
let test = "test1";
if( true  ){
    let test = "test2";
    console.log(test);
}

console.log(test);
```

{% highlight wl linenos %}
test2
test1
{% endhighlight %}

var과 다르게 호이스팅이 일어나지 않습니다. Hosting이란 우리가 사용하는 모든 변수들의 선언만  유효범위 최 상단에 위치하도록 눈에 보이지 않지만 
내부적으로 끌어올려 동작하도록 돌아갑니다.

```java
console.log(test); // 변수가 없음에도 undefined입니다.
console.log(test2); // 변수가 없어 에러가 발생합니다.
var test = 1;
```
 
해당 예제에서 test가 에러 없이 동작하는 이유는 하단 var test = 1; 부분이 존재하기 때문에 javascript parser가 코드를 재정리 
할 때 var test; 부분을 코드 맨 위로 끌어올리기 때문에 undefined가 발생하게 되는 것입니다.

<br><br>

let은 window 객체에 추가되지 않습니다. 때문에 this.{변수명}을 통해 접근할 수 없습니다. 

```java
var test = 1;
let test2 = 2;
console.log(this.test); // 1
console.log(window.test); // 1
console.log(this.test2); // undefined
console.log(window.test2); // undefined
```

## const
let과 모든 특징을 같이 합니다. 다만 let은 변수에 할당된 값을 변경할 수 있지만 const는 한번 할당된 값을 변경하려고 하면 에러가 발생됩니다.

```java
let test = 1;
const test2 = 2;
test = 2;

console.log(test); //2 

test2 = 3; // Uncaught TypeError: Assignment to constant variable 에러 발생 
console.log(test2); // 진행 안됨 
```

# arrow 함수
쉽게 설명해서 기존 function(){} 으로 함수를 선언하던 것을 =>를 통해 편리하게 사용할 수 있도록 한 것입니다.

```java
// 기존 방식
const tempFun = function( param1, param2 ){
    console.log(param1,param2);
}

const tempFunsum = function( param1, param2 ){
    return param1 + param2;
}


// 화살표 함수 사용
const tempFun2 = ( param1, param2 ) => console.log( param1, param2);
const tempFunsum2 = (param1, param2) => param1 + param2


tempFun("안","녕하세요"); // 안 녕하세요 출력
tempFun2("안","녕하세요"); // 안 녕하세요 출력
console.log(tempFunsum(1,2)); // 3
console.log(tempFunsum2(1,2)); // 3
```

코드가 2줄이 넘어간다면 블록을 통해 표현하면 됩니다.

```java
const tempFun2 = ( param1, param2 ) => {
    console.log( param1, param2);
    console.log( param2, param1);
}

tempFun2("안","녕하세요");
```
만약 단순 object를 리터럴 형식으로 return 할 경우 아래와 같은 방식으로 해야합니다. 

```java
const tempFun = ( param1, param2 ) => ({'성':param1, '이름' : param2});

console.log(tempFun("김","석진")); // {성: "김", 이름: "석진"}
```

화살표 함수 내부에서는 arguments 프로퍼티를 사용할 수 없고 대신 rest파라미터를 사용합니다. ( ...rest rest파라메터라고 부르며 뒤에 
나옵니다. )

```java
const tempFun = function (){
    console.log ( arguments );
}

const tempFun2 = () => {
    console.log ( arguments );
}

const tempFun3 = (...rest) => {
    console.log ( rest );
}

tempFun("김","석진"); //Arguments(2)...;
tempFun3("김","석진"); //  ["김", "석진"]
tempFun2("김","석진"); // arguments is not defined
```
화살표 함수 내부의 this는 Lexical this로 실행 시간에 정해지는 것이 아닌 정적으로 상위 스코프로 고정됩니다.

```java
function MakeName ( fistName, SecendName ){
    this.fistName = fistName;
    this.SecendName = SecendName;
}

MakeName.prototype.getName = function(){
    setTimeout(function(){
        console.log(this);
        console.log(this.fistName,this.SecendName);
    }, 1000);
}

MakeName.prototype.getName2 = function(){
    setTimeout(() => {
        console.log(this);
        console.log(this.fistName,this.SecendName);
    }, 1000);
}

const myName = new MakeName("김","석진");
myName.getName(); // Window 객체, this.fistName은 undifined 떨어집니다.
myName.getName2(); // MakeName 객체, 김 석진 출력
```
# Iteration
Iteration은 반복처리를 나타내며, 반복 처리를 위한 규약인 프로토콜을 가지고 있습니다. 이터레이션 프로토콜은 Iterable 프로토콜과 Iterator 
프로토콜로 구성 됩니다.

## Iterable 프로토콜
이터러블 프로토콜은 오브젝트의 반복 처리를 어떻게 해아하는지에 대한 규약을 정의하며 String, Array, Map, Set, TypedArray, 
Argument 빌트인 오브젝트는 이런 이터러블 프로토콜을 가지고 있습니다. 또한 DOM의 NodeList도 가지고 있습니다. 이런 오브젝트들은 js엔진이 
랜던링될 때 이터러블 프로토콜을 설정하기 때문에 따로 사용자가 사전처리를 하지 않아도 반복 처리를 할 수 있습니다. 이런 이터러블 프로토콜이 설정된 오브젝트를 
이터러블 오브젝트라고 합니다. 자바스크립트는 이터러블 오브젝트에 Symbol.iterator가 있어야 합니다. 즉 위와 같은 빌트인 객체를 상속받는 것이 아닌 
개별 객체를 만들고 해당 객체를 이터러블 객체로 만들기 위해서는 Symbol.iterator를 추가하고 Symbol.iterator에 반복 처리를 할 
수 있는 코드를 작성하면 됩니다.

## Iterator 프로토콜
이터레이터 프로토콜은 오브젝트의 값을 차례대로 어떻게 처리해야하는 지에 대한 규약입니다. 잘 처리되어 있다면 Symbol.iterator().next() 를 
통해 차례로 값을 가져올 수 있습니다. 

**참고자료** <br> <br>
-- EMCAScript6 - 김영보 지음<br> 
{: .notice--info}