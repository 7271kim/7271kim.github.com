---
title: JAVA 어노테이션에 대한 정리
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- JAVA
description: 자주 등장하는 어노테이션(annotation)에 대해 조금더 개념적으로 접근하고자 하여 정리하였습니다.
article_tag1: Annotation
article_section: JAVA의 Annotation이란 무엇인가
meta_keywords: JAVA, Annotation, Annotation Type, Element
last_modified_at: '2020-02-16 16:00:00 +0800'
toc: true
toc_sticky: true
toc_label: 목차
---

## Step 1: 자바에서 어노테이션(Annotation)이란?
Anonotation은 메타데이터(metadata) 즉 컴파일 과정과 실행 과정에서 코드를 어떻게 컴파일하고 처리할 것인지를 알려주는 정보입니다. 주로 컴파일러에게 코드 문법 에러를 검사하도록 정보를 제공하거나 코드를 자동으로 생성할 수 있도록 정보를 제공, 런타임 시 특정 기능을 실행하도록 정보를 제공합니다. 사용 방식은 @ + 어노테이션 명으로 사용할 수 있습니다. 그렇다면 이제 어노테이션을 어떻게 정의하고 적용하는지 알아보겠습니다.

## Step 2: 어노테이션 타입 정의
 어노테이션의 타입을 정의하는 방법은@interface를 사용하여 정의합니다. public @interface {어노테이션 이름}이 기본 정의 방법입니다. 

```java
public @interface myanotation {

}
```
어노테이션은 **엘리멘트( Element )**라는 것을 멤버로 가질 수 있습니다. Element는 타입과 이름으로 구성되며 디폴트값을 가질 수 있습니다. 엘리먼트의 이름 뒤에는 메서드를 작성하는 것처럼 **뒤에 ()**를 꼭 붙여야 합니다. 

```java
public @interface myanotation {
    //Element들
    String myname();
    int myage();
}
```
이렇게 정의한 어노테이션은 @myanotation(myName = "김석진" , myAge = 33 ) 혹은 @myanotation(myName = "김석진" , myAge = 33, myWeight = 74 ) 처럼 사용할 수 있습니다. 디폴트 값이 없는 경우에는 반드시 기술해야 하며 있는 경우는 옵션입니다. **기본 엘리멘트는 value**이며 해당 값은 @어노테이션(값)으로 바로 사용 가능합니다.


```java
public @interface myanotation {
    String value();
}
```

```java
// 사용 부 예시
@myanotation("test")
```

## Step 3: 어노테이션 적용 대상 
기본적으로 어노테이션을 적용할 수 있는 범위는 미리 정의되어 있습니다. java.lang.annotation.ElementType에 열거 상수로 아래와 같은 값들이 있습니다.
```ruby
TYPE : 클래스, 인터페이스, 열거 타입에 적용합니다.
ANNOTATION_TYPE : 어노테이션에 적용합니다.
FIELD : 필드에 적용합니다. 
CONSTRUCTOR: 생성자에 적용합니다. 
METHOD: 메서드에 적용합니다.
LOCAL_VARIABLE: 로컬 변수에 사용합니다.
PACKAGE: 패키지에 사용합니다.
```
어노테이션이 적용될 대상을 지정할 때 @Target 어노테이션을 사용합니다. @Target의 기본 엘리멘트( value() )는 ElementType의 열거상수를 배열을 값으로 가질 수 있습니다. 사용법은 아래와 같습니다. 예를 들어 **myanotation은 필드와 메서드에 사용할 수 있는 어노테이션이라고 적용 대상을 한정**한다면 아래와 같습니다.

```java
@Target(value = { ElementType.FIELD , ElementType.METHOD })
public @interface myanotation {
    String value();
}
```

## Step 4: 어노테이션 유지정책 
어노테이션 정의 시 한 가지 더 추가해야 합니다. 사용 용도에 따라 해당 어노테이션을 어디까지 유지할 것인지 지정하는 것입니다. 소스상에만 유지할 것인지 >> 컴파일된 클래스까지 유지할 것인지 >> 런타임 시에도 유지할 것인지 정해야 합니다. 해당 정책들은 아래와 같으며 java.lang.annotation.RetentionPolicy 열거 상수로 다음과 같이 정의되어 있습니다.

```ruby
SOURCE : 소스상에서만 어노테이션을 유지하고 .class파일로 변경된 후에는 흔적이 남아 있지 않을 경우입니다. 주로 소스 코드를 분석할 때 사용되는 범위입니다. 
CLASS : 바이트 코드에도 어노테이션 정보를 유지하는 것입니다. 추후 다루겠지만 리플렉션을 이용해서 어노테이션 정보를 얻을 수 없습니다. 
RUNTIME : 리플렉션을 이용해서 런타임시에 어노테이션 정보를 얻을 수 있습니다.
```

**리플렉션(Reflecion)이란 간단히 말해 Runtime시에 클래스의 메타 정보를 얻는 기능**을 말합니다. 예를 들어 클래스가 가지고 있는 필드가 무엇인지, 어떤 메서드를 가졌는지 등 클래스에 대한 정보를 알아내는 것을 리플랙션이라고 합니다. 유지 정책을 정할 때는 @Retention어노테이션을 사용합니다. 기본 value()는 RetentionPolicy 열거 타입을 지정하면 됩니다. 위 값 중 하나를 지정하면 됩니다.

```java
@Target({ ElementType.FIELD , ElementType.METHOD })
@Retention(RetentionPolicy.CLASS)
public @interface Myanotation {
    String value();
}

```

## Step 5: Runtime 시 어노테이션 정보 사용하기 
테이션 자체는 아무런 동작을 하지 않는 **단순한 표식일 뿐**이지만 리플랙션을 통해 런타임 시 엘리먼트 값을 이용해 특정 작업을 수행할 수 있습니다. 우선 클래스에 적용된 어노테이션 정보를 얻으려면 java.lang.Class를 이용하면 되지만 Class내부 필드와 생성자, 메서드의 적용된 어노테이션의 정보를 얻으려면 java.lang.reflect 패키지의 Field, Constructor, Method 타입의 배열을 얻어야 합니다.

```java
getFields() :  필드 정보를 Field배열인 Field[]로 리턴한다.
getConstructors() :  생성자 정보를 Constructor배열인 Constructor[]로 리턴한다. 
getDeclaredMethods() : 메서드 정보를 Method배열인 Method[]로 리턴한다. 
```
이후 Field, Constructor, Method 객체가 가지고 있는 다음 메서드를 통해 적용된 어노테이션 정보를 얻을 수 있습니다. 

```java
isAnnotationPresent( Class<? extends Anotation> annotationClass )
: 지정한 어노테이션이 적용되었는지 여부를 boolean타입으로 리턴합니다. Class에서 호출했을 때 상위 클래스에 적용된 경우도 true를 리턴합니다.
getAnnotation( Class<T> annotationClass )
: 지정한 어노테이션이 적용되어 있으면 해당 어노테이션을 리턴하고 없을 시 null을 리턴합니다. 마찬가지로 상위 클래스에 적용되어도 같습니다.
getAnnotations()
: 적용된 모든 어노테이션을 Annotation[] 배열로 받습니다. 상위클래스도 포함합니다. 
getDelaredAnnotations()
: 상위 클래스를 제외한 직접 적용된 어노테이션 배열을 리턴합니다.
```

이제 Test 클래스에서 @Myannoation이 붙은 매서드를 찾아 절취선으로 구분하고 해당 메서드를 실행하는 코드를 예제를 진행해보겠습니다. method.invoke( new Test() )는 특정 객체를 생성하고 생성된 객체의 메서드를 호출하는 코드입니다.    

```java
@Target({ ElementType.METHOD })
@Retention(RetentionPolicy.RUNTIME)
public @interface Myanotation {
    String value() default "-";
    int number() default 15;
}
```

```java
public class Test {
    @Myanotation
    public void testAnnotation() {
        System.out.println("절취선 어노테이션을 테스트 합니다.");
    }
    
    @Myanotation(value = "*")
    public void testAnnotation2() {
        System.out.println("**를 구분자로 가지는 어노테이션을 추적합니다.");
    }
}
```

```java
public static void main(String args[]){
        Method[] declMethods = Test.class.getDeclaredMethods();
        for (Method method : declMethods) {
            if( method.isAnnotationPresent( Myanotation.class ) ) {
                System.out.println("[" + method.getName() + "]");
                Myanotation settingMy = method.getAnnotation( Myanotation.class );
                for (int index = 0; index < settingMy.number(); index++) {
                    System.out.print(settingMy.value());
                }
                System.out.println();
                
                try {
                    method.invoke( new Test() );
                } catch (Exception e) {
                }
                for (int index = 0; index < settingMy.number(); index++) {
                    System.out.print(settingMy.value());
                }
                System.out.println();
                System.out.println();
            }
        }
}

```
{% highlight wl linenos %}
// 출력
[testAnnotation2]
***************
**를 구분자로 가지는 어노테이션을 추적합니다.
***************
[testAnnotation]
---------------
절취선 어노테이션을 테스트 합니다.
---------------
{% endhighlight %}


**참고자료** <br> 
-- 이것이 자바다 (한빛 미디어)<br> 
{: .notice--info}