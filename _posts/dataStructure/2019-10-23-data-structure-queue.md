---
title: 자료구조 <br/> ( Queue )
layout: post
summary: Queue
categories: 
    - dataStructure
    - JAVA
thumbnail: posts/icon-data-structure.png
nex: ""
---
### 2. 자료구조 : Queue편

<div class="img-center">
    <img src="/assets/img/posts/dataStructure/queue.png" class="max-ratio-100" />
</div>

 - Queue란 먼저 들어온 데이터를 먼저 내보내는 선입선출(FIFO)을 표현하기 위한 자료구조
 - 예를들어 프린트나 테이블 예약 같은경우 먼저 예약한 사람이 우선일 때 필요한 자료구조이다. 
 - 연결리스트 혹은 배열로 구현 가능하다. (Java Utile 패키지가 제공하는것 사용해도 됨)
 - 기본으로 필요한 로직은  데이터 넣기(add()), 데이터 빼기(remove()), 가장 위에것 확인하기(peek()), 비어있는지 확인하기(isEmpty())

<p class="bold-text">연결 리스트로 구현하기</p>
<pre>
{% raw %}
public class MyQueueLinked {
    // 연결 리스트를 위한 Node클래스
    private class NodeClass { 
        Object data; 
        NodeClass link; 
        
        private NodeClass( Object item ) {
            this.data = item;
            this.link = null;
        }
    } 
    
    private NodeClass top;  // 맨 위에 있는 데이터를 위한 변수
    private NodeClass tail; // 꼬리에 있는 데이터를 위한 변수
    
    MyQueueLinked(){
        top  = null;
        tail = null;
    }
    
    //remove(),  add() , peek() , isEmpty() 4가지의 함수 구현
    public void add( Object item ) {
       // 새로운 노드를 만들고 기존 tail을 해당으로 교체하면서 기존 tail.link를 신규 노드로 변경
       // 첫 진입 시 top이랑 테일은 같다.
       // 시간 복잡도 O(1)
       NodeClass old = tail;
       // 이제 신규로 만든 것들은 tail에 집어넣기
       tail = new NodeClass(item);;
       if( isEmpty() ) {
           top = tail;
       } else {
           old.link = tail;
       }
    }
    
    public Object remove() {
        // top을 탑에 연결된 link로 바꿔주고 top데이터 가지고 오기
        // 시간 복잡도 O(1)
        if(isEmpty()) {
            throw new ArrayIndexOutOfBoundsException();
        } else {
            Object item = top.data;
            top = top.link;
            return item;
        }
     }
    
    public Object peek() {
        // top 데이터만 가지고 옴
        // 시간 복잡도 O(1)
        if(isEmpty()) {
            throw new ArrayIndexOutOfBoundsException();
        } else {
            return top.data;
        }
     }
    
    public Boolean isEmpty() {
        // 시간 복잡도 O(1)
        return top == null;
    }
}


** 사용부 
MyQueueLinked test = new MyQueueLinked();
test.add(1);
test.add(2);
test.add(3);
test.add("dd");
test.add("ee");

while(!test.isEmpty()) {
    System.out.println(test.remove());
}
{% endraw %}
</pre>

<p class="bold-text">배열로 구현하기</p>
<pre>
{% raw %}
public class MyQueueArray {
    private int top; // 맨 위에 있는 데이터를 위한 변수
    private int tail; // 꼬리에 있는 데이터를 위한 변수
    private int maxSize;
    private Object[] stackArray;
    
    // 배열이다보니 크기지정이 필요하다.
    MyQueueArray(int size){
        this.top = -1;
        this.tail = -1;
        this.maxSize = size;
        this.stackArray = new Object[size];
    }
    //remove(),  add() , peek() , isEmpty() 4가지의 함수 구현
    public void add( Object item ) {
       //시간 복잡도 O(1)
       if(tail >= maxSize-1) throw new ArrayIndexOutOfBoundsException();
       stackArray[++tail] = item;
    }
    
    public Object remove() {
        // top을 바꿔주고 top 데이터를 가지고옴
        //시간 복잡도 O(1)
        if(isEmpty()) {
            throw new ArrayIndexOutOfBoundsException();
        } else {
            return stackArray[++top];
        }
     }
    
    public Object peek() {
        // top 데이터만 가지고 옴
        //시간 복잡도 O(1)
        if(isEmpty()) {
            throw new ArrayIndexOutOfBoundsException();
        } else {
            return stackArray[top+1];
        }
     }
    
    public Boolean isEmpty() {
        //시간 복잡도 O(1)
        if( top == tail ) {
            // 초기화 로직
            top  = -1;
            tail = -1;
        }
        return top == tail;
    }
}


** 사용부 
MyQueueArray test2 = new MyQueueArray(5);
test2.add(1);
test2.add(2);
test2.add(3);
test2.add("dd");
test2.add("ee");

while(!test2.isEmpty()) {
    System.out.println(test2.remove());
    
}
{% endraw %}
</pre>