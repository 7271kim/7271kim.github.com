---
title: 알고리즘 <br/> ( 정렬 - 선택정렬 )
layout: post
summary: 선택정렬
categories: 
    - algorithm
    - JAVA
tags: 
   - difficulty-low: "난이도 중"
thumbnail: posts/icon-algorithm.png
pre: ""
nex: ""
---
### 1. 정렬 : 선택정렬편

<p class="bold-text"> i) 과정 </p>
 - intput 배열 준비
 - 첫번째 인덱스와와 다음인데스를 쭉 비교하여 마지막까지 비교 후 가장 작은 최소값을 찾는다. 그리고 교환한다(교환 1회)
 - 두번째 인덱스와 마지막까지 비교하여 가장 작은 최소값을 찾는다. 그리고 교환한다 

<p class="bold-text"> ii) 장점 </p>
 - 코드가 간단하다, 실제 교환 횟수가 적다
   
<p class="bold-text"> iii) 단점 </p>
 - 느리다

<p class="bold-text"> vi) 시간복잡도</p>
: O(n^2) 

<pre>
class SelectionSort {
    int [] data; 
   
    SelectionSort( int[] data ){
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
        for (int index = 0; index &lt; data.length; index++) {
            int change      = data[index];
            int chgeIndex   = index;
            for (int indexNext = index+1; indexNext &lt; data.length; indexNext++) {
                Boolean next  = position == 1 ? data[indexNext] &lt; change : data[indexNext] > change;
                if(next) {
                    change      = data[indexNext];
                    chgeIndex   = indexNext;
                }
            }
            // 데이터 변경 
            if( chgeIndex != index) {
                int temp    = data[index];
                data[index] = change;
                data[chgeIndex] = temp;
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
int[] data = {2,3,1,45,5};
SelectionSort selection = new SelectionSort(data);

selection.ascendingSrot();
selection.print();

selection.descendingSrot();
selection.print();
</pre>
