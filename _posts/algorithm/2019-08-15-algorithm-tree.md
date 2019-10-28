---
title: 자료구조 <br/> ( Tree에 대한 정리 )
layout: post
summary: Tree란 무엇인가 
categories: 
    - algorithm
    - JAVA
tags: 
   - difficulty-low: "난이도 중"
thumbnail: posts/icon-algorithm.png
pre: "/algorithm/java/2019/09/04/algorithm-6.html"
nex: "/algorithm/java/2019/08/27/algorithm-stack-que-deque.html"
---
<p class="bold-text">Tree란</p>
 - 개인적인 정의는 특정 요구를 빠르게 검색하기 위해 짜놓은 데이터 구조.
 - 구간 합을 구하는 트리의 종류로 인덱스 트리, 세그먼트 트리, 펜윅 트리가 있다. 
 - 세그먼트 트리는 인덱스 트리가 포함하고 있는 한 종류이다. 세그먼트 트리로 풀 수 있는 문제는 인덱스 트리로 모두 풀 수 있다.
<br/>
<br/>
<p class="bold-text">1. Index Tree (IDT) 란</p>
- 특정 정보들을 2진 트리로 구성하여 두 개 노드의 부모노드에 대표값이나 연산결과를 저장, 이후 구간의 정보를 빠르게 파악하기 위해 사용
- 완벽히 떨어지는 2진트리를 만들기 위해서는 1 + 2 + 2^2 + 2^3 .. 수로 되어 무한 등비수열의 합 공식을 응용 2^n -1 이 전체 크기이다.
- 마지막 노드 리프에 원본 low 데이터가 들어갈 것이니 마지막 노드의 총 크기는 N <= 2^x 인 2^x이다. 
- 트리의 전체 크기는 1+2+2^2+...+2^x이니 등비수열의 합공식 응용 2^(x+1)-1 이 노드의 총 크기이다. 하지만 index를 0이 아닌 1부터 시작 
할 것이기 때문에 2^(x+1)이 노드의 총 크기.
- 아래 부분은 Index Tree의 기본 개념을 가지고 필자가 원하는대로 커스텀한 소스
<pre>
{% raw %}
 ex ) int[] or = {1,4,5,9,7} 일 경우
 
                 26
         19               7
     5       14      7         0
   1   4   5    9  7   0    0      0
- IndexTree의 특징 부모가 n 이면 왼쪽자식은 2n , 오른쪽 자식은 2n+1이다.
- 마지막 리프에 N을 넣어야 한다.

- int[] tree = { 0, 26, 19, 7, 5, 14, 7, 0, 1, 4, 5, 9, 7, 0, 0, 0 } 해당 데이터로 들어갈것임. 
 
{% endraw %}
</pre>
<p class="text-danger">인덱스 트리 소스</p>
<pre>
{% raw %}
// 구간합을 저장해 놓는 IndexTree
class IndexTree {
    private int data[];
    private int originalStart;
    
    public IndexTree( int[] orignal ) {
        int originalSize = orignal.length;
        originalStart = 1;
        
        // 1 + 2 + 2^2 + 2^3 + 2^4....2^(x-1) +2^x
        // 1 + 2 + 2^2 + 2^3 + 2^4....2^(x-1) = 2^x -1 >> 인덱스가 1부터 시작하니 +1 시켜 결론은 2^x임
        while (originalStart &lt; originalSize)
            originalStart &lt;&lt;= 1;
        
        //data의 크기는 2^x + 2^x이니 2^x*2 = originalStart*2
        data = new int[originalStart*2];
        
        for( int index = 0; index &lt; orignal.length; index++ ) {
            updateTree( index, orignal[index] );
        }
    }
    
    public void updateTree( int index, int value) {
        index += originalStart;
        // 마지막 리프에 원본 값을 저장
        int beforeValue = data[index];
        // 기존 값이 있다면 기존값 잠시 저장
        while(index > 0) {
            data[index] = data[index] - beforeValue + value;
            // 마지막 root까지 쭉 업데이트 시킴
            index>>=1;
        }
    }

   public int intervalSum( int start, int end ) {
       start += originalStart;
       end += originalStart;
       int sum = 0;
       while ( start &lt; end ) {
           //start가 홀수 일 경우 : 그냥 자기 자신을 더하고 우측 노드로 변경( 짝수로 만들어주기 위해 )
           if( start%2 == 1) {
               sum += data[start]; 
               start++;
           }
            //end가 짝수 일 경우 : 그냥 자기 자신을 더하고 좌측 노드로 이동( 홀수로 만들어주기 위해 )
           if( end%2 == 0) {
               sum += data[end];
               end--;
           }
           start>>=1;
           end>>=1;
           // 각자의 부모노드로 위치 변경
       }
       if( start == end ) {
           // start와 end가 같은 부모를 가지고 있을 경우
           sum += data[start];
       }
       
       return sum;
   }
   
    public void print() {
        for (int index = 0; index &lt; data.length; index++) {
            System.out.print(data[index] + " ");
        }
        System.out.println();
    }
}
{% endraw %}
</pre>
<br/>
<br/>
<p class="bold-text">2. Binary Indexed Tree 혹은 Fenwick Tre</p>
 - IDT 중에서도, 구간 합을 구하는데 특별한 자료구조 형태
 - Panwork tree ( Tree[i] )란 A[i]가 주어졌을 때, A[i]로부터 앞으로 ㄴ[i]의(마지막 1이 나타내는 값을 L[i]라고 표현) 합이 저장되도록 미리 만들어 놓은 자료구조 
 - T[1] = A[1] , T[2] = A[2] + A[1], T[3] = A[3], T[4] = A[1] + A[2] + A[3] + A[4] 이런식의 구조를 만들어 놓음
 - 개인적인 성향으로 origanal 데이터는 보존되어야 한다고 생각되어 T[ 1~원본데이터 크기 ] 는 팬윅 트리,  T[ 원본데이터 크기 ~ 원본데이터 크기 ]는 원본 데이터로 구성해 놓음
 - T[1,2,3,...원본사이즈(모두가 아는 팬윅),size+1,size+2,...size+size(원본데이터 구간)]
<pre>
class BinaryIndexTree{
    int tree [];
    int orignalSize;
    int treeLength;
    
    public BinaryIndexTree( int[] orignal ) {
        orignalSize = orignal.length;
        tree = new int[orignalSize*2+1]; // 기존은 원본 사이즈만 있으면 되지만, 원본데이터도 가지고 있기 위해 orignalSize *2 크기 + 인덱스가 1부터 시작하기위한 +1
        treeLength = tree.length-orignalSize; // 진짜 팬윅
        for (int index = 1; index &lt;= orignal.length; index++) {
            update(index, orignal[index-1]);
        }
    }
    public void update(int index, int value) {
        int orignalPosision = orignalSize+index; // 오리지널 데이터가 팬윅트리에 저장될 위치
        int beforeValue     = tree[orignalPosision]; // 이전 가지고 있는 값들
        tree[orignalPosision]   = value; // 오리지널 데이터 교체
        while (index &lt; treeLength) {
            tree[index] = tree[index] - beforeValue + value; // 팬윅 트리에 이전값이랑 신규 값이랑 교체하는 과정
            index += (index & -index);  // 인덱스의 마지막 1의자리를 +1시킴
            // index & (-index) 는 해당 2진수의 마지막 1의 자리를 찾기 1100 이면 8 , 101이면 1 , 즉 2비트씩 올리는 것
            // index += (index & -index); 은 index의 마지막 1의자리를 더하는것  즉   7일때 111의 마지막 1의자리 1 을 더하는 것 즉 111 > 1000 (8)이됨  한번 더 연산하면 1000 > 10000 이됨
            // 더 직관적으로 index += (index & -index)은 가장 가까운 2의 제곱수를 찾는 행위
            //& 연산자는 양쪽 비트가 모두 1일때만 1, 
            //-index 음수는 마지막 1의자리 빼고 나머지 1,0 전환
        }
    }

    // 1부터 전체합
    public int sumTotal(int index) {
        int res = 0;
        while (index > 0) {
            res += tree[index];
            index &= index-1;
            // 들어온 수의 1101 -> 1100 -> 1000 마지막 1의자리수를 줄여감 
        }
        return res;
    }

    //구간합
    public int sumInterVal(int start , int end) {
        return sumTotal(end) - sumTotal(start-1);
    }

    //팬윅트리 전체 출력
    public void printTotal() {
        for (int index = 0; index &lt; tree.length; index++) {
            System.out.print(tree[index] + " ");
        }
        System.out.println();
    }
    //팬윅트리만 출력
    public void printFenwick() {
        for (int index = 0; index &lt; treeLength; index++) {
            System.out.print(tree[index] + " ");
        }
        System.out.println();
    }
    //저장된 데이터만 출력
    public void printOriginal() {
        for (int index = treeLength; index &lt; tree.length; index++) {
            System.out.print(tree[index] + " ");
        }
        System.out.println();
    }
}
</pre>