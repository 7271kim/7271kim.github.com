---
title: 생성자 대신 정적 팩터리 메서드를 고려하라.
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- JAVA
tag:
- 이펙티브 자바( Effective Java )
description: 이펙티브 자바 책을 보면서 Static Factory Method에 대해 정리한 부분을 공유합니다.
article_tag1: 이펙티브 자바
article_section: 정적 팩터리 메서드란 무엇인가.
meta_keywords: JAVA, Effective Java
last_modified_at: '2020-03-01 14:00:00 +0800'
toc: true
toc_sticky: true
toc_label: 목차
---

## 정적 팩터리 메서드(Static Factory Method)란?
JAVA에서 정적 팩터리 메서드란 private 생성자를 통해 new를 통한 객체 생성을 감추고 static 메서드를 통해 객체 생성을 캡슐화하는 디자인 패턴을 말합니다. 기본적인 방법은 아래와 같습니다.
```java
public class StaticFactoryMethod {

    private int number;
    private String address;
    private String name;
    
    private StaticFactoryMethod() {
    }
    
    private StaticFactoryMethod( int number ) {
        this.number = number;
    }
    
    private StaticFactoryMethod( String address ) {
        this.address = address;
    }
    
    private StaticFactoryMethod( int number, String name ) {
        this.name = name;
    }
    
    static public StaticFactoryMethod getNewInstanceByNumber( int number ) {
        return new StaticFactoryMethod( number );
    }
    
    static public StaticFactoryMethod getNewInstanceByAddress( String address ) {
        return new StaticFactoryMethod( address );
    }
    
    static public StaticFactoryMethod getNewInstanceByName( String name ) {
        StaticFactoryMethod temp = new StaticFactoryMethod();
        temp.setName(name);
        return temp;
    }
    
    static public StaticFactoryMethod getNewInstanceByNumberAndName( int number , String name ) {
        return new StaticFactoryMethod( number, name );
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}

```
```java
public static void main(String args[]){
    StaticFactoryMethod staticFactoryMethod = StaticFactoryMethod.getNewInstanceByNumber(10);
    System.out.println("number : " + staticFactoryMethod.getNumber());
}

```
{% highlight wl linenos %}
// 출력 
number : 10
{% endhighlight %}

이러한 정적 팩터리 메서드가 항상 좋은 것이 아닌 장단점이 존재하기 때문에 상황에 따라 적절하게 사용한다면 좋은 코드가 나올 것입니다.

### 장점 1 : 이름을 가질 수 있다.
일반적인 생성자로 객체를 생성한다면 new StaticFactoryMethod( 1, "김석진" ); 처럼 해당 매개변수가 무슨 의미를 뜻하는지 알기 어렵습니다. 이러한 상황에서 위의 
케이스 처럼  정적 팩터리 메서드를 고려한다면 이름만 잘 지으면 반환될 객체의 특성을 쉽게 묘사할 수 있습니다. StaticFactoryMethod.getNewInstanceByNumberAndName(1, "김석진");

### 장점 2 : 호출될 때마다 인스턴스를 새로 생성하지 않도록 설계할 수 있다.
static으로 클래스객체를 미리 만들어 놓는다면 인스턴스 객체를 캐싱하여 재활용하여 불필요한 객체 생성을 낭비할 수 있습니다.

```java
public class StaticFactoryMethod {
    private static final StaticFactoryMethod STATIC_FACTORY_METHOD = new StaticFactoryMethod();
    
    private StaticFactoryMethod() {}
    
    static public StaticFactoryMethod getNewInstanceByNumber() {
        return STATIC_FACTORY_METHOD;
    }

}
```
```java
public static void main(String args[]){
    StaticFactoryMethod staticFactoryMethod = StaticFactoryMethod.getNewInstance();
    StaticFactoryMethod staticFactoryMethod2 = StaticFactoryMethod.getNewInstance();
    
    System.out.println("staticFactoryMethod == staticFactoryMethod2 :  " +  ( staticFactoryMethod == staticFactoryMethod2 ));
}

```
{% highlight wl linenos %}
// 출력 
staticFactoryMethod == staticFactoryMethod2 :  true
{% endhighlight %}

### 장점 3 : 반환 타입의 하위 타입 객체를 반환할 수 있다.
반환할 객체의 자유도를 높일 수 있기에 원하는 객체를 리턴 할 수 있습니다. 만약 특정 코드를 받아 코드에 따른 반환 객체를 자신 하위 타입 중 선택하게 한다면 아래와 같이 쉽게 처리할 수 있습니다.
```java
public abstract class StaticFactoryMethod {
    
    abstract void getName();
    
    static public StaticFactoryMethod getNewInstance( String code ) {
        StaticFactoryMethod staticFactoryMethod = null;
        if( code.indexOf("2") == 1 ) {
            staticFactoryMethod = new Point();
        } else {
            staticFactoryMethod = new Coupon();
        }
        return staticFactoryMethod;
    }
}
class Coupon extends StaticFactoryMethod {
    public void getName() {
        System.out.println("쿠폰을 발행합니다.");
    }
}

class Point extends StaticFactoryMethod {
    public void getName() {
        System.out.println("포인트 1000점을 적립합니다.");
    }
}

```
```java
public static void main(String args[]){
    StaticFactoryMethod staticFactoryMethod = StaticFactoryMethod.getNewInstance("223123");
    StaticFactoryMethod staticFactoryMethod1 = StaticFactoryMethod.getNewInstance("123123");
    staticFactoryMethod.getName();
    staticFactoryMethod1.getName();
}
```
{% highlight wl linenos %}
// 출력
쿠폰을 발행합니다.
포인트 1000점을 적립합니다.
{% endhighlight %}

### 장점 4 : 입력 매개변수에 따라 매번 다른 클래스의 객체를 반환할 수 있다.
장점 3과 비슷한 의미입니다. 예를 들면 같은 이름의 메서드지만 매개변수의 개수에 따라 리턴받는 클래스를 아무 하위타입 클래스를 리턴 받을 수 있다는 것입니다.
```java
public abstract class StaticFactoryMethodType {
    public abstract void getName();
    
    static public StaticFactoryMethodType getNewInstance( String code ) {
        return new OneClass();
    }
    static public StaticFactoryMethodType getNewInstance( String code, String name ) {
        return new TwoClass();
    }

}

class OneClass extends StaticFactoryMethodType {
    public void getName() {
        System.out.println("쿠폰을 발행합니다.");
    }
}

class TwoClass extends StaticFactoryMethodType {
    public void getName() {
        System.out.println("포인트 1000점을 적립합니다.");
    }
}
```
```java
public static void main(String args[]){
    StaticFactoryMethodType isOneObj = StaticFactoryMethodType.getNewInstance("code");
    StaticFactoryMethodType isTwoObj = StaticFactoryMethodType.getNewInstance("code","name");
    isOneObj.getName();
    isTwoObj.getName();
}
```
{% highlight wl linenos %}
// 출력 
쿠폰을 발행합니다.
포인트 1000점을 적립합니다.
{% endhighlight %}

### 장점 5 : 정적 팩터리 메서드를 작성하는 시점에서 반환할 객체의 클래스가 존재하지 않아도 된다.
장점 3, 4와 관련된 유연함에 관한 내용으로 메서드 안에서 객체를 반환할 때, 당장 클래스가 존재하지 않아도 특정 텍스트 파일에서 인터페이스 구현체의 위치를 알려주는 곳의 정보를 가지고 해당 객체를 읽어 생성할 수 있습니다.

```java
package algorithm.dataStructure;

public abstract class StaticFactoryMethodType {
    
    public abstract void getName();
    
    public static StaticFactoryMethodType getNewInstance() {
        StaticFactoryMethodType temp = null;
        try {
            Class<?> childClass = Class.forName("algorithm.dataStructure.StaticFactoryMethodTypeChild");
            temp = (StaticFactoryMethodType) childClass.newInstance();
            
        }catch (ClassNotFoundException e) {
           System.out.println("클래스가 없습니다.");
        } catch (InstantiationException  e) {
            System.out.println("메모리에 올릴수 없습니다.");
        } catch (IllegalAccessException  e) {
            System.out.println("클래스파일 접근 오류입니다.");
        }
        
        return temp;
    }
}

```
```java
package algorithm.dataStructure;

public class StaticFactoryMethodTypeChild extends StaticFactoryMethodType {

    @Override
    public void getName() {
        System.out.println("정상 로드 되었습니다");
    }

}
```
```java
public static void main(String args[]){
    StaticFactoryMethodType staticFactoryMethodType = StaticFactoryMethodType.getNewInstance();
    
    staticFactoryMethodType.getName();
}
```
{% highlight wl linenos %}
// 결과 
정상 로드 되었습니다
{% endhighlight %}

### 단점
private 생성자만 제공한다면 상속이 되지 않습니다. 하위 타입의 클래스 상속을 허용하려면 public 혹은 protected 생성자가 필요합니다. 또한, 정적 팩터리 메서드를 사용하기 위해서는 해당 클래스를 인스턴스화 하는 방법을 찾아야 합니다. new를 통한 인스턴스화는 모든 개발자가 알고 있지만 매서드를 통해 제공한다면 찾아야 합니다.

**참고자료** <br> 
-- Effectie Java 3/E - 조슈아 블로크<br>
-- [ https://www.youtube.com/watch?v=X7RXP6EI-5E&t=456s ]({{"https://www.youtube.com/watch?v=X7RXP6EI-5E&t=456s"}}){:target="_blank"} (백기선 강사님 강의)<br>
-- [ https://johngrib.github.io/wiki/static-factory-method-pattern/ ]({{"https://johngrib.github.io/wiki/static-factory-method-pattern/"}}){:target="_blank"} 
{: .notice--info}