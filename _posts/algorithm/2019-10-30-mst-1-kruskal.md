---
title: 알고리즘 <br/> ( MST Kruskal)
layout: post
summary: 최소비용 신장트리
categories: 
    - algorithm
    - JAVA
tags: 
   - difficulty-low: "난이도 중"
thumbnail: posts/icon-algorithm.png
pre: "/algorithm/java/2019/10/30/search-2-dfs.html"
nex: "/algorithm/java/2019/10/30/mst-2-prim.html"
---
### 1. Spanning Tree란 (신장 트리)
 - 원래의 그래프에서 모든 노드를 포함하고
 - 모든 노드들은 서로 서로 갈 수 있는 길이 있어야 하며 
 - 부모와 자식관계를 만족하는 즉 부모노드에서 자식 노드까지 가는 길이 1개만 존재할 때의 그래프를 신장트리라고 한다.
 - 아래 그림 참조(https://ratsgo.github.io 에서 퍼옴)
 - 아래 원본그래프에서 Spanning Tree는 총 8개가 존재한다.
 - N개의 정점은 N-1개의 간선으로 연결되어있다.

<div class="img-center">
    <img src="/assets/img/posts/dataStructure/spanningTree.png" class="max-ratio-100" />
</div>


### 2. MST(Minimum Spanning Tree) 최소비용 신장트리란 
 - 간선간의 비용이 주어졌을때, Spanning Tree중 최소비용을 이루는 Spanning Tree이다.

### 3.Kruskal의 MST 알고리즘
 - 탐욕적인 방법을 이용하여  모든 정점간의 비용을 연결하는 최적해답을 찾는다.
 - 간선 중 가장 비용이 작은 간선이 최고다

<p class="bold-text"> i) 과정</p>
 - 자료구조는 시작노드 끝노드 가중치의 조합의 노드로 구성
 - 모든 간선들의 가중치의 오름차순으로 정렬 ( 우선순위 Que이용 )
 - pop()을 통해 가장 작은 비용의 간선 선택
 - Union-Find알고리즘으로 사이클 여부 확인 사이클이 아닐 경우 시작과 끝 노드를 union결합 후 비용을 더한다.
 - 우선순위 큐가 빌 떄 까지 계속한다. 

<p class="bold-text"> ii) 시간복잡도</p>
 - 간선을 정렬하는 시간이 문제 
 -  O(ElogE)

<p class="bold-text">i) Union-Find 알고리즘이란 </p>
 - Disjoint Set의 자료구조를 표현하기 위해 사용되는 알고리즘
 - Disjoint Set이란 서로소 집합 자료구조이다. 특정 연결이 이전 연결의 부분집합이면 안된다.
 - union( x , y) : x가 속한 집합과 y가 속한 집합을 합친다.
 - find(x) : x가 속한 집합의 대표 값을 반환한다.( root )

<p class="bold-text"> i) 과정</p>
 - Node의 갯수 만큼 data&#91;]배열을 준비하고 각 Node 숫자로 초기화
 - Union( x, y )  x<-y를 연결 시키는 경우 find(x)의 root와 , find(y)의 root를 확인 후 같은 root가 아닌 경우  find(x) <- find(y) 시킨다. 
 - find(x)는 reusult&#91;x]가 자기 자신인 경우만 root이고 아닌 경우는 연결된 경우기 때문에 find( result&#91;x] )로 무한 반복문을 돌린다.

<pre>

import java.util.PriorityQueue;
public class MstKuskal {
    private PriorityQueue&lt;NodeClass> prique;
    private MyGraphLinked graph; // MST만 따로 저장하기 위한 그래프 
    private int[] union; // 유니온 결합을 위해 만들어 놓음
    
    // 기본 자료구조를 위한 세팅
    private class NodeClass implements Comparable&lt;NodeClass> { 
        private int start; 
        private int end;
        private int weight;
        
        private NodeClass( int start, int end, int weight ) {
            this.start  = start;
            this.end    = end;
            this.weight = weight;
        }

        // 우선순위 큐를위해 , 작은 친구를 맨 위로 올린다.
        @Override
        public int compareTo(NodeClass target) {
            return target.weight > weight ? -1 : 1;
        }
    } 
    
    public MstKuskal( int nodeCount ) {
        prique  = new PriorityQueue&lt;NodeClass>();
        graph = new MyGraphLinked(nodeCount);
        
        //유니온 결합을 위해 세팅
        union   = new int[nodeCount+1];
        for (int index = 0; index &lt; union.length; index++) {
            union[index] = index;
        }
    }
    
    public void push( int start, int end, int weight ) {
        NodeClass temp = new NodeClass(start, end, weight);
        prique.add(temp);
    }
    
    public int getMinValue() {
        int result = 0;
        while( !prique.isEmpty() ) {
            //poll()을 통해 가장 작은 비용의 간선 선택
            NodeClass temp = prique.poll();
            int start   = temp.start;
            int end     = temp.end;
            int weight  = temp.weight; 
            
            if( unionFind(start) != unionFind(end) ) {
                result += weight;
                union( start , end );
                graph.push(start, end, weight);
            }
            
        }
        
        return result;
    }
    
    //유니온 결합 Root 확인 
    private int unionFind( int start ){
        int result = union[start]; 
        
        if( start == result ) return result;
        result = unionFind(union[result]);
        
        return result;
    }
    
    // 유니온 결합
    private void union( int start, int end ){
        int startRoot = unionFind(start);
        int endRoot   = unionFind(end);
        union[endRoot] = startRoot; 
    }
    
    public void printGraph(){
        graph.print();
    }
    
}

**사용하기
MstKuskal kuskal = new MstKuskal(7);
kuskal.push(1, 2, 2);
kuskal.push(2, 7, 7);
kuskal.push(7, 6, 9);
kuskal.push(6, 5, 23);
kuskal.push(5, 4, 1);
kuskal.push(4, 1, 10);
kuskal.push(1, 3, 3);
kuskal.push(2, 3, 3);
kuskal.push(3, 7, 4);
kuskal.push(3, 6, 3);
kuskal.push(3, 5, 6);

System.out.println(" 최소비용 : " + kuskal.getMinValue());
kuskal.printGraph();

</pre>
