---
title: 알고리즘 <br/> ( 조합  )
layout: post
summary: 조합
categories: 
    - algorithm
    - JAVA
tags: 
   - difficulty-low: "난이도 중"
thumbnail: posts/icon-algorithm.png
pre: "/algorithm/java/2019/11/05/math-1-permutation.html"
---
### 1. 수학 : 조합편 
 - nCr 구하는 방법에 대한 설명

<p class="bold-text">1. 동적 계획법을 응용한다. </p>
- 정말 간단한 일반 공식 응용  : nCr = n-1Cr-1 + n-1Cr
<pre>
{% raw %}
public class Combination {
    
    // 저장을 위한 공간
    int[][] memorization;
    
    public Combination( int n, int r ) {
      memorization = new int[n+1][r+1];
    }
    
    
    // 동적 계획법의 일부 nCr = n-1Cr-1 + n-1Cr
    public int combinationTopDow( int n, int r )  {
        // 기존 값이 있다면 리턴한다.
        if( memorization[n][r] != 0 ) return memorization[n][r];
        
        if( r == 0 || n == r ) {
            return 1;
        } else {
            int before = combinationTopDow( n - 1 , r - 1 );
            int second = combinationTopDow( n - 1 , r );
            memorization[n][r] = before + second;
            memorization[n][n-r] = before + second;
            
            return memorization[n][r];
        }
           
    }
    
    
    public int combinationBottomUp( int n, int r )  {
        // 기존 값이 있다면 리턴한다.
        if( memorization[n][r] != 0 ) return memorization[n][r];
        
        // 처음 디폴츠를 세팅해 놓는다 
        for ( int indexN = 1; indexN &lt; n; indexN++ )
            for ( int indexR = 0; indexR &lt;= indexN && indexR &lt;= r; indexR++ )
                if( indexR == 0 || indexN == indexR ) memorization[ indexN ][ indexR ] = 1;
                        
        // 점차 나아가면서 답을 세팅해 놓는다.
        for (int indexN = 2; indexN &lt;= n; indexN++)
            for (int indexR = 1; indexR  &lt; indexN && indexR &lt;= r; indexR++)
                memorization[indexN][indexR] = memorization[indexN-1][indexR-1] + memorization[indexN-1][indexR];
        
        return memorization[n][r];
    }
    
}

** 사용하기
// 5C3
dp = new DynamicProgramming(5);
System.out.println(dp.nomalFibonacciTopDown(5));

dp = new DynamicProgramming(5);
System.out.println(dp.nomalFibonacciBottomUp(5));

Combination cb = new Combination(5, 3);
System.out.println(cb.combinationTopDow(5, 3));

cb = new Combination(5, 3);
System.out.println(cb.combinationBottomUp(5, 3));

{% endraw %}
</pre>

