---
title: JAVA 인터페이스에 대한 정리
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- JAVA
description: 자주 사용하는 인터페이스(interface)에 대해 조금 더 개념적으로 접근하고자 하여 정리하였습니다. 내부적으로 중첩 인터페이스,
  중첩 클래스 또한 다루었습니다.
article_tag1: Interface
article_section: JAVA의 Interface이란 무엇인가
meta_keywords: JAVA, Interface, 중첩 클래스, 중첩 인터페이스
last_modified_at: '2020-02-23 14:00:00 +0800'
toc: true
toc_sticky: true
toc_label: 목차
---

## Step 1: 자바에서 인터페이스(Interface)란?
자바에서 인터페이스란 하나의 **설계도**입니다. 즉 인터페이스라는 껍데기를 만들어 놓고 어떤 클래스든 해당 인터페이스를 구현하려면 껍데기가 가지고 있는 메서드를 Override해야 완성이됩니다. 개발 코드와 구현 객체와의 중간 다리를 하는 인터페이스의 장점은 사용자로서는 개발 로직을 모르더라도 인터페이스의 정의된 메서드만 호출하여 사용하면 되고, 개발자로서 인터페이스의 정의된 메서드만 구현하면 되기 때문에 개발코드와 객체가 서로 통신하는 접점 역할을 합니다. 중간 다리로서 인터페이스는 인터페이스를 구현한 클래스를 바꾸기만 하면 되기 때문에 사용자는 원하는 **객체를 쉽게 교체**할 수 있고 로직을 변경하지 않아도 됩니다.

```java
// 인터페이스 
public interface MakePizza {
    public abstract void makePizza();
}
```
```java
// 구현 클래스 1
public class MakePepperoniPizza implements MakePizza {
    @Override
    public void makePizza() {
        System.out.println("페페로니 피자를 만듭니다.");
    }
}
```
```java
// 구현 클래스 2
public class MakeMacaroniPizza implements MakePizza {
    @Override
    public void makePizza() {
        System.out.println("마카로니 피자를 만듭니다.");
    }
}
```
```java
// 사용자 - 마카로니 피자가 먹고 싶은 경우 
public static void main(String args[]){
	MakePizza pizza = new MakeMacaroniPizza();
	System.out.println("배고픈데 오늘은...");
    pizza.makePizza();
}

```
```java
// 사용자 - 나중에 페페로니 피자가 먹고 싶은 경우 
public static void main(String args[]){
	MakePizza pizza = new MakePepperoniPizza();
	System.out.println("배고픈데 오늘은...");
    pizza.makePizza();
}
```


## Step 2: 인터페이스 선언
 일반 클래스는 필드와 메서드를 구성 멤버로 가지는 데 비해, 인터페이스는 **상수(static final)와 추상 메서드만**을 구성 멤버로 가집니다. JAVA 7 이전까지는 인터페이스는 실행 블록이 없는 추상 메서드로만 선언이 가능했지만, **JAVA 8부터 디폴트 메서드와 정적 메서드 선언이 가능**합니다. 인터페이스 내부는 상수 필드와 추상 메서드만을 가질 수 있기에 상수를 의미하는 **public static final이 필드 앞에 생략**하여도 컴파일 과정에서 자동으로 해당 키워드를 삽입합니다. 마찬가지로 추상 메서드 또한 **public abstract를 생략**하더라도 자동으로 삽입됩니다.

```java
public interface MakePizza {
    public static final int CHECK_DEGREE = 400;
    String BASE = "핵 맛있는 피자";
    
    public abstract void makePizza();
    void makeBestPizza();
}

```

### 디폴트 메서드 

디폴트 메서드는 자바 8에서 새롭게 추가된 멤버로 일반 클래스의 메서드와 작성 방식은 같지만, 앞에 **default**키워드를 적어줍니다. 기본이 public이라 public을 생략하면 자동으로 붙여줍니다.
```java
public interface MakePizza {
    public static final int CHECK_DEGREE = 400;
    String BASE = "핵 맛있는 피자";
    
    public abstract void makePizza();
    void makeBestPizza();
		
    // 디폴트 메서드
    public default void isBestPizza( String name ) {
        System.out.println( name + "이 가장 맛있는 피자입니다.");
    }
    
    default void isWorstPizza( String name ) {
        System.out.println( name + "이 가장 맛없는 피자입니다.");
    }
}
```

디폴트 메서드는 인터페이스가 로직을 가지고 있지만 실제로는 인터페이스를 구현한 모든 객체에 기본적으로 들어가는 메서드라고 생각하면 됩니다. 또한, 구현하는 측에서 재정의해서 사용할 수 있습니다.


### 정적 메서드
정적 메서드는 디폴트 메서드와 마찬가지로 새롭게 추가된 멤버입니다. 항상 public하기 때문에 생략하여도 자동으로 삽입됩니다.

```java
public interface MakePizza {
    public static final int CHECK_DEGREE = 400;
    String BASE = "핵 맛있는 피자";
   
	 // 정적 메서드
    static void sayHack() {
        System.out.println(BASE);
    }
}
```

## Step 3: 익명 구현 객체 
일반적으로 인터페이스는 구현 클래스를 만들어 사용하는 것이 일반적이지만 만약 **일회성**이라면 굳이 새로운 소스로 만들지 않고도 구현 객체를 만드는 방법이 있습니다. 다만 기억해야 할 것은 하나의 실행문을 작성 후 세미콜론을 빼먹으면 안 됩니다.

```java
MakePizza pizza = new MakePizza() {
	@Override
	public void makePizza() {
		System.out.println("오늘은 막피자를 만들자!");
	}
	
	@Override
	public void makeBestPizza() {
		System.out.println("기분에 따라 달라~");
	}
};
```
디버깅할 때 클래스명$1.css처럼 $1과 같은 표시는 이런 클래스 안에 익명 구현 객체를 표현한 것입니다.

## Step 4: 중첩 클래스와 중첩 인터페이스
객체지향은 클래스 사이 긴밀한 관계를 가지고 있지만 어떤 클래스는 특정 클래스와 관계를 맺는 경우가 있습니다. 클래스가 여러 클래스와 소통하면 독립적인 파일로 존재하면 되지만 그럴 필요 없는 경우 클래스 내부에 클래스를 선언하는 방법이 있습니다. 이를 중첩 클래스 ( Nested Class )라 합니다. 중첩 인터페이스 또한 클래스 내부에 선언된 인터페이스를 말합니다.

```java
public class TestClass {
    // 중첩 클래스 
    class NestedClass {
        
    }
    
    // 중첩 인터페이스
    interface NestedInterface {
        
    }
}
```

### 중첩 클래스 
중첩 클래스는 내부에 선언된 위치에 따라 두 가지로 분류됩니다. 하나는 클래스의 멤버로서 선언되는 중첩 클래스를 **멤버 클래스**라고 하고, 매소드 내부에서 선언된 중첩 클래스를 **로컬 클래스**라고 합니다. 당연히 멤버 클래스는 객체가 살아있으면 언제든 재사용할 수 있지만 로컬 클래스는 메소드가 살아있는 순간에만 사용 가능합니다.<br>
멤버 클래스는 세부적으로 **인스턴스 멤버 클래스**( 객체를 생성해야지만 접근 가능 ), **정적 멤버 클래스** ( A 클래스로 바로 접근 가능 )로 나누어집니다.

```java
public class TestClass {
    // 인스턴스 멤버 클래스 
    class NestedClass {
        
    }
    
    // 정적 멤버 클래스 
    static class StaticNestedClass {
        
    }
    
    // 로컬 클래스
    public void testMethod() {
        class NestedClass {
            
        }
    }
    
    // 중첩 인터페이스
    interface NestedInterface {
        
    }
}

```

멤버 클래스도 하나의 클래스이기 때문에 바깥클래스 $ 멤버클래스 .class로 바이트코드가 별도로 생성됩니다. 로컬 클래스일 경우 바깥클래스 $1 로컬클래스.class로 파일이 생성됩니다.

#### 인스턴스 멤버 클래스 
인스턴스 멤버 클래스 내부 멤버는 인스턴스 필드와 메소드만 선언 가능합니다. 즉 static키워드가 붙은 정적 필드와 메소드는 선언 불가능합니다. 객체를 생성하기 위해서는 바깥 클래스를 생성 후 인스턴트 멤버 클래스를 생성해야 합니다. 
```java
public class TestClass {
    // 인스턴스 멤버 클래스 
    class NestedClass {
        private int temp;
       
        public NestedClass(int temp) {
            this.temp = temp;
        }
        
        public int getTemp() {
            return temp;
        }
    }
}
```
```java
public static void main(String args[]){
	TestClass testClass = new TestClass();
	TestClass.NestedClass nestedClass = testClass.new NestedClass(100);

	System.out.println("중첩 클래스 테스트  temp값: " + nestedClass.getTemp());
}

```
{% highlight wl linenos %}
//결과 
중첩 클래스 테스트 temp값: 100

{% endhighlight %}

#### 정적 멤버 클래스 
정적 멤버 클래스는 인스턴스 멤버 클래스와 다르게 모든 필드와 메서드를 멤버로 가질 수 있습니다. 선언과 사용은 아래와 같습니다.
```java
public class TestClass {
    // 정적 멤버 클래스 
    static class StaticNestedClass {
        private int temp;
        private static int staticvalue;
        
        public StaticNestedClass(int temp, int staticvlaue) {
            this.temp = temp;
            StaticNestedClass.staticvalue = staticvlaue;
        }
        public int getTemp() {
            return temp;
        }
        public static int getStaticvalue() {
            return staticvalue;
        }
    }
}

```
```java
public static void main(String args[]){
	TestClass.StaticNestedClass testClass = new TestClass.StaticNestedClass(10, 200);
	
	System.out.println("중첩 클래스 테스트  temp값: " + testClass.getTemp());
	System.out.println("중첩 클래스 테스트  staticvlaue값: " + testClass.getStaticvalue());
	System.out.println("중첩 클래스 테스트  staticvlaue값: " + TestClass.StaticNestedClass.getStaticvalue());
}

```
{% highlight wl linenos %}
// 결과 
중첩 클래스 테스트  temp값: 10
중첩 클래스 테스트  staticvlaue값: 200
중첩 클래스 테스트  staticvlaue값: 200

{% endhighlight %}

#### 로컬 클래스
로컬 클래스는 메소드 내에서 사용하고 사라지는 클래스로 접근 제한자 (public, private) 및 static을 사용할 수 없습니다. ( 정확히는 필요가 없습니다. ) 로컬 클래스는 주로 비동기 처리를 위해 스레드 객체를 만들 때 사용합니다. 나중 스레드 정리 후 추가로 포스트 하겠습니다. 추가로 중첩 클래스에서 바깥 클래스의 멤버를 참조할 때는 바깥클래스이름.this.멤버
```java
public class TestClass {
    // 로컬 클래스
    private int temp = 1000;
    
    public void testMethod() {
        class NestedClass {
            int temp;
            NestedClass(int temp) {
                this.temp = temp;
            }
        }
        
        NestedClass nestedClass = new NestedClass(100);
        System.out.println("로컬 클래스 테스트 : " + ( TestClass.this.temp + nestedClass.temp ) );
    }
}
```
```java
public static void main(String args[]){
	TestClass testClass= new TestClass();
	testClass.testMethod();
}

```
{% highlight wl linenos %}
// 결과 
로컬 클래스 테스트 : 1100

{% endhighlight %}

### 중첩 인터페이스
중첩 인터페이스란 클래스의 멤버로서 선언된 인터페이스를 말합니다. 인터페이스를 별도의 파일로 분리하지 않고 클래스 내부에 선언하는 이유는 해당 클래스와 인터페이스가 긴밀한 관계로 이루어져 있어 있고, 별도의 분리 파일보단 해당 클래스에서 꼭 필요하고 해당 클래스에서만 필요한 인터페이스인 경우 선언하지 않을까 싶습니다. 특히 UI 프로그래밍에서 이벤트를 처리할 목적을 많이 활용된다고 합니다. 아래 예시는 Button을 클릭했을 때, Button 내부에 선언한 중첩 인터페이스를 구현한 클래스를 받고 싶을 때 처리 방법입니다. 
```java
public class TestClass {
    
    private OnclikListener listener;
    
    public void setOnclickLister( OnclikListener listener ) {
        this.listener = listener;
    }
    
    public void touch() {
        listener.onClick();
    }
    
    // 중첩 인터페이스
    interface OnclikListener {
        void onClick();
    }
}

```
```java
public class NestedOnclickListener1Impl implements TestClass.OnclikListener {

    @Override
    public void onClick() {
        System.out.println("전화를 겁니다.");
    }

}

```
```java
public class NestedOnclickListener2Impl implements TestClass.OnclikListener {

    @Override
    public void onClick() {
        System.out.println("메시지를 보냅니다.");
    }

}

```
```java
public static void main(String args[]){
	TestClass testClass= new TestClass();
	testClass.setOnclickLister(new NestedOnclickListener1Impl());
	testClass.touch();
	
	testClass.setOnclickLister(new NestedOnclickListener2Impl());
	testClass.touch();
}
```
{% highlight wl linenos %}
// 결과 
전화를 겁니다.
메시지를 보냅니다.

{% endhighlight %}

**참고자료** <br> 
-- 이것이 자바다 (한빛 미디어)<br> 
{: .notice--info}