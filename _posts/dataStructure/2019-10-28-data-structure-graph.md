---
title: 자료구조 <br/> ( Graph )
layout: post
summary: Graph
categories: 
    - dataStructure
    - JAVA
thumbnail: posts/icon-data-structure.png
pre: "/datastructure/java/2019/10/28/data-structure-tree.html"
nex: ""
---
### 5. 자료구조 : Graph편

<div class="img-center">
    <img src="/assets/img/posts/dataStructure/graph.png" class="max-ratio-100" />
</div>
 - 노드와 노드를 연결한 간선을 하나로 모아놓은 자료구조 
 - 고립될 수도 있다.
 - 방향설정 가능하다.
 
<p class="bold-text">용어정리</p>
 - Vertex    : 정점, 위치 개념 = 노드
 - Edge      : 간선, 정점을 연결하는 선
 - Adjacent vertex      : 인접정점, 자기 자신 정점과 바로 연결된 정점
 - Degree : 차수, 자기 자신과 연결된 간선의 개수
 - Cycle  : 시작점과 종료점이 동일해 한으로 돌수 있는 경우
 - 오일러 경로: 그래프에 존재하는 모든 간선을 한 번만 통과하는 것 >>  오일러 경로는 차수가 홀수인 정점이 2개일때 존재한다.
 - 오일러 회로 : 오일러 경로 + 시작점과 끝점이 같은 경우 = 한 붓 그리기 >> 차수가 홀수인 정점이 0개일때 오일러 회로가 존재한다.

<p class="bold-text">그래프의 종류</p>
 - 무방향 그래프 (Undirected Graph) : 양 방향으로 갈 수 있다. G(A,B)는 G(B,A)와 동일
 - 방향 그래프 ( Directed Graph ) : 방향이 존재  G(A,B)는 G(B,A)는 다르다
 - 연결 그래프 (Connected Graph) : 모든 정점에 연결할 수 있는 경로가 존재하는 경우
 - 비연결 그래프 (Disconnected Graph) : 정점과 정점을 연결할 수 없는 경우가 존재하는 경우
 - 가중치 그래프(Weighted Graph) : 간선에 비용이나 가중치가 할당된 그래프
 - 완전 그래프 ( Complete Graph ) : 모든 정점이 연결된 경우 

<p class="bold-text">인접정렬 HahMap으로 구현하기(그냥해봄)</p>
<pre>
{% raw %}
public class MyGraphHashMap {
    // 연결 리스트를 위한 Node클래스
    // 원하는 해쉬맵으로 우선 구현해보기 , 일반적이지 않은 방법
    // graph - A(Start)  - B (End) - 가중치
    //                   - C (End) - 가중치 
    
    //       - B(Start)  - A (End ) - 가중치
    //                   - C (End ) - 가중치
    // 이런식으로 저장할 생각
    private HashMap&lt;Object, HashMap&lt;Object, Integer>> graph;
    
    public MyGraphHashMap() {
        graph = new HashMap&lt;Object, HashMap&lt;Object,Integer>>();
    }
    public void push( Object start, Object end ) {
        push(start,  end, 0 ); 
    }
    
    public void push( Object start, Object end, int weight ) {
        if( !graph.containsKey(start) ) {
            HashMap&lt;Object, Integer> temp = new HashMap&lt;Object, Integer>();
            graph.put(start, temp);
        }
        graph.get(start).put(end, weight);
    }
    
    public void getVertex( Object vertex ) {
        if( graph.containsKey(vertex) ) {
            HashMap&lt;Object, Integer> temp = graph.get(vertex);
            for (Object show : temp.keySet()) {
                System.out.println("연결된 노드 : "+ show + " 가중치 : " + temp.get(show));
            }
        }
    }
    
    public void print() {
        for (Object vertext : graph.keySet()) {
            for (Object show : graph.get(vertext).keySet()) {
                System.out.println("시작 노드 : "+ vertext + " >>연결된 노드 : " + show + " >>가중치 : " + graph.get(vertext).get(show));
            }
        }
    }
}

** 사용하기 
MyGraphHashMap data = new MyGraphHashMap();
data.push("왕십리역", "서울역", 20);
data.push("왕십리역", "부천역", 100);
data.push("부천역", "서울역", 100);
data.push("부천역", "서울역", 10);
data.push("서울역", "판교역", 40);
data.print();
{% endraw %}
</pre>


<p class="bold-text">인접 리스트로 구현하기</p>
 - ArrayList로 총 정점의 개수만큼 저장
 - 각각의 그래프로 구현
<pre>
{% raw %}
import java.util.ArrayList;

/* 저장 형식
   1  - 2
      - 3
   2  - 1
      - 3
*/
public class MyGraphLinked {
    private ArrayList&lt;ArrayList&lt;Integer>> graph;

    public MyGraphLinked( int size) {
        this.graph = new ArrayList&lt;ArrayList&lt;Integer>>(); // 그래프 생성
        
        // 각각의 정점들 초기화
        for(int i=0; i&lt;size+1; i++) {
            graph.add(new ArrayList&lt;Integer>());
        }
    }
    
    public void push( int start, int end ) {
        graph.get(start).add(end);
    }
    
    public void print() {
        for (int index = 1; index &lt; graph.size(); index++) {
            System.out.println("정점 " + index + "의 인접리스트");
            for (int indexInner = 0; indexInner &lt; graph.get(index).size(); indexInner++) {
                System.out.print( graph.get(index).get(indexInner) + " ");
            }
            System.out.println();
        }
    }
}

** 사용하기 
MyGraphLinked data2 = new MyGraphLinked(3);
data2.push(1, 2);
data2.push(1, 3);
data2.push(2, 1);
data2.push(2, 3);
data2.push(3, 2);

data2.print();

{% endraw %}
</pre>

<p class="bold-text">인접 행렬로 구현하기</p>
 - graph[i][j]가 1라면 정점 i 에서 정점 j 로의 간선이 있다는 것을 의미 0은 아무 연결이 없다는 것을 의미

<pre>
{% raw %}
public class MyGraphArray {
    private int[][] graph;

    public MyGraphArray( int size) {
        graph = new int [size+1][size+1];
    }
    
    public void push( int start, int end ) {
        graph[start][end] = 1;
    }
    
    public void print() {
        for (int index = 1; index &lt; graph.length; index++) {
            System.out.println("정점 " + index + "의 인접리스트");
            for (int indexInner = 0; indexInner &lt; graph[index].length; indexInner++) {
                if( graph[index][indexInner] == 1 ) {
                    System.out.print( indexInner + " ");
                }
            }
            System.out.println();
        }
    }
}

** 사용하기 
MyGraphArray data3 = new MyGraphArray(3);
data3.push(1, 2);
data3.push(1, 3);
data3.push(2, 1);
data3.push(2, 3);
data3.push(3, 2);

data3.print();

{% endraw %}
</pre>

