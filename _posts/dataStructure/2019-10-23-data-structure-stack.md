---
title: 자료구조 <br/> ( Stack )
layout: post
summary: Stack
categories: 
    - dataStructure
    - JAVA
thumbnail: posts/icon-data-structure.png
nex: ""
---
### 1. 자료구조 : Stack편

<div class="img-center">
    <img src="/assets/img/posts/dataStructure/stack.png" class="max-ratio-100" />
</div>

 - Stack이란 마지막에 들어온 데이터를 먼저 내보내는 후입선출(LIFO)을 표현하기 위한 자료구조
 - 예를들어 웹에서 History는 마지막 접근했던 페이지로 돌아가야 할 경우 이런 경우를 위해 사용하는 자료구조이다. 
 - 연결리스트 혹은 배열로 구현 가능하다. (Java Utile 패키지가 제공하는것 사용해도 됨)
 - 기본으로 필요한 로직은  데이터 넣기(push()), 데이터 빼기(pop()), 가장 위에것 확인하기(peek()), 비어있는지 확인하기(isEmpty())

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