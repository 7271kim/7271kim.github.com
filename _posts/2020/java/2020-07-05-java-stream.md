---
title: JAVA 스트림(Stream)
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- JAVA
description: JAVA에서 말하는 Stream이 무엇인지 가볍게 살펴보겠습니다.
article_tag1: Stream
article_section: 스트림
meta_keywords: JAVA, Stream, 중각처리, 최종처리
last_modified_at: '2020-07-05 14:00:00 +0800'
toc: true
toc_sticky: true
toc_label: 목차
---
# Step 1 : 스트림(Stream)과 병렬처리
 Stream의 장점은 흔히들 가독성을 꼽습니다. 여러 줄의 코드가 한 줄로 줄어드는 마법같은 일을 할 수 있게 Java 8 Stream API에서 제공해 주고 있습니다. 
 다만 Stream을 실무에서 사용하기 위해서는 충분한 공부와 학습이 필요합니다. 특히 개인 뿐만이 아니라 팀원 들도 충분히 Stream을 알아야 하기에.. 아쉽게도 아직은 Stream으로 제대로 된 작업을 진행해 본적이 없습니다. 
 안쓰면 잘 잊어버리기에 깊이 있는 포스트는 못 되더라도 책보고 기본적인 코드만 정리하겠습니다.(단순 남의 코드를 해석하기 위한) Stream을 사용하기 위해서는 꼭 다른 주의사항 같은 포스트를 읽어보고 Stream의 단점 및 주의사항을 확인하는 것이 좋습니다. 


```java
// 기존 코드 
public class Student {
    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}

```
```java
public static void main(String args[]){
        
    List<Student> students = Arrays.asList( 
                new Student("김석진", 10),
                new Student("이석진", 11),
                new Student("박석진", 13)
            );
    
    for (Student student : students) {
        System.out.println(student.getName() + " " + student.getAge()+"살.");
    
    }
}
```
{% highlight wl linenos %}
김석진 10살.
이석진 11살.
박석진 13살.

{% endhighlight %}


```java
// 스트림 사용 
public static void main(String args[]){
        
    List<Student> students = Arrays.asList( 
                new Student("김석진", 10),
                new Student("이석진", 11),
                new Student("박석진", 13)
            );
    
    Stream<Student> studentStream = students.stream();
    studentStream.forEach( student -> System.out.println(student.getName() + " " + student.getAge()+"살.") );
}
```
# Step 2 : 스트림 사용하기
스트림을 사용하기 위해서는 스트림 객체를 얻어야 합니다. 아래는 다양하게 스트림을 얻는 방법을 기술하였습니다. 

## 컬렉션에서 얻기 
```java
List<String> texts = Arrays.asList("1","2");
Stream<String> stream = texts.stream();
Stream<String> parallelStream = texts.parallelStream();
```

## 배열에서 얻기
```java
String[] texts = {"1","2"};
Stream<String> stream = Arrays.stream(texts);
```

## 숫자 범위로부터 스트림 얻기 
```java
IntStream intStream = IntStream.rangeClosed(1, 100);
LongStream longStream = LongStream.rangeClosed(1, 100);

```

## 디렉토리에서 스트림 얻기 
```java
Stream<Path> directory = Files.list( Paths.get("D:/over_the_dream/NaverCloud/3.Programming"));
```

## 파일로부터 스트림 얻기 
```java
Stream<String> file = Files.lines( Paths.get("D:/over_the_dream/NaverCloud/3.Programming/1.개발 요청 사항들.txt"),Charset.defaultCharset());
```

# Step 3 : 스트림 중간처리 
스트림을 얻었다면 for문을 돌면서 중간 처리과정을 통해 데이터를 정제할 수 있습니다. 관련 메서드입니다.

```java
distinct() : 중복 제거
filter(...) : 조건 필터링 , true를 만족하는 요소만 필터링한다.
flatMapXXX() : 스트림의 요소를 복수개의 구성요소로 대체하고 합쳐 새로운 스트림을 생성한다.
mapXXX() :  스트림의 요소를 새로운 구성요소로 대체하고 합쳐 새로운 스트림을 생성한다.
asXXXStream() : 형변환. 
boxed() : 기본 타입을 방싱타입으로 형변환
sorted(...) : 요소를 정렬하여 필터링
peak(...) : 요소 전체를 반복

```

# Step 4 : 스트림 최종처리
```java
xxxMatch(...) : 스트림 요소 중 해당 조건에 만족하는 요소 여부를 boolean으로 반환합니다.
count() : 요소의 개수를 리턴
findFirst() : 첫번째 요소를 리턴 리턴 타입은 OptionalXXX
max( ... ) : 최대 요소를 리턴합니다. 리턴타입은 OptionalXXX
min(...) : 최소 요소를 리턴합니다. 리턴타입은 OptionalXXX
average() : 요소의 평균을 리턴합니다. 리턴타입은 OptionalDouble
sum() : 요소의 총 합을 리턴합니다. 리턴타입은 int, long, double
collect(...) : 최종 요소들을 Collection 객체로 담습니다.

```

**참고자료** <br> <br>
-- 이것이 자바다 (한빛 미디어)<br> 
{: .notice--info}