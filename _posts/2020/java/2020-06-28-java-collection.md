---
title: JAVA 컬렉션(Collection)
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- JAVA
description: JAVA에서 말하는 Collection이 무엇인지 가볍게 살펴보겠습니다.
article_tag1: Collection
article_section: 컬렉션
meta_keywords: JAVA, List, Set,Map
last_modified_at: '2020-06-28 14:00:00 +0800'
toc: true
toc_sticky: true
toc_label: 목차
---
## Step 1 : Collection Framework( List, Set, Map )
학창시절 java를 책으로 배울 당시에는 Collection Framework라는 큰 개념보다는 사용방법에 치중하여 이렇게 쓰는 것이구나 하고 넘어갔던 Collection Framework, 이번 기회에 조금 더 생각하며 정리해보고자 합니다. 
우리는 개발을 하다 보면 각종 자료형과 구조화된 Class파일을 통해 생성한 객체 인스턴스 등을 다룹니다. 
여기서 우리가 원하는 방식으로 생성한 class 객체 파일에 대해 해당 객체 내부 데이터를 가지고 정렬이 필요할 때도 있고, 검색해야 할 때도 있습니다. 아래와 같이 이름을 저장하기 위해 만든 클래스가 있다고 예를 들겠습니다.

```java
public class NameClass {
    
    private String firstName;
    private String subName;
    
    public NameClass(String firstName, String subName) {
        super();
        this.firstName = firstName;
        this.subName = subName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getSubName() {
        return subName;
    }
    
}

```
우리는 이제 5명의 이름을 받아 정렬하던, 삭제하던, 검색을 해야 합니다. 컬렉션을 알기 전이라면 단순 배열에 5명의 이름을 저장하고, for 문으로 배열을 돌면서 원하는 행위를 진행해야 합니다. 만약 배열에 추가적인 이름을 저장해야 한다거나 한다면? 배열의 크기도 확인해야 하고 크기가 부족하다면 더 키워야 하는 이슈 등 이런 이슈들을 미리 정리하여 널리 알려진 자료구조를 바탕으로 똑똑하신 분들이 java.util 패키지에 관련 인터페이스와 클래스를 미리 만들어 놓아 우리는 사용 및 응용하면 됩니다. 결론적으로 우리가 생성한 객체를 효율적으로 추가, 검색, 삭제하기 위해 미리 정해 놓은 라이브러리를 자바 Collection Framework라고 합니다.
Collection Framework를 사용 방법은 어떤 목적으로 사용하느냐에 따라 달라집니다. List, Set, Map 인터페이스에는 어떻게 사용하는지 사용 방법에 관해 서술되어 있습니다. 이제 Collection Framework를 사용해 봅시다.

## Step 2 : List 컬랙션
List 컬렉션을 사용하는 목적은 데이터들이 중복 저장이 가능할 때, 배열에 들어간 순서를 유지하고 싶을 때입니다. 해당 인터페이스의 기능들입니다.
- boolean add( E 객체 ) : 주어진 객체를 list 컬렉션 맨 끝에 추가, 성공여부 반환 
- void add( int index, E 객체 ) : 주어진 객체를 list 컬렉션 주어진 인덱스에 추가
- E set( int int, E 객체 ) : list 컬렉션 해당 인덱스에 위치한 객체를 들어온 객체로 교체하고, 기존에 있던 객체를 반환합니다.
- boolean contains( E 객체 ) : 객체가 list 컬렉션 내부에 존재하는지 찾습니다. 
- E get( int index ) : list 컬렉션에서 주어진 index의 위치한 객체를 반환합니다.
- boolean isEmpty() : list 컬렉션이 비어있는지 반환합니다.
- int size() : list 컬렉션의 사이즈를 리턴합니다.
- void clear() : list 컬렉션에 저장된 모든 객체를 삭제합니다.
- E remove(int index) : list 컬렉션에서 해당 index 위치의 객체를 삭제하고 반환합니다.
- boolean remove(int index) : list 컬렉션 해당 index 위치의 객체를 삭제하고 성공여부를 반환합니다. 

이런 list의 기능이 정의된 인터페이스를 구현한 클래스 3가지를 알아보겠습니다.

### ArrayList
- 장점 : 검색이 빠르다. 순차적으로 데이터가 추가된다면 빠르다.
- 단점 : list들의 중간 중간 데이터에 빈번한 추가 삭제가 일어난다면 느리다. List 컬렉션을 여러 스레드에서 공유해야 한다면 Thread safe 하지 않다.

### Vector
- ArrayList와 내부 구조는 동일하지만 Thread safe하다.

### LinkedList
- 장점 : 중간에 빈번한 삭제와 삽입이 일어날 때 좋은 성능을 발휘한다. 
- 단점 : 검색이 느리다.

```java
public static void main(String args[]){
    List<NameClass> listImpl = new ArrayList<>();
    listImpl.add(new NameClass("박", "석진"));
    listImpl.add(new NameClass("김", "석진"));
    listImpl.add(new NameClass("차", "석진"));
    listImpl.add(new NameClass("이", "석진"));
    for (NameClass nameClass : listImpl) {
        System.out.println(nameClass.getFirstName()+nameClass.getSubName());
    }
}
```

```java
public static void main(String args[]){
    List<NameClass> listImpl = new Vector();
    listImpl.add(new NameClass("박", "석진"));
    listImpl.add(new NameClass("김", "석진"));
    listImpl.add(new NameClass("차", "석진"));
    listImpl.add(new NameClass("이", "석진"));
    for (NameClass nameClass : listImpl) {
        System.out.println(nameClass.getFirstName()+nameClass.getSubName());
    }
}
```

```java
public static void main(String args[]){
    List<NameClass> listImpl = new LinkedList<>();
    listImpl.add(new NameClass("박", "석진"));
    listImpl.add(new NameClass("김", "석진"));
    listImpl.add(new NameClass("차", "석진"));
    listImpl.add(new NameClass("이", "석진"));
    for (NameClass nameClass : listImpl) {
        System.out.println(nameClass.getFirstName()+nameClass.getSubName());
    }
}
```

{% highlight wl linenos %}
박석진
김석진
차석진
이석진
{% endhighlight %}


## Step 3 : Set 컬랙션
Set 컬랙션을 사용하는 목적은 순서가 필요 없고, set에 저장될 데이터가 중복이 되면 안될 때 입니다. 해당 인터페이스의 기능들 입니다. ( 단 LinkedHashSet은 순서도 보장합니다. )
- boolean add( E 객체 ) : 주어진 객체를 set 컬렉션에 저장합니다.
- boolean contains( E 객체 ) : 객체가 set 컬렉션 내부에 존재하는지 찾습니다. 
- Itorator<E> interator() : set 컬렉션에 저장된 객체를 가져오는 반복자를 반환합니다.
- boolean isEmpty() : 컬렉션이 비어있는지 반환합니다.
- int size() : 컬렉션의 사이즈를 리턴합니다.
- void clear() : 컬렉션에 저장된 모든 객체를 삭제합니다.
- boolean remove(E 객체) : 컬렉션에서 해당 객체를 삭제합니다. 

이런 set의 기능이 정의된 인터페이스를 구현한 클래스 2가지를 알아보겠습니다.

### HasshSet
객체를 저장하기 전에 저장할 객체의 hashCode() 메소드를 호출해서 해쉬코드를 알아내고, set 내부의 hashCode와 비교하여 없을 때 저장한다. thread safe 하지 않다.

### TreeSet
기본적으로는 같지만 기본적으로 오름차순 정렬하여 저장한다. thread safe 하지 않다.

### LinkedHashSet
입력된 순서대로 저장한다. thread safe 하지 않다.

```java
public static void main(String args[]){
    List<NameClass> listImpl = new LinkedList<>();
    listImpl.add(new NameClass("박", "석진"));
    listImpl.add(new NameClass("김", "석진"));
    listImpl.add(new NameClass("차", "석진"));
    listImpl.add(new NameClass("이", "석진"));
    for (NameClass nameClass : listImpl) {
        System.out.println(nameClass.getFirstName()+nameClass.getSubName());
    }
}
```
```java
public static void main(String args[]){
    List<NameClass> listImpl = new LinkedHashSet<>();
    listImpl.add(new NameClass("박", "석진"));
    listImpl.add(new NameClass("김", "석진"));
    listImpl.add(new NameClass("차", "석진"));
    listImpl.add(new NameClass("이", "석진"));
    for (NameClass nameClass : listImpl) {
        System.out.println(nameClass.getFirstName()+nameClass.getSubName());
    }
}
```

{% highlight wl linenos %}
// 랜덤 LinkedHashSet는 순서대로 출력
차석진
이석진
김석진
박석진
{% endhighlight %}

## Step 4 : Map 컬랙션
Map 컬랙션을 사용하는 목적은 데이터를 저장할 때, key와 value 쌍으로 저장하고 싶을 때, 그리고, key를 중복 저장하고 싶지 않을 때입니다. 해당 인터페이스의 기능들입니다.
- E put( K 객체, E 객체 ) : 주어진 K 객체를 키로, E 객체를 값으로 컬렉션에 추가합니다. 성공 시 E 객체를 반환합니다.
- boolean containsKey( E 객체) : 컬렉션에 해당 객체를 Key로하는 객체 존재 여부를 반환합니다.
- boolean containsValue( E 객체 ) : 해당 객체를 값으로 하는 객체가 컬렉션에 존재 하는지 반환합니다. 
- E get( V key) : 컬렉션에서 해당 key객체를 찾아 값을 반환합니다.
- boolean isEmpty() : 컬렉션이 비었는지 확인합니다.
- set<E> keySet() : 컬렉션의 모든 key객체를 Set 객체에 담아 반환합니다.
- int size() : 컬렉션의 길이를 반환합니다.
- Colletion<E> values() : 저장된 모든 값을 Colleciton에 담아 반환합니다.
- void clear() : 컬렉션의 모든 데이터를 제거합니다.
- E remove( E key ) : 컬렉션에서 해당 key객체를 가지는 부분을 제거합니다.

이런 Map의 기능이 정의된 인터페이스를 구현한 클래스 4가지를 알아보겠습니다.

### HashMap
기본적인 Map 컬렉션의 특징을 구현한 클래스로 만약 HashMap의 key로 사용할 객체는 hashCode()와 equlas() 메소드를 재정의해서 동등 객체가 될 조건을 정해야 합니다. ( 해당 부분은 추후 Effective Java에서 본 내용을 기반으로 추가 포스트 하겠습니다. ) String 객체의 경우 이런 부분이 잘 정의되어 있어 key값으로 많이 사용합니다. thread safe 하지 않습니다.

### Hashtable
HashMap과 동일한 내부 구조를 가지고 있습니다. 다만 thread safe합니다.

### Properties
Hashtable의 하위 클래스입니다. 특징은 key값을 String으로 제한한 클래스라고 보시면 됩니다. 주로 사용 목적은 .properties파일을 읽을 때 사용합니다.

### TreeMap
key값으로 오름차순 정렬되어 저장됩니다.


```java
public static void main(String args[]){
    Map<String,NameClass> listImpl = new HashMap<>();
        listImpl.put("1",new NameClass("박", "석진"));
        listImpl.put("2",new NameClass("김", "석진"));
        listImpl.put("3",new NameClass("차", "석진"));
        listImpl.put("4",new NameClass("이", "석진"));
        for (String key : listImpl.keySet()) {
            System.out.println(listImpl.get(key).getFirstName()+listImpl.get(key).getSubName());
        }
    }
}
```
```java
public static void main(String args[]){
    Map<String,NameClass> listImpl = new Hashtable<>();
        listImpl.put("1",new NameClass("박", "석진"));
        listImpl.put("2",new NameClass("김", "석진"));
        listImpl.put("3",new NameClass("차", "석진"));
        listImpl.put("4",new NameClass("이", "석진"));
        for (String key : listImpl.keySet()) {
            System.out.println(listImpl.get(key).getFirstName()+listImpl.get(key).getSubName());
        }
    }
}
```
```java
public static void main(String args[]){
     Map<Object, Object> listImpl = new Properties();
        listImpl.put("1",new NameClass("박", "석진"));
        listImpl.put("2",new NameClass("김", "석진"));
        listImpl.put("3",new NameClass("차", "석진"));
        listImpl.put("4",new NameClass("이", "석진"));
        for (Object key : listImpl.keySet()) {
            System.out.println(((NameClass) listImpl.get(key)).getFirstName()+((NameClass) listImpl.get(key)).getSubName());
        }
    }
}
```

{% highlight wl linenos %}
/ 랜덤
박석진
김석진
차석진
이석진
{% endhighlight %}

## Step 5 : Comparable과 Comparator
TreeSet의 객체와 TreeMap객체는 오름차순 정렬되어 있다고 설명해 드렸습니다. 우리가 초반에 만든 NameClass의 내부의 값인 firstName값을 가지고 해당 조건을 만족시키고 싶다면, 정렬을 위해 NameClass에서 Comparable 인터페이스 내부 CompareTo() 메소드를 구현해야 합니다. Compareble
을 구현할 수 없는 클래스의 경우 TreeSet 및 TreeMap 생성 시 Comparator 인터페이스를 구현한 객체를 제공해 주면 됩니다. 복잡한 상황에서 CompareTo 정렬은 깊이가 필요하여 해당 부분만 따로 포스트 추가하겠습다.

```java

// Comparable 구현 시 
public class NameClass implements Comparable<NameClass>{
    
    private String firstName;
    private String subName;
    
    public NameClass(String firstName, String subName) {
        super();
        this.firstName = firstName;
        this.subName = subName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getSubName() {
        return subName;
    }

    @Override
    public int compareTo(NameClass input) {
        return firstName.compareTo(input.firstName);
    }
    
}

public static void main(String args[]){
   Set<NameClass> treeSet = new TreeSet<>();
   treeSet.add(new NameClass("박", "석진"));
   treeSet.add(new NameClass("김", "석진"));
   treeSet.add(new NameClass("차", "석진"));
   treeSet.add(new NameClass("이", "석진"));
   for (NameClass nameClass : treeSet) {
       System.out.println(nameClass.getFirstName()+nameClass.getSubName());
   }
}

```

```java
// 생성자에서 comparator 인터페이스 구현 시 
public static void main(String args[]){
    Set<NameClass> treeSet = new TreeSet<>( (NameClass first, NameClass second)-> first.getFirstName().compareTo(second.getFirstName()) ); 
    treeSet.add(new NameClass("박", "석진"));
    treeSet.add(new NameClass("김", "석진"));
    treeSet.add(new NameClass("차", "석진"));
    treeSet.add(new NameClass("이", "석진"));
    for (NameClass nameClass : treeSet) {
        System.out.println(nameClass.getFirstName()+nameClass.getSubName());
    }
}

```
{% highlight wl linenos %}
// 출력
김석진
박석진
이석진
차석진
{% endhighlight %}



## Step 6 :  LIFO와 FIFO 컬렉션
Last In First Out(LIFO)는 문자 그대로 마지막에 들어온 아이템을 먼저 내보내는 후입 선출을 위한 자료구조입니다. LIFO를 제공하는 클래스는 Stack 클래스입니다. Fist In First Out은 선입 선출 구조를 위한 자료구조로 해당을 위해 Queue 인터페이스가 존재하겠습니다. 

### stack
- push ( E 객체 ) : 주어진 객체를 스택에 넣습니다.
- peek() : 마지막에 들어간 객체를 반환합니다.
- pop() : 마지막에 들어간 객체를 제거하고 반환합니다. 

### queue
Queue 인터페이스 메소드를 한번 살펴보겠습니다.
- offer( E 객체 ) : 주어진 객체를 넣습니다.
- peek() : 객체 하나를 가지고 옵니다.
- poll(): 객체 하나를 가지고 오고 queue에서 제거합니다. 

구현 클래스로는 LinkedList 클래스가 존재하겠습니다.

해당 포스트에서 다루지 않은 것은 많습니다. 각각의 자료구조의 특성들 예를 들어 ArrayList 내부가 어떤 식으로 구성되어 있는지, TreeMap 내부 이진트리가 어떤 식으로 구성되어 있는지, 시간복잡도, 공간복잡도는 어떻게 되는지, 각각의 특징들과 deque같은 추가적인 인터페이스 등등 모든 것을 정리한 것은 아닙니다. 단지 Collection Framework이란 무엇인지 처음 접했을 때 직관적으로 이해가 되지 않았던 부분과 뜬금없이 인터페이스가 왜 나오고, 해당 인터페이스를 구현한 클래스가 어떤 역할을 하는지 정도에 대해 정리하고 싶어 가벼운 부분만 포스트를 작성하였습니다. 조금 더 학문적으로 깊은 부분(자료구조, 알고리즘)은 공부하시는 것이 좋습니다.


**참고자료** <br> <br>
-- 이것이 자바다 (한빛 미디어)<br> 
{: .notice--info}