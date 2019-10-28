---
title: 알고리즘 <br/> ( 정렬 - 버블정렬 )
layout: post
summary: 버블정렬
categories: 
    - algorithm
    - JAVA
tags: 
   - difficulty-low: "난이도 중"
thumbnail: posts/icon-algorithm.png
pre: ""
nex: ""
---
### 3. 정렬 : 버블정렬편

<p class="bold-text"> i) 과정 </p>
 - intput 배열 준비
 - 1번 인덱스 값과 과 2번 인덱스 값을 비교 큰 친구를 2번으로 교환, 2번과 3번을 비교 큰 친구를 3번으로 변경.. N까지 진행한다.
 - 1번 인덱스 값과 과 2번 인덱스 값을 비교 큰 친구를 2번으로 교환, 2번과 3번을 비교 큰 친구를 3번으로 변경.. N-1까지 진행한다.

<p class="bold-text"> ii) 장점 </p>
 - 구현이 쉽다
   
<p class="bold-text"> iii) 단점 </p>
 - 제일 느리다 ( 다른것 쓰자 )
 - 레코드 이동이 많다.

<p class="bold-text"> vi) 시간복잡도</p>
: O(n^2) 

<pre>
class BubbleSort {
    int [] data; 
   
    BubbleSort( int[] data ){
        this.data = data;
    }
    // 오름차순 정렬 1 2 3 4 5
    public void ascendingSrot() {
        sort(1);
    }
    
    public void descendingSrot() {
        sort(0);
    }
    
    // 1이면 오름차순 , 0이면 내림차순
    public void sort(int position) {
        for (int indexCycle = 0; indexCycle &lt; data.length;indexCycle++) {
            for (int index = 0; index&lt; data.length - indexCycle-1 ; index++) {
                int nextIndex      = index+1;
                int nextValue      = data[nextIndex];
                int beforeValue   = data[index];
                Boolean next  = position == 1 ? beforeValue > nextValue : beforeValue &lt; nextValue;
                // 데이터 교환
                if( next ) {
                    // 데이터 변경
                    data[index]     = nextValue;
                    data[nextIndex] = beforeValue;
                }
            }
        }
    }
    
    public void print() {
        StringBuilder result = new StringBuilder();
        for (int i : data) {
            result.append(i + " ");
        }
        System.out.println(result.toString());
    }
}

**사용하기
int[] data = {254,3,213,64,75,56,4,324,65,78,9,5,76,3410,8,342,76};
BubbleSort sortData = new BubbleSort(data);

sortData.ascendingSrot();
sortData.print();

sortData.descendingSrot();
sortData.print();
</pre>
