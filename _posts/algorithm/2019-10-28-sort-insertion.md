---
title: 알고리즘 <br/> ( 정렬 - 삽입정렬 )
layout: post
summary: 삽입정렬
categories: 
    - algorithm
    - JAVA
tags: 
   - difficulty-low: "난이도 중"
thumbnail: posts/icon-algorithm.png
pre: ""
nex: ""
---
### 2. 정렬 : 삽입정렬편

<p class="bold-text"> i) 과정 </p>
 - intput 배열 준비
 - 두번째 인덱스와와 첫번째 인덱스 값을 비요하여 작으면 자리교환한다.
 - 세번째 인덱스와 두번째 인덱스 값을 비교하여 작으면 자리교환. 두번째 첫번째 비교 후 자리교환, 자리교환이 일어나지 않는다면 정렬된 상태이므로 그만한다.
 - N까지 반복한다.
 

<p class="bold-text"> ii) 장점 </p>
 - 구현이 간단, 최선의 경우 O(N)
   
<p class="bold-text"> iii) 단점 </p>
 - 최악이 O(N^2)
 - 레코드 이동이 많다. 
<p class="bold-text"> vi) 시간복잡도</p>
: O(n^2) 

<pre>
class InsertionSort {
    int [] data; 
   
    InsertionSort( int[] data ){
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
        for (int index = 1; index &lt; data.length; index++) {
            int beforIndex  = index;
            int beforeValue = data[beforIndex];
            for (int indexNext = index-1; indexNext >= 0; indexNext--) {
                int thisValue   = data[indexNext];
                Boolean next  = position == 1 ? beforeValue &lt; thisValue : beforeValue > thisValue;

                // 조건에 안맞으면 정렬된 상태라 더이상의 로직은 불필요함
                if( next ) {
                    // 데이터 변경
                    int temp    = beforeValue;
                    data[beforIndex] = thisValue;
                    data[indexNext] = temp;

                    //초기화
                    beforIndex  = indexNext;
                } else {
                    break;
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
int[] data = {2,3,1,45,5};
InsertionSort insertion = new InsertionSort(data);

insertion.ascendingSrot();
insertion.print();

insertion.descendingSrot();
insertion.print();
</pre>
