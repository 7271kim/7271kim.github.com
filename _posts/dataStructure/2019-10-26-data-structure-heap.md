---
title: 자료구조 <br/> ( Heap )
layout: post
summary: Heap
categories: 
    - dataStructure
    - JAVA
thumbnail: posts/icon-data-structure.png
nex: ""
---
### 1. 자료구조 : Heap편

<div class="img-center">
    <img src="/assets/img/posts/dataStructure/heap.png" class="max-ratio-100" />
</div>
 - 우선순위 큐( 들어간 순서에 상관 없이 우선순위가 높은 데이터가 먼저 나오는 자료구조 ) 를 만들기 위해 필요한 자료구조
 - 힙은 완전이진트리의 일종으로 최대값 혹은 최소값을 빠르게 찾아낼 수 있다.
 - 부모의 노드는 항상 자식의 노드보다 작거나 큰 이진트리를 말한다. (느슨한 결합)
 - 중복을 허용한다.
<p class="bold-text">연결 리스트로 구현하기</p>
<pre>
{% raw %}
public class MystackLinked {
    // 연결 리스트를 위한 Node클래스
    private class NodeClass { 
        Object data; 
        NodeClass link; 
        
        private NodeClass( Object item ) {
            this.data = item;
            this.link = null;
        }
    } 
    
    // 맨 위에 있는 데이터를 위한 변수
    private NodeClass top;
    
    MystackLinked(){
        top = null;
    }
    // pop() ,  push() , peek() , isEmpty() 4가지의 함수 구현
    public void push( Object item ) {
       // 시간 복잡도 O(1)
       // 새로운 노드를 만들고 기존 top을 해당 노드에 연결
       NodeClass temp = new NodeClass(item);
       temp.link = top;
       // 이제 신규 top은 지금 만든 것이다.
       top = temp;
    }
    
    public Object pop() {
        // top을 바꿔주고 top 데이터를 가지고옴
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
MystackLinked test = new MystackLinked();
test.push(1);
test.push(2);
test.push(3);
test.push("dd");
test.push("ee");

while(!test.isEmpty()) {
    System.out.println(test.pop());
}
{% endraw %}
</pre>

<p class="bold-text">배열로 구현하기</p>
<pre>
{% raw %}
public class MystackArray {
    private int top;
    private int maxSize;
    private Object[] stackArray;
    
    // 배열이다보니 크기지정이 필요하다.
    MystackArray(int size){
        this.top = -1;
        this.maxSize = size;
        this.stackArray = new Object[size];
    }
    // pop() ,  push() , peek() , isEmpty() 4가지의 함수 구현
    public void push( Object item ) {
       //시간 복잡도 O(1)
       if(top >= maxSize-1) throw new ArrayIndexOutOfBoundsException();
       stackArray[++top] = item;
    }
    
    public Object pop() {
        // top을 바꿔주고 top 데이터를 가지고옴
        //시간 복잡도 O(1)
        if(isEmpty()) {
            throw new ArrayIndexOutOfBoundsException();
        } else {
            return stackArray[top--];
        }
     }
    
    public Object peek() {
        // top 데이터만 가지고 옴
        //시간 복잡도 O(1)
        if(isEmpty()) {
            throw new ArrayIndexOutOfBoundsException();
        } else {
            return stackArray[top];
        }
     }
    
    public Boolean isEmpty() {
        //시간 복잡도 O(1)
        return top == -1;
    }
}

** 사용부 
MystackArray test2 = new MystackArray(5);
test2.push(1);
test2.push(2);
test2.push(3);
test2.push("dd");
test2.push("ee");

while(!test2.isEmpty()) {
    System.out.println(test2.pop());
}
{% endraw %}
</pre>