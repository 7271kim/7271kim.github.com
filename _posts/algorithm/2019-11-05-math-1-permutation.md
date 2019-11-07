---
title: 알고리즘 <br/> ( 순열  )
layout: post
summary: 순열
categories: 
    - algorithm
    - JAVA
tags: 
   - difficulty-low: "난이도 중"
thumbnail: posts/icon-algorithm.png
nex: "/algorithm/java/2019/11/07/math-2-combination.html"
---
### 1. 수학 : 순열편 
 - <a href="https://bcp0109.tistory.com/14" target="_blank">https://bcp0109.tistory.com/14</a>  해당 포스트를 참고하였습니다.
 - nPr 구하는 방법에 대한 설명

<p class="bold-text">1. Swap을 이용한 방법</p>
 - 원하는 최종 배열을 만들어 놓은 후 거기서 뽑아 쓰겠다.
 - 총 n개 크기의 배열에서 1개를 원한다면 현재 배열에서 1개씩 스왑 후 스왑한 배열에서 1개를 가지고 오면 된다.
 - 총 n개 크기의 배열에서 2개를 원한다면 현재 배열에서 1개씩 스왑 후 스왑한 배열에서 스왑 배열 기준으로 r이 같아 질때까지 스왑한다. 
 - 아래 그림 참고
 <div class="img-center">
    <img src="/assets/img/posts/algoritm/permutation_swap.png" class="max-ratio-100" />
 </div>


<pre>
public class Permutation2 {
    private int[][] returnArr;
    private int totalCount;
    
    
    public Permutation2( int[] input, int r ) {
        int orignalSize = input.length;
        int totalSize = totalSize( orignalSize ) ;
        this.returnArr = new int[totalSize][r];
        this.totalCount = 0;
        
        permutationSwap( input, 0, orignalSize, r );
        
    }
    
    public void newSetting( int[] input, int r ) {
        int orignalSize = input.length;
        int totalSize = totalSize( orignalSize ) ;
        this.returnArr = new int[totalSize][r];
        this.visited   = new boolean[orignalSize];
        this.output    = new int[orignalSize];
        this.totalCount = 0;
        
        permutationDictionary( input, 0, orignalSize, r );
    }
    public void permutationSwap( int[] input, int depth, int n, int r ) {
        if(depth == r) {
            //전체 값들 하나하나 담기, 해당 배열의 전체케이스가 들어갈 returnArr이 최종 반환값
            int[] temp = new int[r];
            for (int index = 0; index &lt; r; index++) {
                temp[index] = input[index];
            }
            returnArr[totalCount++] = temp;
        }
        // depth부터 마지막까지 반복
        for(int i=depth; i&lt;n; i++) {
            //Swap
            swap(input, depth, i);
            permutationSwap(input, depth + 1, n, r);
            // 다음 로직을 위한 원상복구 로직
            swap(input, depth, i);
        }
    }
    public void swap(int[] input, int before, int after) {
        int temp = input[before];
        input[before] = input[after];
        input[after] = temp;
    }
    public int totalSize( int input ) {
        if( input == 1 ) return 1;
        
        return input*totalSize(input-1);
    }
    public int[][] getReturnArr() {
        return returnArr;
    }
}

** 사용하기
int&#91;]input = {1,2,3,4};
int r = 3;
Permutation2 pe2 = new Permutation2(input, r);
int&#91;]&#91;] result = pe2.getReturnArr();
for (int index = 0; index < result.length; index++) {
    for (int index2 = 0; index2 < result[index].length; index2++) {
        System.out.print(result[index][index2] + " ");
    }
    System.out.println();
}

System.out.println("새로시작");
input = new int[]{1,2,3,4,5};
pe2.newSetting(input, 5);
result = pe2.getReturnArr();

for (int index = 0; index < result.length; index++) {
    for (int index2 = 0; index2 < result[index].length; index2++) {
        System.out.print(result[index][index2] + " ");
    }
    System.out.println();
}
</pre>

<p class="bold-text">1. 정렬을 위한 Visited 배열을 이용하는 방법</p>
 - input 배열을 0 ~ 배열의 크기 만큼 반복적으로 돌면서 방문 한 것 외 채워넣으며 원하는 크기가 되었을 때 반환하는 방법
 - 아래 그림 참고
 <div class="img-center">
    <img src="/assets/img/posts/algoritm/permutation_dic.png" class="max-ratio-100" />
 </div>

<pre>
{% raw %}
public class Permutation2 {
    private int[][] returnArr;
    private int totalCount;
    boolean[] visited; // 방문 여부를 확인하는 배열
    int[] output;
    
    public Permutation2( int[] input, int r ) {
        int orignalSize = input.length;
        int totalSize = totalSize( orignalSize ) ;
        this.returnArr = new int[totalSize][r];
        this.visited   = new boolean[orignalSize];
        this.output    = new int[orignalSize];
        this.totalCount = 0;
        
        permutationDictionary( input, 0, orignalSize, r );
        
    }
    
    public void newSetting( int[] input, int r ) {
        int orignalSize = input.length;
        int totalSize = totalSize( orignalSize ) ;
        this.returnArr = new int[totalSize][r];
        this.visited   = new boolean[orignalSize];
        this.output    = new int[orignalSize];
        this.totalCount = 0;
        
        permutationDictionary( input, 0, orignalSize, r );
    }
    
    public void permutationDictionary(int[] input, int depth, int n, int r) {
        if(depth == r) {
            // 여기 진입시 최종 결과인 output배열은 완성 된 상태다.
            // 최종 out을 배열에 하나하나 넣어주기
            int[] temp = new int[r];
            for (int index = 0; index &lt; r; index++) {
                temp[index] = output[index];
            }
            returnArr[totalCount++] = temp;
        }
        // 0 ~ n까지 계속 반복
        for(int i=0; i&lt;n; i++) {
            // true 아닌것 만 하나하나 채워 넣겠다. 
            if(visited[i] != true) {
                visited[i] = true; // 들렸다는 체크
                output[depth] = input[i]; // 최종 아웃풋에 넣기
                permutationDictionary(input, depth + 1, n, r);       
                visited[i] = false;  // 다음 로직을 위한 다시 원상복구 로직
                output[depth] = 0; // 다음 로직을 위한  다시 원상복구 로직
            }
        }
    }
    
    public int totalSize( int input ) {
        if( input == 1 ) return 1;
        
        return input*totalSize(input-1);
    }
    
    public int[][] getReturnArr() {
        return returnArr;
    }
}

** 사용하기
int&#91;]input = {1,2,3,4};
int r = 3;
Permutation2 pe2 = new Permutation2(input, r);
int&#91;]&#91;] result = pe2.getReturnArr();
for (int index = 0; index < result.length; index++) {
    for (int index2 = 0; index2 < result[index].length; index2++) {
        System.out.print(result[index][index2] + " ");
    }
    System.out.println();
}

System.out.println("새로시작");
input = new int[]{1,2,3,4,5};
pe2.newSetting(input, 5);
result = pe2.getReturnArr();

for (int index = 0; index < result.length; index++) {
    for (int index2 = 0; index2 < result[index].length; index2++) {
        System.out.print(result[index][index2] + " ");
    }
    System.out.println();
}
{% endraw %}
</pre>

