---
title: JAVA 람다식이란(Lambda Expression)?
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- JAVA
description: JAVA에서 람다식을사용하는 방법을 배우고 응용해보겠습니다.
article_tag1: Lambda Expression
article_section: 람다
meta_keywords: JAVA,람다식 기본문법,함수적 인터페이스 ,this 키워드 
last_modified_at: '2020-03-22 14:00:00 +0800'
toc: true
toc_sticky: true
toc_label: 목차
---
## Step 1 : 람다식이란?
람다식의 기본개념을 보기 전에 함수형 프로그래밍이 무엇인지 잠시 살펴보겠습니다. 
함수형 프로그래밍이란 객체 지향 프로그래밍이 나오기 전부터 있던 패러다임 중 하나로서 함수 안으로 들어오는 인자를 가지고 항상 불변한 결과를 돌려주는 것이 목적으로서 f(  x , y  ) = c 처럼 x와 y라는 값이 들어오면 항상 c가 도출되도록 프로그래밍을 하는 것이라 보면 됩니다. 
함수형 프로그램은 함수 내부 중괄호 안에 필요한 변수는 외부에서 받아오고 로직만이 존재하기 때문에 없어 변수에 값이 할당되면 이후 절대 변하지 않기 때문에 병렬처리나 이벤트 지향 프로그램에서 side effect가 없다는 장점이 있습니다. 
이러한 함수적 프로그래밍을 쉽게 지원하기 위해 자바 8부터 람다식( Lambda Expresstion )을 지원하고 있습니다. 람다식은 ( 매개변수 ) -> { 실행코드 } 형식으로 표현됩니다. 
이런 코드들은 런타임시에 인터페이스의 익명 구현 개체로 생성됩니다. 관련 포스트는 [익명구현객체란]({{"/java/java-interface/#step-3-익명-구현-객체"}}){:target="_blank"}를 확인하시기 바랍니다. 

## Step 2 : 람다식 기본문법
람다식 기본 문법은 아래와 같습니다.

```java
public interface Ramda {
    public void justOne( int a, int b );
}
```
```java
Ramda ramda = ( int a, int b ) -> {
    System.out.println(a + b);
};

ramda.justOne(2, 3);
```
다만 매개 변수에 대한 타입은 런타임시 자동으로 인식되기 때문에 생략 가능합니다. 

```java
Ramda ramda = ( a, b ) -> {
    System.out.println(a + b);
};

```
만약 인터페이스가 하나의 매개변수만 있다면 ()도 생략 가능합니다. 

```java
public interface Ramda {
    public void justOne( int a );
}

```

```java
Ramda ramda = a -> {
    System.out.println(a);
};
```
만약 하나의 실행문만 존재한다면 중괄호 {}도 생략 가능합니다.
```java
Ramda ramda = a ->  System.out.println(a);
```
만약 매개변수가 없더라도 () -> 는 항상 적어주어야 합니다. <br>

<br>
리턴이 있는 경우는 아래처럼 가능합니다. 
```java
Ramda ramda = a ->  { return a+10; };
```
다만 중괄호에 return문만 존재하는 경우 아래처럼 가능합니다. 
```java
Ramda ramda = a -> a+10;
```

## Step 3 : 함수적 인터페이스 
인터페이스 내부 추상 메서드가 1개인 경우에만 람다식을 이용해 구현 객체를 생성할 수 있습니다. 
이러한 인터페이스를 함수적 인터페이스라고 합니다. 
함수적 인터페이스라는 것을 구체적으로 명시하는 벙법은 @FunctionalInterface어노테이션을 사용하는 것입니다. 


```java
@FunctionalInterface
public interface Ramda {
    public int justOne( int a );
}
```
해당 어노테이션을 붙이고 내부에 2개 이상의 추상 메소드가 적혀 있으면 에러를 확인할 수 있습니다. 

## Step 4 : this 키워드 
람다식 내부에서 사용할 수 있는 this키워드에 대한 설명입니다. 
```java
public class BeforeTest  {
    public int outField = 10;
    public class Inner {
        int innerField = 20;
        
        public void method( int testValue ) {
            Ramda ramda =  a -> {
                // BeforeTest.this.outField : 바깥 변수 
                // this.innerField : inner 클래스 변수
                // testValue 메소드 로컬 변수 
                // a : justOne 실행시 받아오는 변수 
                return BeforeTest.this.outField + this.innerField + testValue + a;
            };
            
            System.out.println(ramda.justOne(10));
        }
    }
}
```
```java
public static void main(String args[]){
    BeforeTest beforeTest = new BeforeTest();
    BeforeTest.Inner inner = beforeTest.new Inner();
    inner.method(100);
}

```

## Step 5 : 메소드 참조
메소드 참조는 매개변수를 그대로 전달하여 불필요한 매개변수를 줄이는 것을 목적으로 합니다. 아래는 위에서 배운 내용을 토대로 작성한 코드입니다.

```java
@FunctionalInterface
public interface Ramda {
    public int justOne( int a, int b );
}
```
```java
public static void main(String args[]){
    Ramda ramda = ( a, b ) -> Math.max( a, b );
    System.out.println( ramda.justOne(10, 11) );
}
```

해당 내용을 메소드 참조를 통해 생략한다면 아래처럼 가능합니다. 

```java
public static void main(String args[]){
    Ramda ramda = Math :: max;
    System.out.println( ramda.justOne(10, 11) );
}
```

### 정적 메소드 참조
방법은 정적 메소드를 참조할 경우 클래스 이름(Math) 뒤 :: 를 붙이고 정적 메소드 이름 ( max )를 기술하면 됩니다. 

### 인스턴스 메소드 참조 
인스턴스 메소드 일 경우에 먼저 객체를 생성한 후 참조 변수 뒤에 :: 를 붙이고 메소드명을 기술하면 됩니다. 
```java
public class BeforeTest  {
    public int sum( int a, int b ) {
        return a + b;
    }
}

```
```java
public static void main(String args[]){
    BeforeTest beforeTest = new BeforeTest();
    Ramda ramda = beforeTest :: sum;
    System.out.println( ramda.justOne(10, 11) )
}

```
### 생성자 참조 
객체 생성을 단순히 생성자 참조로 대치할 수 있습니다. 

```java
@FunctionalInterface
public interface Ramda {
    public BeforeTest justOne( int a, int b );
}
```

```java
public class BeforeTest  {
    int a;
    int b;

    public BeforeTest(int a, int b) {
        this.a = a;
        this.b = b;
    }
    
}
```
```java
public static void main(String args[]){
    Ramda ramda = BeforeTest :: new;
}
```


**참고자료** <br> <br>
-- 이것이 자바다 (한빛 미디어)<br> 
{: .notice--info}