---
title: Javascript ECMAScript6( ES6 - 이크마6 )
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
popular: true
---
최근 Node.js를 공부하면서 Front-End 개발에 높은 가능성과 흥미를 느끼게 되어 front-end 개발자가 되기 위한 첫 관문인 ES6 문법에
대해 한번 정리하는 게시물을 작성하고자 합니다. 주안점은 javascript 문법을 공부하는 포스트는 아니고 개인적으로 몰랐던 부분을 정리하는 포스트입니다.

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

# Spread 연산자(...)
스프레드 연산자는 위에서 설명한 이터러블 오브젝트의 엘리먼트를 하나씩 분리하여 전개합니다. 즉 풀어서 세팅한다는 개념으로 접근하면 됩니다.

```java
const first = [1,2];
const second = [5,6];
const union = [0, ...first, 4, ...second ]; // 1,2 , 5, 6을 풀어서 세팅

console.log( union ); //[0, 1, 2, 4, 5, 6]

const myname = "김석진";

console.log([...myname]);  // ["김", "석", "진"]
console.log(...myname); // 김 석 진

function paramChect ( one, two ){
    console.log( one, two );
}

paramChect( ...union ) // 1 2 >> 호출하는 함수의 파라미터 값을 spread 연산자로 작성하면 함수를 호출하기 전 파라메터 값을 분리해서 전개합니다.

```

## rest 파라미터
함수의 파라메터로 Spread 연산자를 작성한 형태를 rest 파라미터라고 부릅니다. 코드로 확인하는 것이 직관적이라 코드롤 보시면 무난하게 이해 되 
실 것입니다. 꼭 호출하는 쪽도 spread 연산자를 통해서 호출해야 정상 동작됩니다.


```java
const first = [1,2];
const second = [5,6];
const union = [0, ...first, 4, ...second ];

function restParameter1(...rest ){
    console.log(rest);
}

function restParameter2( one, two, ...rest ){
    console.log(one);
    console.log(two);
    console.log(rest);
}

restParameter1(...union);
restParameter2(...union);
```



{% highlight wl linenos %}
(6) [0, 1, 2, 4, 5, 6]

0
1
(4) [2, 4, 5, 6]
{% endhighlight %}

## Array-like
Array는 아니지만 Object르 Array처럼 사용할 수 있도록 한 Object를 Array-like라고 합니다.

 - 배열은 index를 가지고 있다.
 - 배열은 length를 통해 엘리먼트의 수를 확인할 수 있다.
<br>
해당 특징을 만족하는 형태가 Array-like입니다.


```java
const arrayLike = {
    0 : 'test1',
    1 : 'test2',
    length : 2
}

for( let index = 0; index < arrayLike.length; index++ ){
    console.log(arrayLike[index]);
} 

// test1 test2 출력 
```


# Destructuring - 디스트럭처링
오른쪽에 있는 것을 분해하여 왼쪽에 할당하는 것을 디스럭처링이라고 말합니다. 배열과 객체 2개 다 가능합니다.

## Array 분할 할당
Array를 분할 할당하는 예제입니다.

```java
let one, two, three, four, five;
const val = [4,5,6,[1,2]];

[ one, two, three ] = [ 1,2,3 ];
console.log( one, two, three); // 1 2 3

[ one, two, three,[ four ,five ] ] = val;
console.log( one, two, three, four, five); // 4 5 6 1 2

let others = [];
[ one, ...ohers] = [ 1, 2, 3, 4];

console.log(one, ohers); //1 (3) [2, 3, 4]
```

## Object 분할 할당
Object를 분할 할당하는 예제입니다. Object를 프로퍼티 단위로 분할하고 프로퍼티 키와 이름이 같은 왼쪽 변수에 값을 할당합니다. 좌측에도 { key : value} 
형식이라면, value가 변수가 됩니다. 사전에 선언된 변수를 사용하려면 ()로 감싸주어야 합니다. 혹은 var, let, const를 통해 바로 초기화 할 수 있습니다.


```java
let one, two, three, four, five;

({ one, two, three } = { one : 1 , two: 2, three : 3 });
console.log( one, two, three); // 1 2 3

let { first, second }  = { first : 1, second : 2};
console.log(first, second); // 1 2

let third, fourth;
({ one : third, two : fourth } = { one : 3, two : 4})
console.log( third, fourth); // 3 4

let { one : seventh, two : eighth } = { one : 7, two : 8};
console.log( seventh, eighth); // 7 8

// 파라메터
function temp ( { one, two, three : { four : five } } ){
    console.log( one, two, five ); 
}

temp( { one : 1, two : 2, three : { four : 5} } ); //1 2 5
```
# Operation - 오퍼레이션
## 프로퍼트 이름 조합
문자열 + 변수를 조합하여 object의 프로퍼티 명으로 사용 가능합니다. 조합하려는 이름을 [] 안에 적습니다.

```java
const temp = "hi_";
const destructure = "sport";
const obj = {
    ["one" + "two"] : 12,
    [temp + "name"] : "hihi"
}
const { [destructure] : value , palyer = "박지성" } =  { sport : "축구" };
const { [destructure] : value2 , palyer2 = "하.." } =  { sport : "농구", palyer2 : "누구지.." };

console.log(obj.onetwo); // 12
console.log(obj.hi_name); // hihi
console.log(value); // 축구
console.log(palyer); // 박지성
console.log(palyer2); // 누구지..
```

## for - of
위에서 설명한 이터러블 오브젝트를 반복하여 처리합니다. for - in 문과의 차이는 for in문의 경우 대상은 Object이며 열거가능한 프로퍼티가 대상입니다.

```java
const values = [
    {item : "연봉", amount : { month : 12, year : 1000 }},
    {item : "나이", amount : { month : 12, year : 1 }}
]

for ( let item of [10,20,30]){
    console.log(item); // 10, 20, 30 출력
}

for ( let item of "김석진"){
    console.log(item); // 김, 석, 진 출력
}

for ( let { item , amount : { month : monthValue, year : yearValue  } } of values ){
    console.log(item, monthValue, yearValue); // 연봉 12 1000 , index.html:32 나이 12 1 출력
}

for ( let item of {a : 1, b : 2}){
    console.log(item); //Uncaught TypeError: {(intermediate value)(intermediate value)} is not iterable 에러 발생
}
```
# Object
es6에서 추가된 부분을 살펴보겠습니다.

## 오퍼레이션
변수 이름을 사용하여 Object의 프로퍼티를 설정할 수 있습니다. 함수이름도 생략 가능합니다.

```java
const one = 1;
const two = 2;
const obj = {
    one,
    two,
    getTemp(){
        return 100;
    }
}

console.log( obj.one, obj.two, obj.getTemp()); // 1 2 100 
```

디스크립터 getter, setter도 사용하기 쉽게 변경되었습니다.

```java
const one = 1;
const two = 2;
const obj = {
    baseCost : 100,
    get val(){
        return this._val;
    },
    set val( param ){
        this._val = this._val != undefined ? this._val + param : param;
    }
}
obj.val = 100;
obj.val = 100;
obj.val = 100;
obj.val = 100;
console.log( obj.val ); // 400
```

# Template 리터럴
문자열 처리를 위한 템플릿을 제공합니다. 사용법은 간단합니다. 특정 부분이 변수로 치환된다고 보시면 됩니다. 코드를 보시면 이해가 되실 것입니다.
```java
let nation = '한국';

console.log(`우리 나라는 ${nation} 입니다.`); // 우리 나라는 한국입니다.

nation = '미국'
console.log(`우리 나라는 ${nation} 입니다.`); // 우리 나라는 미국입니다.
```

탬플릿 앞에 tag할 함수를 작성한 형태를 tagged 탬플릿이라고 합니다. 함수를 호출하기 전 문자열과 표현식을 분리시켜 파라메터로 넘겨줍니다.

```java
let one = 1;
let two = 2;
function temp ( textArray , plus, minus ){
    console.log(textArray[0], plus, textArray[1], minus, textArray[2]); // 2 + 1 =  3 입니다. 2 - 1 =  1 입니다.
}

temp `2 + 1 = ${one + two}입니다. 2 - 1 = ${two - one}입니다.`;
```
# Generator 오브젝트 
function* 와 같은 키워드를 사용한 함수를 제너레이터 함수라고 표현하며 일반적으로 함수를 호출한다면 함수 블록이 1회 실행되지만, 제네레이터 
오브젝트를 생성하여 반환 후 나누어서 실행할 수 있게 합니다. 생성된 제너레이터는 이터레이터 오브젝트이기 때문에 나누어서 실행 가능합니다. yield 
키워드 단위로 나누어서 실행합니다.

```java

function* test( one, two ){
    let tepm = 0;
    console.log(tepm); // 0
    tepm += one + two;
    tepm += yield tepm;
    /*
        첫 yield 전 까지 실행하고  멈춤니다. 
        실행 범위는 
        
        let tepm = 0;
        console.log(tepm); // 0
        tepm += one + two;
        tepm += yield
        
        입니다.

        yield 우측 tepm이 retrun 값입니다. {value: 3, done: false}
    */

    
    console.log(tepm); // 1003
    tepm += one + two;
    yield tepm + one + two + 11;
    /*
        두번째 yield 전 까지 실행하고  멈춤니다. 
        실행 범위는 
        
        tepm += yield tepm; >>> tepm는 retun하여 사라지고, 들어온 파라메터 값이 yield에 치환됩니다.
        
        console.log(tepm); // 3
        tepm += one + two;
        
        
        입니다.

        yield 우측 tepm + one + two + 11; 값을 리턴합니다. {value: 1020, done: false}
    */

    console.log(tepm); // 1006
    yield { 'result' : tepm + '입니다.'};

    /*
        세번째 yield 전 까지 실행하고  멈춤니다. 
        실행 범위는 
        
        console.log(tepm);
        
        입니다.

        yield 우측  { 'result' : tepm + '입니다.'} 값을 리턴합니다. {value: {result: "106입니다."}, done: false}
    */

    return tepm;
}

let getObj = test(1,2);

console.log(getObj); // Generator를 반환합니다.
console.log( getObj.next() ); // 첫번째 {value: 3, done: false}
console.log( getObj.next(1000) ); //두번째  {value: 1020, done: false}
console.log( getObj.next() ); // 세번째 {value: {result: "106입니다."}, done: false}
console.log( getObj.next() ); // 더 이상 yield가 없기 때문에 최종 return을 반환합니다. {value: 1006, done: true}

```

.return(param)을 통해 이터레이터를 종료 시킬 수 있습니다.

```java
function* test(){
    let temp = 0;
    while( true ){
        console.log(temp);
        temp += yield temp;
    }

}

getObj = test();
console.log( getObj.next()); // {value: 0, done: false}
console.log( getObj.next(10)); // {value: 10, done: false}
console.log( getObj.next(100)); // {value: 110, done: false}
console.log( getObj.return(1000)); // {value: 1000, done: true}
console.log( getObj.next()); // {value: undefined, done: true}
console.log( getObj.next()); // {value: undefined, done: true}
```

yield* [배열] 을 통해 next로 받아올 인자를 미리 정할 수도 있습니다.

```java
function* test(){
    while( true ){
        yield* [1,2,3]
    }

}

getObj = test();
console.log( getObj.next()); // {value: 1, done: false}
console.log( getObj.next()); // {value: 2, done: false}
console.log( getObj.next()); // {value: 3, done: false}
console.log( getObj.next()); // {value: 1, done: false}
```

# Class 오브젝트
JAVA와 같은 객체지향 언어처럼 문법을 구현할 수 있도록 제공해주는 객체입니다. 

```java
class Member {
    static TEMP_NAME ="hihi";

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }
    
    // getter
    get getName(){
        return this._name;
    }
    // setter 
    set setName( name ){
        this._name = name;
    }

    // getter
    get age(){
        return this._age;
    }
    // setter 
    set age( age ){
        this._age = age;
    }

    toString(){
        console.log( `${Member.TEMP_NAME} 난 ${this.name}이고 ${this.age}살 이야` )
    }
    getLeader(){
        console.log("리더 취득");
    }

}

class Soccer extends Member {
    constructor( name, age, part ){
        super(name, age);
        this.part = part;
    }

    toString(){
        super.toString();
        console.log( `파트는 ${this.part}야` )
    }
    getData(){
        console.log("데이터 취득");
    }

}

const soccer = new Soccer("김석진", "8", "유소년 축구팀" );
soccer.toString();
soccer.getLeader();
soccer.getData();
```

{% highlight wl linenos %}
hihi 난 김석진이고 8살 이야
파트는 유소년 축구팀야
리더 취득
데이터 취득
{% endhighlight %}

# Symbol 오브젝트
es5에서는 primitive 타입에 null, string, number, undefined, boolean 5개가 있었지만 es6에서는 symbol이 
추가되었습니다. Wrapper 클래스는 Symbol 오브젝트입니다. Symbol을 통해 생성된 값은 프로그램 전체를 통해 유일하며 개발자 도구에서도 그 
값을 볼 수 없습니다.

```java
var temp = Symbol();
console.log(temp); // Symbol()
```

유일한 값을 갖는 symbol의 특징을 이용하여 object의 키로 사용할 수 있습니다. [] 안에 변수를 집어넣는 의미는 symbol-keyed property임을 
명시하는 것입니다. 즉 심볼값은 문자열이 아님을 명시하는 것과 비슷합니다.

```java
const temp = Symbol("123");
obj = {
    [temp] : 'ppppp'
}

console.log(obj[temp]) // ppppp
```
Symbol은 Enumerale이 false이기 떄문에 for-in문을 통해 출력되지 않습니다.
이외의 Symbol 메서드와 Symbol 프로퍼티에 관해서는 정리하지 않겠습니다.

# Map 오브젝트
Map 오브젝트의 특징은 Objec의 경우 키 값이 String과 Symbol만이 가능하지만 Map은 Object, Function과 같은 오브젝트도 
키가 될 수 있습니다. 또한 key는 추가한 순서대로 읽힌다는 특징이 있습니다. Map을 생성할 때 파라메터는 이터러블 오브젝트이어야 합니다. 이터러블 
오브젝트를 작성하고 그 안에 배열로 [key,value]를 작성해야 합니다.
```java
const emptMap = new Map([
    ["key1","value1"],
    ["key4","value4"],
    ["key2","value2"],
    ["key3","value3"]
]);

emptMap.set(temp, temp);

function temp(){
    console.log("temp");
}
console.log(emptMap.get("key1")) //value1
emptMap.get(temp)() //temp

for( const [ key, value ] of emptMap ){
    console.log( emptMap.get(key) ); // 1-> 4 -> 2 -> 3 - > temp 순서가 보장된다.
}
```
# WeakMap 오브젝트 
Map 오브젝트의 key에 오브젝트만 지정할 수 있으며, string, number, symbol과 같은 값을 작성할 수 없습니다. Weakmap의 장점은 느슨한 
연결 때문에 Weakmap을 사용하는 객체 또한 GC대상이 됩니다. 

```java
let temp = { temp: "aaa" };
let temp2 = [temp];

temp = null; // 지웠음에도


setTimeout(() => {
    console.log(temp2); // 존재 
}, 10000);

```

```java
let temp = { temp: "aaa" };
const emptMap = new WeakMap([
    [{ temp: "aaa" },"오브젝트"]
]);

temp = null;

setTimeout(() => {
    console.log(emptMap); // 제거됨
}, 10000);
```
# Set, WeeakSet 오브젝트 
Set은 java의 Set과 기능이 같습니다. WeakSet은 WeakMap처럼 value로 object만 가능합니다.

```java
const temp = new Set([1,2,3,3,3,3,3,"스포츠"]);
console.log(temp) // {1, 2, 3, "스포츠"}
```

# Proxy 오브젝트
Proxy의 사전적인 의미는 "대리"입니다. 즉 프록시는 메서드의 기본적인 오퍼레이션과 행위를 중간에 가로채어 대신 일련의 처리를 하는것을 말하니다. 
주로 setter, getter, construct 등등 빌트인 오브젝트에 내부 메서드들에 대해 중간에 가로 채 특정 부분을 추가할 수 있습니다. 사용법은 
new Proxy( target , 실행할 handler ); 입니다. 그럼 object에 키와 value를 추가할 때 set 트랩과, get 트랩을 
이용하여 특정 행위를 제어하는 코드를 작성해 보겠습니다. 아래 외 다양한 것들이 존재하니 필요시 추가로 포스트 하겠습니다.

```java
const obj = {
    'name' : '김석진',
    'job' : '개발자'
}

const handler1 = {
    set( target, key, value, receiver ){
        // set 트랩은 총 4개의 파라메터를 가질 수 있습니다.
        // 1. target, 2. 프로퍼티 key, 3. 프로퍼티 value, 4. set이 포함된 Proxy 인스턴스 receiver ( 사용하지 않는 경우도 많음 )
        if( key === 'age' ){
            if( !Number.isInteger(value) ){
                value = parseInt(value) + 100;
            }
        }

        target[key] = value;
    },
    get( target, key, receiver ){   
        // get 트랩은 총 3개의 파라메터를 가질 수 있습니다. setter와 동일합니다.
        if( key === 'age' ){
            return `나이는 ${target[key]} 입니다.`
        }
    }
}

const obj_proxy = new Proxy( obj, handler1 );

obj_proxy.age = '10';
console.log( obj_proxy.age ); // 나이는 110 입니다.
```

# Reflect 오브젝트 
Reflect 오브젝트의 모든 메서드는 static 메서드이기 때문에 바로 호출할 수 있습니다. Proxy 오브젝트의 모든 트랩 메서드는 Reflect도 
가지고 있습니다. 실질적으로 Reflect를 사용하는 의미에 대한 부분이 정확히 이해가 되지 않아 Reflect가 있다라는 정도만 하고 넘어가겠습니다.

# Promise
자바스크립트는 싱글스레드 동기( Synchronous ) 방식으로 실행하기 때문에 첫 줄이 완료되어야 두번째 줄이 실행됩니다. 하지만 통신과 같은 경우 
비동기로 처리가 되어야 하기 때문에 비동기 상황에서의 컨트롤을 하기 위해 존재합니다. 만약 아래와 같은 비동기 상황에서 2번 뒤에 꼭 3번이, 3번 뒤에 
꼭 4번이 실행이 되어야 할 때! 그런 경우 필요합니다.

```java
console.log('1번');
setTimeout( ()=> console.log('2번'), 0);
console.log('3번');
setTimeout( ()=> console.log('4번'), 0);
setTimeout( ()=> console.log('5번'), 0);
console.log('6번');
```

{% highlight wl linenos %}
1번
3번 
6번
2번
4번 
5번
{% endhighlight %}

동기방식이기 때문에 1번이 끝날 때까지 2번은 시작할 수 없습니다. 이를 Promise를 통한 비동기 식으로 바꾼다면 아래와 같이 적용하면 됩니다. 

```java
const logGet = ( param, resolve ) => { 
        console.log(`${param}`); 
        resolve();
    };

const getpromise = (param) => {
    return new Promise ( ( resolve, resject ) =>{
        setTimeout( ()=> {
            console.log(`${param}`);
            resolve( resolve );
        }, 0);
    })
}

new Promise(( resolve, resject ) => {
        logGet('1번', resolve)
    })
    .then( () => getpromise('2번'))
    .then( (resolve) => logGet('3번',resolve))
    .then( () => getpromise('4번'))
    .then( () => getpromise('5번'))
    .then( (resolve) => logGet('6번',resolve))
```
{% highlight wl linenos %}
1번
2번 
3번
4번
5번 
6번
{% endhighlight %}

 Promise의 큰 틀은 4가지로 존재합니다.

 - Pending : new Promise();를 호출한 상태 , Fulfilled 전 상태
 - Fulfilled  : resolve 된 상태
 - Rejected : reject 된 상태
 - Settled : 결론이 난 상태 

promise는 new를 통해 생성하며 resolve와 reject를 파라메터로 가지는 함수를 받고 있습니다. resolve, resolve는 추후 실행부에게 
결과를 알려줄 때 사용됩니다. new를 통해 Promise객체를 만들고 resolve나 reject를 실행되기 전 상태를 pending 상태입니다.

```java
const isGo = true;
    const promiseTemp = new Promise( ( resolve, resject ) =>{
        if( isGo ){
            const nextData = {};
        nextData.isgo = true;
        resolve( nextData )
    } else {
        const nextData = {};
        nextData.isgo = false;
        resject( nextData );
    }
})
```
위와 같이 선언한 Promise를 실행하는 부분을 짜보겠습니다.

```java
const isGo = true;
const promiseTemp = new Promise( ( resolve, resject ) =>{
    if( isGo ){
        const nextData = {};
        nextData.isgo = true;
        resolve( nextData )
    } else {
        const nextData = {};
        nextData.isgo = false;
        resject( nextData );
    }
})

promiseTemp.then(
    ( resultData )=>{
        // 성공시 부분입니다.
        console.log('성공');
        console.log(resultData);
    },
    (resultData)=>{
        // 실패시 부분입니다.
        console.log('실패');
        console.log(resultData);
    }
)
```
{% highlight wl linenos %}
성공
index.html:36 {isgo: true}
{% endhighlight %}

isGo를 true, false로 바꾸면서 해보시면 이해가 됩니다.
<br>
<br>
<br>
만약 여러 promise를 사용한 채 실패에 대한 출력 내용이 같을 경우 catch를 통해 처리한다면 간편합니다. finally은 resolve가 되던, reject이되던 
결과에 상관없이 동작할 때 유용합니다.

```java
const logGet = ( param, resolve ) => { 
        if(param === '3번'){
            throw new Error("에러가 발생했습니다.");
        } else {
            console.log(`${param}`); 
            resolve();
        }
        
    };

const getpromise = (param) => {
    return new Promise ( ( resolve, resject ) =>{
        setTimeout( ()=> {
            console.log(`${param}`);
            resolve( resolve );
        }, 0);
    })
}

new Promise(( resolve, resject ) => {
        logGet('1번', resolve)
    })
    .then( () => getpromise('2번'))
    .then( resolve => logGet('3번',resolve))
    .then( () => getpromise('4번'))
    .then( () => getpromise('5번'))
    .then( resolve => logGet('6번',resolve))
    .catch( error => console.log( error.message ) )
    .finally( () => console.log('end') );
```
{% highlight wl linenos %}
1번
2번
에러가 발생했습니다.
end
{% endhighlight %}


**참고자료** <br> <br>
-- EMCAScript6 - 김영보 지음<br> 
{: .notice--info}