---
title: 알고리즘 <br/> ( 동적 계획법  )
layout: post
summary: 동적 계획법 ( 피보나치 )
categories: 
    - algorithm
    - JAVA
tags: 
   - difficulty-low: "난이도 중"
thumbnail: posts/icon-algorithm.png
nex: ""
---
### 1. 동적계획법 : 피보나치편 
 - 동적 계획법이란 복잡한 문제를 간단한 여러 개의 문제로 나누어 푸는 방법을 통친한다고 보면 된다.
 - 즉 현재 답이 직전 답들에 연관이 있을 때를 말한다.
 - 그중 대표적인 것이 피보나치
 - 피보나치의 수 >> F1 = 1 , F2 = 1 , Fn = Fn-1 + Fn-2;
 -  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 .....

<p class="bold-text">1. 순수 방법 </p>
 - 그대로 한다.
 <pre>
{% raw %}
public int nomalFibonacci( int n )  {
    if( n == 1 || n == 2 ) {
        return 1;
    } else {
        int before = nomalFibonacci(n-1);
        int second = nomalFibonacci(n-2);
        return before + second;
    }
}
{% endraw %}
</pre>

- 해당 방법은 문제가 있는데 중복 케이스가 너무 많아 깊어질 수록 함수 호출이 급격하게 늘어난다.

<div class="img-center">
    <img src="/assets/img/posts/algoritm/pibo.png" class="max-ratio-100" />
</div>

 
<p class="bold-text">2. memoization 이용</p>
 - 한번 나온 값을 저장해 놓겠다.
 - 한번 나온 것을 저장해 놓는 방식에는 2가지가 존재
 - Top down : 큰 친구부터 차근차근 만들어 가는 것 , 단 : 재귀함수를 통해서 구현되기 때문에 함수 호출에 대한 오버헤드가 발생,  memoization을 잘 활용하면 Bottom-Up보다 훠어어얼씬 빠름
 - Bottom up : 작은 친구부터 차근차근 만들어 가는 것,

<pre>
{% raw %}
public class DynamicProgramming {
    
    int[] memorization;
    
    public DynamicProgramming( int size) {
      memorization = new int[size+1];
    }
  
    public int nomalFibonacciTopDown( int n )  {
        if( memorization[n] != 0 ) return memorization[n];
        
        if( n == 1 || n == 2 ) {
            return 1;
        } else {
            int before = nomalFibonacci(n-1);
            int second = nomalFibonacci(n-2);
            
            memorization[n] = before + second;
            
            return memorization[n];
        }
    }
    // Fn-1 + Fn-2의 맨 처음부분부터 하나하나 만들어간다.
    public int nomalFibonacciBottomUp( int n )  {
        if( memorization[n] != 0 ) return memorization[n];
        
        memorization[1] = 1;
        memorization[2] = 1;
        
        for( int index = 3; index &lt;= n; index++ )
            memorization[index] = memorization[index-2] + memorization[index-1];
        
        return memorization[n];
    }
}

** 사용하기
DynamicProgramming dp = new DynamicProgramming(5);
System.out.println(dp.nomalFibonacci(5));
// 1 , 1 ,  (1 + 1) = 2 , ( 1 + 1 ) + 1 = 3 , 3+2 =5 >> 5

{% endraw %}
</pre>