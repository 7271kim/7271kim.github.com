---
title: 자료구조 <br/> ( BigDecimal 연산 )
layout: post
summary: 큰수에 대한 연산방법
categories: 
    - algorithm
    - JAVA
tags: 
   - difficulty-low: "난이도 중"
thumbnail: posts/icon-algorithm.png
pre: ""
nex: ""
---
<p class="bold-text">1. BigDecimal 이란</p>
 - 정확한 숫자(실수)계산을 위해 설계된 클래스 
 - 엄청큰수도 계산 가능하다.
<pre>
BigDecimal sum      = new BigDecimal("0");

1. 덧셈
sum = sum.add( new BigDecimal("111111111111111111111111111111111111111111111111111"));
System.out.println(sum); // 111111111111111111111111111111111111111111111111111

2. 뺄셈
sum = sum.subtract( new BigDecimal("11111"));
System.out.println(sum); // 111111111111111111111111111111111111111111111100000

3. 곱셈
sum = sum.multiply( new BigDecimal("10000000000000"));
System.out.println(sum); // 1111111111111111111111111111111111111111111111000000000000000000

4. 나눗셈
BigDecimal.ROUND_UP : 올림
BigDecimal.ROUND_DOWN : 버림
BigDecimal.ROUND_HALF_UP : 반올림 ( 5 이상 올림 )
BigDecimal.ROUND_HALF_DOWN : 반내림 ( 5 이하 내림 )

sum = sum.divide( new BigDecimal("121") , 5 , BigDecimal.ROUND_UP);
System.out.println(sum); // 9182736455463728191000918273645546372819100090909090909090909.09091

sum = sum.divide( new BigDecimal("121") , 5 , BigDecimal.ROUND_DOWN); 
System.out.println(sum); //75890383929452299099181142757401209692719835462058602554470.32306

sum = sum.divide( new BigDecimal("121") , 5 , BigDecimal.ROUND_HALF_UP);
System.out.println(sum); //627193255615308257018025973201662890022477979025277707061.73821

sum = sum.divide( new BigDecimal("121") , 5 , BigDecimal.ROUND_HALF_DOWN);
System.out.println(sum); //5183415335663704603454760109104651983656842801861799231.91519

</pre>