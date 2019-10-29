---
title: 자료구조 <br/> ( Heap )
layout: post
summary: Heap
categories: 
    - dataStructure
    - JAVA
thumbnail: posts/icon-data-structure.png
pre: "/datastructure/java/2019/10/23/data-structure-queue.html"
nex: "/datastructure/java/2019/10/28/data-structure-tree.html"
---
### 3. 자료구조 : Heap편

<div class="img-center">
    <img src="/assets/img/posts/dataStructure/heap.png" class="max-ratio-100" />
</div>
 - 우선순위 큐( 들어간 순서에 상관 없이 우선순위가 높은 데이터가 먼저 나오는 자료구조 ) 를 만들기 위해 필요한 자료구조
 - 힙은 완전이진트리의 일종으로 최대값 혹은 최소값을 빠르게 찾아낼 수 있다.
 - 부모의 노드는 항상 자식의 노드보다 작거나 큰 이진트리를 말한다. (느슨한 결합)
 - 중복을 허용한다.

<p class="bold-text">배열로 구현하기</p>
<pre>
{% raw %}
public class MyHeapArray {
    private int maxSize;
    private int pointer; // 마지막 노드의 위치를 저장하기 위해 필요
    private int[] heap;
    
    // 배열이다보니 크기지정이 필요하다.
    MyHeapArray(int inputSize){
        
        maxSize = 1;
        pointer = 0;
        while( maxSize &lt;= inputSize )
            maxSize &lt;&lt;= 1;
        
        this.heap = new int[maxSize];
    }
    
    //insertMaxHeap(), insertMinHeap(), removeMax(), removeMin() ,print(), isFull(), isEmpty() 7가지의 함수 구현
    
    // 항상 마지막 노드에 값을 붙인 후 부모노드와 비교를 통해 교체한다.
    // 시간 복잡도 : logN
    public void insertMinHeap( int item ) {
        if(isFull()) {
            throw new ArrayIndexOutOfBoundsException();
        }
        
        int tempIndex   = ++pointer;
        // 마지막노드에 값 넣기
        heap[pointer] = item;
        
        // 부모와 비교 로직
        while( tempIndex > 0 && tempIndex != 1) {
            int parentValue = heap[tempIndex/2];
            if( parentValue > item ) {
                int swapData = item;
                heap[tempIndex/2] = parentValue;
                heap[tempIndex] = swapData;
            } else {
                break;
            }
            tempIndex /= 2;
        }
    }
    
    public void insertMaxHeap( int item ) {
        if(isFull()) {
            throw new ArrayIndexOutOfBoundsException();
        }
        
        int tempIndex   = ++pointer;
        // 마지막노드에 값 넣기
        heap[pointer] = item;
        
        // 부모와 비교 로직
        while( tempIndex > 0 && tempIndex != 1) {
            int parentValue = heap[tempIndex/2];
            if( parentValue &lt; item ) {
                int swapData = parentValue;
                heap[tempIndex/2] = item;
                heap[tempIndex] = swapData;
            } else {
                break;
            }
            tempIndex /= 2;
        }
    }
    
    // 삭제로직 : root노드를 가지고 오고 마지막 노드를 root노드의 값과 변경
    // 자식들을 찾아가며 비교 로직을 수행한다.
    // logN
    public int removeMax() {
        if(isEmpty()) {
            throw new ArrayIndexOutOfBoundsException();
        }
        // root와 마지막 노드를 변경 후 point사이즈를 하나 줄임
        int result      = heap[1];
        int lastChild   = heap[pointer];
        heap[1]         = lastChild;
        heap[pointer--] = 0;
        
        // 자식이 존재하는지 확인 후  자식과 부모 비교 노드 중 값이 더 큰 노드와 교체한다.
        int tempIndex   = 1;
        while( tempIndex*2 &lt;= pointer ) {
            Boolean hasRightChild = tempIndex*2+1 &lt;= pointer;
            int leftChild  = heap[tempIndex*2];
            int rightChild = heap[tempIndex*2+1];
            int parent     = heap[tempIndex];
            int changeValue;
            int changeIndex;
            
            if( !hasRightChild ) {
                //우측값이 없는 경우 좌측만 비교하기
                
                // 부모가 큰 경우 더이상 필요없음
                if( parent > leftChild ) break;
                
                // 변경값들 설정
                changeIndex = tempIndex*2;
                changeValue = leftChild;
            } else {
                // 둘 다 큰경우는 더이상 하는 의미가 없음 
                if( parent > leftChild && parent > rightChild ) break;
                
                // 둘중 더 큰값을 부모와 변경
                changeValue = leftChild &lt; rightChild ? rightChild : leftChild;
                changeIndex = leftChild &lt; rightChild ? tempIndex*2+1 : tempIndex*2;
                
            }
            
            //교체
            heap[tempIndex]    = changeValue;
            heap[changeIndex]  = parent;
            tempIndex = changeIndex;
        }
        
        return result;
    }
    
    public int removeMin() {
        if(isEmpty()) {
            throw new ArrayIndexOutOfBoundsException();
        }
        // root와 마지막 노드를 변경 후 point사이즈를 하나 줄임
        int result      = heap[1];
        int lastChild   = heap[pointer];
        heap[1]         = lastChild;
        heap[pointer--] = 0;
        
        // 자식이 존재하는지 확인 후  자식과 부모 비교 노드 중 값이 더 큰 노드와 교체한다.
        int tempIndex   = 1;
        while( tempIndex*2 &lt;= pointer ) {
            Boolean hasRightChild = tempIndex*2+1 &lt;= pointer;
            int leftChild  = heap[tempIndex*2];
            int rightChild = heap[tempIndex*2+1];
            int parent     = heap[tempIndex];
            int changeValue;
            int changeIndex;
            
            if( !hasRightChild ) {
                //우측값이 없는 경우 좌측만 비교하기
                
                // 부모가 작은 경우 더이상 필요없음
                if( parent &lt; leftChild ) break;
                
                // 변경값들 설정
                changeIndex = tempIndex*2;
                changeValue = leftChild;
            } else {
                // 부모가 왼쪽과 오른쪽보다 작은경우 더이상 필요없음 
                if( parent &lt; leftChild && parent &lt; rightChild ) break;
                
                // 둘중 더 작은값을 부모와 변경
                changeValue = leftChild > rightChild ? rightChild : leftChild;
                changeIndex = leftChild > rightChild ? tempIndex*2+1 : tempIndex*2;
                
            }
            
            //교체
            heap[tempIndex]    = changeValue;
            heap[changeIndex]  = parent;
            tempIndex = changeIndex;
        }
        
        return result;
    }
    
    public Boolean isEmpty() {
        //시간 복잡도 O(1)
        return pointer == 0;
    }
    public Boolean isFull() {
        //시간 복잡도 O(1)
        return pointer >= maxSize;
    }
    
    public void print() {
        StringBuilder temp = new StringBuilder();
        for (int index = 1; index &lt;= pointer; index++) {
            temp.append(heap[index] + " ");
        }
        System.out.println(temp.toString());
    }
    
}

** 사용부 

MyHeapArray temp2 = new MyHeapArray(7);
temp2.insertMaxHeap(1);
temp2.insertMaxHeap(1);
temp2.insertMaxHeap(2);
temp2.insertMaxHeap(1);
temp2.insertMaxHeap(4);
temp2.insertMaxHeap(5);
temp2.insertMaxHeap(3);

temp2.print();

System.out.println(temp2.removeMax());
temp2.print();

System.out.println(temp2.removeMax());
temp2.print();

System.out.println(temp2.removeMax());
temp2.print();

System.out.println(temp2.removeMax());
temp2.print();

System.out.println(temp2.removeMax());
temp2.print();

System.out.println(temp2.removeMax());
temp2.print();

System.out.println(temp2.removeMax());
temp2.print();


MyHeapArray temp = new MyHeapArray(7); 
temp.insertMinHeap(1);
temp.insertMinHeap(1); 
temp.insertMinHeap(2); 
temp.insertMinHeap(1);
temp.insertMinHeap(4); 
temp.insertMinHeap(4); 
temp.insertMinHeap(4);

temp.print();

System.out.println(temp.removeMin()); 
temp.print();

System.out.println(temp.removeMin()); 
temp.print();

System.out.println(temp.removeMin()); 
temp.print();

System.out.println(temp.removeMin()); 
temp.print();

System.out.println(temp.removeMin()); 
temp.print();

System.out.println(temp.removeMin()); 
temp.print();

System.out.println(temp.removeMin()); 
temp.print();

{% endraw %}
</pre>