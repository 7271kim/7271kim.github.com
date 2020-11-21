---
title: JAVA 제네릭이란(Generic)?
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- JAVA
description: JAVA에서 Generic을사용하는 방법을 배우고 응용해보겠습니다.
article_tag1: 제네릭 타입
article_section: Generic이란
meta_keywords: JAVA,제네릭 타입, 멀티 타입 파라미터, 제한된 타입 파라미터
last_modified_at: '2020-03-15 14:00:00 +0800'
toc: true
toc_sticky: true
toc_label: 목차
---
JAVA 5부터 제네릭타입이 추가되었습니다. 
제네릭타입을 사용하면 컴파일 과정에서 잘못된 타입사용을 미리 방지할 수 있다는 장점이 있습니다. 
대부분의 API 도큐먼트를 보면 제네릭표현이 많으므로 API에 대한 깊은 이해를 위해서는 제네릭에 대한 이해는 필수입니다.

## Step 1 : 제네릭 타입
제네릭 **타입**은 &lt;>을 가지는 클래스와 인터페이스를 말합니다. 
&lt;>사이에는 &lt;T>처럼 사용 시에 정해지는 즉 사용 시에 받아올 객체에 대한 파라메터를 대표합니다. 
&lt;T>&lt;G> 등 원하는 문자를 넣어주면 됩니다. 그렇다면 이전 코드와 제네릭을 사용하는 코드를 비교해보겠습니다. 
아래의 클래스는 원하는 객체를 넣어주던 코드입니다.

```java
public class BeforeTest {
    private Object object;

    public void setObj( Object obj ) {
        this.object  = obj;
    }
    
    public Object getObj() {
        return object;
    }
}
```
```java
public static void main(String args[]){
    BeforeTest beforeTest = new BeforeTest();
    Integer tempInt = 100;
    beforeTest.setObj(tempInt);
    int sum = (Integer)beforeTest.getObj() + 1000;
    System.out.println("합은 : " + sum);
}
```
{% highlight wl linenos %}
// 결과 
합은 : 1100
{% endhighlight %}

위의 코드는 아쉬운 점은 모든 객체를 받아서 Setting 할 수 있지만 사용 시에 사용 객체로 형 변환 해야 합니다. 
또한 저장 시에도 보이진 않지만 Integer 객체가 Object 객체로 형 변환됩니다. 이런 문제를 해결한 제네릭을 이용한 방법입니다. 
클래스명 뒤에 &lt;T>을 붙이고 클래스 내부 T에서 T를 사용할 수 있습니다. 클라이언트 코드에서 T에 대한 타입을 정해줍니다.

```java
public class BeforeTest <T>{
    private T object;

    public void setObj( T obj ) {
        this.object  = obj;
    }
    
    public T getObj() {
        return object;
    }
}
```

```java
public static void main(String args[]){
    BeforeTest<Integer> beforeTest = new BeforeTest<Integer>();
    Integer tempInt = 100;
    beforeTest.setObj(tempInt);
    int sum = beforeTest.getObj() + 1000;
    System.out.println("합은 : " + sum);
}
```

## Step 2 : 멀티 타입 파라미터
제네릭 타입은 두 개 이상의 파라메터를 클라이언트 측에서 받아오고 싶을 때 &lt; A , B , ...> 처럼 사용할 수 있습니다.
```java
public class BeforeTest < A, B, C>{
    private A first;
    private B second;
    private C third;

    public void setFirst( A first ) {
        this.first  = first;
    }
    
    public void setSecond( B second ) {
        this.second= second;
    }
    
    public void setThird( C third ) {
        this.third = third;
    }
    
    public void show() {
        System.out.println("A의 타입은 : " + first.getClass().getTypeName());
        System.out.println("B의 타입은 : " + second.getClass().getTypeName());
        System.out.println("C의 타입은 : " + third.getClass().getTypeName());
    }
}
```

```java
public static void main(String args[]){
    BeforeTest<String, Integer, Double> beforeTest = new BeforeTest<>();
    beforeTest.setFirst("안녕하세요");
    beforeTest.setSecond(10);
    beforeTest.setThird(100.0);
    beforeTest.show();
}
```

{% highlight wl linenos %}
// 결과 
A의 타입은 : java.lang.String
B의 타입은 : java.lang.Integer
C의 타입은 : java.lang.Double
{% endhighlight %}

JAVA 7 이전에는 BeforeTest&lt;String, Integer, Double> beforeTest = new BeforeTest&lt;String, Integer, Double>() 처럼 new 뒤에도 &lt;>안 내용을 명시해야 했지만 java 7 이후에는 생략하여 BeforeTest&lt;String, Integer, Double> beforeTest = new BeforeTest&lt;>() 가 가능해졌습니다. 
이를 다이아몬드 연산자라고 부릅니다.

## Step 3 : 제네릭 메소드
제네릭 메소드는 매개타입 또는 리턴타입으로 타입파라메터를 갖는 메소드를 말합니다. 
선언하는 방법은 리턴타입 앞에 &lt;>를 추가하고 적어줍니다. 
즉 메소드에서 사용할 부분을 리턴타입 내부 &lt;>에 적어주고 뒤에서 사용하면 됩니다. 사용 방법은 아래와 같습니다.

```java
public class BeforeTest  {
    public <T> void show( T inputObj ) {
        if( inputObj.getClass().getTypeName().equals(String.class.getTypeName()) ) {
            System.out.println("문자입니다.");
            System.out.println(inputObj);
        } else if( inputObj.getClass().getTypeName().equals(Integer.class.getTypeName()) ) {
            System.out.println("숫자입니다.");
            System.out.println(inputObj);
        }
    }
}
```

```java
public class Main {
    public static void main(String args[]){
    BeforeTest beforeTest = new BeforeTest();
    beforeTest.show("문자열 주입");
    beforeTest.show(10);
}
```
{% highlight wl linenos %}
//출력
문자입니다.
문자열 주입
숫자입니다.
10
{% endhighlight %}

2개 이상 예제, Map에 해당 키가 담겨있나 확인하는 예제입니다.

```java
public class BeforeTest  {
    public < T , D > void show( Map< T, D > map, T key ) {
        System.out.println(map.containsKey(key));
    }
}
```
```java
public static void main(String args[]){
    BeforeTest beforeTest = new BeforeTest();
    Map<Integer, String> map = new HashMap<>();
    map.put(100, "100존재");
    map.put(10, "10존재");
    beforeTest.show(map, 100);
    beforeTest.show(map, 10);
    beforeTest.show(map, 1);
}
```
{% highlight wl linenos %}
// 출력
true
true
false
{% endhighlight %}

지금까지의 코드는 구체적인 타입을 java가 알아서 추정하도록 코드를 짰습니다. 
만약 구체적으로 타입을 명시하고 싶다면 위 클라이언트 코드에서 beforeTest.&lt; Integer, String >show(map, 100); 처럼 명시할 수 있습니다.

## Step 4 : 제한된 타입 파라미터
제네릭의 상위 타입을 구체적으로 제한하고 싶을 경우가 있습니다. 
메서드, 인터페이스, 클래스에서 동일하게 사용 가능하며 &lt; T extends 상위타입>으로 제한할 수 있습니다. 
예를 들어 내부에서 사용할 T 객체가 꼭 Number 클래스의 하위 타입이어야 할 때, 혹은 원하는 상위 인터페이스의 구현체이어야 할 때 사용 가능합니다. 그래야 메소드 안에서 필요한 인터페스의 메소드 혹은 클래스의 메소드를 사용할 수 있습니다.

```java
public class BeforeTest  {
    public < T extends Number, D extends Map > void show( D map, T key ) {
        System.out.println(map.containsKey(key));
    }
}
```
## Step 5 : 와일드카드 타입.
코드에서 ?를 일반적으로 와일드카드라고 부릅니다. 사용하는 경우는 아래와 같습니다.

![java 제네릭 하이라키]({{ site.url }}{{ site.baseurl }}/assets/images/post/java/generic.png){: .align-center .open-new}
### &lt;?>
모든 클래스나 인터페이스가 올 수 있습니다. 즉 제한없음.
A ~ E 모두 올 수 있다.
### &lt;? extends 상위타입>
상위타입 이하로만 올 수 있습니다.
&lt;? extends D> => D, E 가능 

### &lt;? supper 하위타입>
하위타입 이상으로만 올 수 있습니다.
&lt;? supper D> => D, A 가능



**참고자료** <br> <br>
-- 이것이 자바다 (한빛 미디어)<br> 
{: .notice--info}