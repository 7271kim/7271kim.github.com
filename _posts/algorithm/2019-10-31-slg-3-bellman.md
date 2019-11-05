---
title: 알고리즘 <br/> ( Bellman Ford )
layout: post
summary: Bellman Ford
categories: 
    - algorithm
    - JAVA
tags: 
   - difficulty-low: "난이도 중"
thumbnail: posts/icon-algorithm.png
pre: "/algorithm/java/2019/10/31/slg-2-floyd.html"
---
### 4. 최단경로 알고리즘 : Bellman Ford ( 벨만 포드 )
 - 다익스트라에서 한번더 진행하였을 때 음수 사이클 여부 판단 가능한 로직 추가 

<pre>
public void getMinValue(int start) {
    int startData   = start;
    //시작지점과 연결된 노드중 비용이 최소값 변화가 있는 distance를 업데이트 한 후 우선순위 큐에 넣는다.
    distance[startData] = 0;
    putPri( startData );
    
    // N-1 진행
    for (int index = 0; index &lt; nodeSize-1; index++) {
         // 우선순위 큐 맨 위에있는 것으로 확인
        if(prique.isEmpty()) break;
        startData = prique.poll().end;
        
        // 시작지점과 연결된 노드중 비용이 최소값 변화가 있는 distance를 업데이트 한 후 인접 정점을 우선순위 큐에 넣는다.
        ArrayList&lt;int[]> temp = orignal.getData(startData);
        for (int innerIndex = 0; innerIndex &lt; temp.size(); innerIndex++) {
            int endNode = temp.get(innerIndex)[0];
            int weight  = temp.get(innerIndex)[1];
            int changeValue = distance[startData] + weight;
            int nowValue    = distance[endNode];
            if( nowValue > changeValue || nowValue == -1 ) {
                distance[endNode] = changeValue;
                putPri ( endNode );
            }
        }
    }
    // 음수 사이클 확인
    if( !prique.isEmpty() ) {
        // 음수 사이클이 존재한다면 마지막 큐에 남아있는 값은 음수에서 출발하는 수이기 떄문에 시작점에서의 변화를 확인한다.
        startData = prique.poll().start;
        
        ArrayList&lt;int[]> temp = orignal.getData(startData);
        for (int innerIndex = 0; innerIndex &lt; temp.size(); innerIndex++) {
            int endNode = temp.get(innerIndex)[0];
            int weight  = temp.get(innerIndex)[1];
            int changeValue = distance[startData] + weight;
            int nowValue    = distance[endNode];
            if( nowValue > changeValue || nowValue == -1 ) {
                System.out.println("음수 사이클이 존재합니다.");
                distance[endNode] = changeValue;
                break;
            }
        }
    }
}
</pre>
