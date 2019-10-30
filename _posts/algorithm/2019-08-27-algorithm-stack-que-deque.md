---
title: 자료구조 <br/> ( Stack 스택, Que 큐, Deque 덱 )
layout: post
summary: 스택, Que 큐, Dequq 댁이란
categories: 
    - algorithm
    - JAVA
tags: 
   - difficulty-low: "난이도 중"
thumbnail: posts/icon-algorithm.png
pre: "/algorithm/java/2019/08/15/algorithm-tree.html"
nex: "/algorithm/java/2019/09/02/algorithm-big.html"
---
<p class="bold-text">1. Stack 이란</p>
 - 후입 선출 구조 LIFO
 - 위로 쌓아 간다.
 - 중간을 볼 수 없다. 위에서부터 찾아야 한다.
<pre>
Stack&lt;Integer> stack = new Stack&lt;>();

push 1
1

push 2
2
1

push 3
3
2
1

pop() >> 위에 있는 것 제거 
2
1

peak() >> 맨 위에있는 것 출력 2
2
1

empty
size
</pre>

<p class="bold-text">2. Que란</p>
 - 선입 선출 FIFO
 - 아래로 쌓아간다.
<pre>
Queue&lt;Integar> q = new LinkedList&lt;Integar>();

add 1 
1

add 2
1
2

add 3
1
2
3

poll()
2
3

peak()
2
3

empty 
size

queue.add(queue.poll());
Que의 순회 
</pre>

<p class="bold-text">3. Deque란</p>
 - 양쪽 모두 입력과 출력이 가능
<pre>
 Deque&lt;Integar> test = new ArrayDeque&lt;Integar>();


addFirst 1 (맨 위에 넣기) >> O(1)
1

addLast 2 (맨 아래에에 넣기)>> O(1)
1
2

addFirst 3 >> O(1)
3
1
2

addLast 4
3
1
2
4

pop() >> 맨 위에 있는 것 제거 >> O(1)
1
2
4

removeLast() >> 맨 아래에있는 것 제거 >> O(1)
1
2

peek() >> 맨 위에 잇는것 출력 1 >> O(1)
1
2

peekLast() >> 맨 아래에 있는 것 출력 2 >> O(1)
1
2

empty - > O(N)
size -> O(n)

queue.add(queue.poll());
Que의 순회 
</pre>
