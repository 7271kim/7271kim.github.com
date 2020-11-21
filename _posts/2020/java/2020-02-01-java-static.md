---
title: Java에서 자주 보이는 Static이란 무엇일까?
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- JAVA
description: static을 제대로 이해하지 못하고 코딩하던 시절, 혼란스러웠던 부분이 있어 이를 방지하고자 static이 무엇인지 메모리
  구조와 함께 알아보겠습니다.
article_tag1: JAVA Static
article_tag2: JVM
article_tag3: static memory
article_section: JAVA Static 공부하기
meta_keywords: java,static,memory
last_modified_at: '2020-02-01 18:00:00 +0800'
toc: true
toc_sticky: true
toc_label: 목차
---

## Step 1: Static Base
클래스 안에서 static 키워드가 붙는 경우는 2가지가 존재합니다. 
하나는 변수 앞에 static 키워드가 붙는 케이스이며 이를  **static 변수 혹은 정적 변수**라고 합니다. 
```java
public static double pi = 3.14
```
다른 하나는 메서드 앞에 붙는 경우로 **static 메서드 혹은 정적 메서드**라고 합니다.
```java
public static int plus ( int x , int y ){
     return x + y; 
} 
```
## Step 2: JVM 메모리 구조
static 키워드를 이해하기 위해서는 JAVA에 꼭 필요한 JVM의 메모리 구조 및 실행 단계에 대한 이해가 선행되어야 합니다. 
JVM은 크게 Garbage collector, Execution Engine, Class Loader, Runtime Data Area 4가지 영역으로 나누어지고 이 중에서 static을 이해하는 데 필요한 **Class Loader와 Runtime Data Area(메모리 영역)**에 관해 이야기해보겠습니다.
 우리가 코드를 작성한다면 확장자가 java인 *.java 파일들을 만들 것입니다. 해당 java 파일들은 Java 컴파일러(javac)에 의해 .class파일인 JAVA Byte Code로 컴파일됩니다. 
 이렇게 컴파일된 바이트 코드들은 Class Loader가 메모리가 할당된 Runtime Data Area으로 코드들을 적재시킵니다.

**Please Note:** 좀 더 JVM에 대해 자세한 부분은 [JVM 포스트]({{"/java/java-jvm/"}}){:target="_blank"}를 참고하시기 바랍니다.
{: .notice--danger}

![jvm의 구조]({{ site.url }}{{ site.baseurl }}/assets/images/post/jvm/jvm-structure.png){: .align-center .open-new}

Runtime Data Area은 Method Area, Heap Area, Stack Area, PC register, Native Method Stack 총 5가지로 구분됩니다. 
이 중에서 static을 이해하는 데 필요한 3가지의 영역 중 하나인 **Method Area(Static Area)**은 초기 로드 필요한 정보들 즉 필요한 패키지 클래스, 인터페이스, 상수, **static변수**, final 변수, 클래스 멤버 변수 등 **로드된 후 메모리에 항상 상주하고 있는 영역**입니다. 
Stack Area는 클래스 안 메서드 실행 시 해당 영역이 할당되며 메서드에서 직접 사용할 지역 변수, 파라미터, 리턴 값, 참조 변수일 경우 주소 값들이 저장됩니다. 
Heap Area은 메서드 안에서 사용되는 객체들을 위한 영역으로 new를 통해 생성된 객체, 배열, immutal 객체 등의 메모리와 값이 저장됩니다. 

## Step 3: Static과 메모리 구조
클래스 로더가 .class파일을 탐색 중**static 키워드를 보는 순간 객체가 생성되지 않아도 항상 메모리를 할당해야 하는 멤버로 보고 Method Area(Static Area)에 메모리를 할당**합니다. 그래서 static 키워드가 붙은 멤버들은 **객체(인스턴스)에 소속된 변수가 아니라 클래스에 소속된 변수**이기 때문에 클래스 변수 혹은 클래스 메서드라고도 부릅니다. new를 통해 객체를 생성하면 각 인스턴스는 서로 독립적이지만 이러한 특징 그래서 **static 키워드가 붙은 멤버들은 모든 객체가 메모리 영역을 공유**하기에 공통으로 같은 영역을 바라보기에 아래와 같은 코드가 가능합니다.
```java
public class Counter {
    public static int count = 0;
    Counter() {
        this.count++;
        System.out.println(this.count);
    }
    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
    }
}
```

{% highlight wl linenos %}
1
2
출력 
{% endhighlight %}

같은 이유로 static 메서드 안에서는 사용할 변수들은 메모리에 올라가는 순서 때문에 아래와 같은 코드는 불가능합니다. (스태틱 메서드 안에서는 인스턴스 변수 접근이 불가능합니다)
```java
public class Counter {
    public int count = 0;
    Counter() {
        this.count++;
    }
    public static int getCount() {
        return count; // 에러 발생
    }
    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
	System.out.println(Counter.getCount());
    }
}
```
static키워드를 만난 순간 메모리에 적제시켜야 하는데 **count 변수에 대해 선언 및 메모리가 할당되어 있지 않아 에러가 발생**합니다. 
이를 해결하기 위해서는 **count변수를 static변수로** 만든다면 메모리 로드 시점에 count변수에 대한 선언이 존재하여 에러가 발생하지 않습니다. 
```java
public class Counter {
    public static int count = 0;
    Counter() {
        this.count++;
    }
    public static int getCount() {
        return count;
    }
    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
	System.out.println(Counter.getCount());
    }
}
```
## Step 4: Static 이슈
이러한 static의 특징들 때문에 메서드의 호출 시간이 짧아진다고 무분별한 static의 사용은 java에서 지양됩니다. 
첫째로 static 변수는 글로벌 변수에 가까우므로 **글로벌 변수는 인스턴스 변수보다 테스트가 까다로워집니다.** 
둘째 static 변수는 객체지향 프로그램의 원칙인 각 객체의 데이터들이 캡슐화되어야 한다는 원칙에 어긋나며 static 변수를 공유한 순간 서로에 영향을 주게 되어 어떤 사이드 이펙트가 발생할지 모른다고 생각됩니다. 
또한 오버라이딩을 할 수 없으므로 코드의 재사용성이 떨어질 뿐만 아니라 프로그램이 종료되기 전에 항상 메모리에 상주하고 있어 **자주 사용하지 않는 매서드가 누적된다면 GC에 수거되지 못하므로 오히려 메모리 낭비가 발생**합니다. 
이러한 이유로 **단순히 빠르다는 이유로 static 메서드 및 변수를 사용을 지양**해야 하며 여러 개의 인스턴스를 만드는 것을 피하고 싶다면 스레드 안정성을 가지는 싱글톤 패턴을 이용하여 클래스를 설계하는 것이 좋습니다.
그렇다면 어떤 경우에 static을 사용하는 것이 좋을까요? 자주 사용하는 객체 + 만드는데 오래 걸리고 메모리를 많이 사용하는 객체입니다. 예를 들어 아래와 같은 코드를 봅시다.
```java
public class SpellChecker {
    public boolean hasRomanNumeral(String inputText) { 
        return inputText.matches("^(?=[MDCLXVI])M*D?C{0,4}L?X{0,4}V?I{0,4}$"); 
     }
}
```
코드만 보면 큰 이슈가 없는 로마자를 확인하는 메서드입니다. 단 matches 매서드의 내부 로직을 확인해보면 new Pattern(regex, 0); 부분이 있는데 이 패턴 객체를 컴파일하는 부분이 있는데 Pattern 객체는 무거운 객체입니다. 때문에 matches 메서드를 호출할 때마다 Pattern 객체를 만드는 부분을 static final객체를 통하여 효율적으로 변경할 수 있습니다.
```java
public class SpellChecker {
    
    private static final Pattern ROMAN = Pattern.compile( "^(?=[MDCLXVI])M*D?C{0,4}L?X{0,4}V?I{0,4}$" );
    
    public boolean hasRomanNumeral(String inputText) { 
        return ROMAN.matcher(inputText).matches();
     }
}
```
비용이 많이 드는 Pattern 부분을 stataic final을 통해 한 번만 초기화 후 가져다 쓰는 로직으로 변경하여 메모리 낭비를 줄이고 속도를 증가시켰습니다. 물론 해당 코드의 이슈는 SpellChecker를 사용하지 않아도 ROMAN가 메모리에 항상 상주하는 것이 문제기 때문에 lazily initializing이라는 게으른 초기화 방법을 통해 제거할 수 있지만, 지연 초기화는 측정 가능한 성능 개선 없이 구현을 복잡하게 한다고 하여 추천하지 않는다고 합니다.


**참고자료** <br> <br>
-- 이펙티브 자바<br>
-- [https://www.youtube.com/watch?v=0yUxPUXS1pM&t=404s ]({{"https://www.youtube.com/watch?v=0yUxPUXS1pM&t=404s "}}){:target="_blank"} (백기선 강사님)<br>
{: .notice--info}