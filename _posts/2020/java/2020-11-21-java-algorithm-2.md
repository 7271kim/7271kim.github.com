---
title: JAVA 알고리즘 2 (Algorithm)
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- JAVA
description: 알고리즘이란 무엇인지 같이 공부해보겠습니다.
article_tag1: 자료구조
article_section: Structure
meta_keywords: 알고리즘, 분할 정복, 쿼드 트리 뒤집기
last_modified_at: '2020-11-21 14:00:00 +08000'
toc: true
toc_sticky: true
toc_label: 목차
---
# 분할 정복 ( Divide & Conquer )
분할 정복 알고리즘은 유명한 알고리즘 패턴으로 각개 격파라는 표현을 사용할 수 있습니다. 
주어진 문제를 둘 이상의 부분 문제로 나눈 뒤 각 문제에 대한 답을 재귀 호출로 이용해 계산하고, 
각 부분의 답으로부터 전체의 해답을 계산하는 방법입니다. 분할 정복 알고리즘들은 대개 세 가지의 구성 요소를 가지고 있습니다. 

**- 문제를 더 작은 문제로 분할하는 과정 ( divide )** <br>
**- 각 문제에 대한 답을 원래 문제에 대한 답으로 병합하는 과정 ( merge )**<br>
**- 더는 답을 분할하지 않고 곧장 풀 수 있는 매우 작은 문제 ( base case )**<br>
{: .notice--info}

분할 정복을 위해서는 몇 가지 특정이 성립해야 합니다. 우선 문제를 둘 이상의 부분 문제로 나누는 자연스러운 방법이 있어야 하고, 부분 문제의 답을 조합해 원래 문제의 답을 계산하는 효율적인 방법이 있어야 합니다.


## fastSum(n) = 1+2+3+4+...+n
완전 탐색을 통한 단순 for문으로 해결할 수 있지만, 조금 더 효율적인 알고리즘을 짜보겠습니다.

**Divice, Merge : (1+2+3+..+n/2) + ((n/2+1) +(n/2+2)+...+n)**
{: .notice--info}
해당 형식으로 분할 한다면 앞쪽은 fastSum(2/n)으로 표시 가능합니다. 두 번째 부분은 a부터 b까지의 합으로 표현되므로 이를 fastSum형식으로 나타 낼 수 있어야 분할이 가능합니다. 해당은 ((n/2+1) +(n/2+2)+...+n) = ((n/2+1) +(n/2+2)+...+(n/2 +n/2) 로 나타낼 수 있기 때문에 결국 n/2 * n/2 + (1+2+3+..+n/2) 으로 가능하기 때문에 최종적으로는 fastSum(n) = fastSum(2/n) + n/2 * n/2 + fastSum(2/n) = 2 X fastSum(2/n) + n^2/4 로 표현 가능합니다. 단 이는 짝수일 때만 가능하기 때문에 홀수 일 때도 따로 처리가 필요합니다.

**Base Case : n이 1일때는 따로 계산이 필요없습니다.**
{: .notice--info}

```java
private static int fastSum(int n) {
    if( n == 1 ) {
        return 1;
    } else if(n % 2 == 1) {
        return fastSum(n-1) + n;
    } else {
        return 2*fastSum(n/2) + (n*n)/4;
    }
    
}
```

## 쿼드 트리 뒤집기
대량의 좌표데이터를 메모리 안에 압축해 저장하기 위해 사용하는 기술 중 Quad Tree란 것이 있습니다. 대표적으로 흑백 그림을 압축해 표현하는 것입니다. 2^n * 2^n 크기의 흑백 그림을 다음과 같은 과정을 거쳐 문자열로 압축하는 것입니다.

- 그림이 모두 검은색일 경우 압축 결과는 그림 크기와 관계없이 b입니다.
- 그림이 모두 흰색일 경우 압축 결과는 그림 크기와 관계없이 w입니다.
- 픽셀이 같은 색이 아니라면 쿼드 트리는 이 그림을 가로세로 각각 2등분해 4개의 조각으로 쪼갠 뒤 각각을 쿼드 트리 압축합니다. 이때 전체 그림의 압축 결과는 x(왼쪽 위 압축결과)(오른쪽위 압축 결과)(왼쪽 아래 압축결과)(오른쪽 아래 압축결과)
- 만약 전체 그림의 압축 결과가 xxwww bxwxw bbbww xxxww bbww wwbb가 주어졌을 때 이 그림을 상하로 뒤집은 그림을 쿼드 트리 압축해서 출력하는 프로그램을 작성하시오.

가장 무식한 방법은 그림을 다시 원래대로 만들고, 상하 반전, 쿼드트리압축 과정을 수행하는 것입니다. 다만 입력이 특정 이상이 될 경우 해당 방법은 사용할 수 없습니다. 이에 우리는 두 가지의 접근 방법을 생각해야 합니다.

- 큰 입력에도 동작하는 효율적인 알고리즘을 처음부터 새로 만들기
- 작은 입력에 대해서만 동작하는 알고리즘으로부터 시작해 최적화해 나가기.

둘 중 어느 접근이 맞는지 판단하기는 쉽지 않습니다. 하지만 접근하기 쉬운 방법은 두 번째 방법으로 단순한 알고리즘으로 시작해 최적화해 가는 것입니다. 
<br/><br/>
우선 가장 중요한 쿼드트리의 압축을 어떻게 풀어나가야 하는지 알아보겠습니다. 
쿼드트리 자체가 재귀적으로 구성되어 있기 때문에 트리를 압축하거나 해제하는 과정 또한 재귀 호출로 정의하는 것이 자연스럽습니다. 
압축을 해제하여 n * n의 이미지로 복구하는 decompress() 함수입니다. ( n은 주어졌다고 가정해야 해제할 수 있습니다. 예제는 16 * 16 이미지를 복구하는 것으로 하겠습니다. )

```java
private static int inputIndex = 0;
    
public static void main(String args[]){
    quardTreeDraw("xxwwwbxwxwbbbwwxxxwwbbbwwwwbb", 16);
    
}

private static void quardTreeDraw( String input , int n) {
    String[][] xy = new String[n][n];
    decompress(0, 0, n, input, xy );
    String result = "";
    for( int yindex = 0; yindex < n; yindex++ ) {
        for( int xIndex = 0; xIndex< n; xIndex++ ) {
            result += xy[yindex][xIndex] + " ";
        }
        result +="\n";
    }
    System.out.println(result);
    
}

private static void decompress( int x, int y, int n, String input, String[][] xy) {
    char inputItem = input.charAt(inputIndex++);
    if( inputItem == 'w' ) {
        for( int yIndex = 0; yIndex < n; yIndex++ ) {
            for( int xIndex = 0; xIndex < n; xIndex++ ) {
                xy[y + yIndex][ x + xIndex] = "-";
            }
        }
    } else if( inputItem == 'b' ) {
        for( int yIndex = 0; yIndex < n; yIndex++ ) {
            for( int xIndex = 0; xIndex < n; xIndex++ ) {
                xy[y + yIndex][ x + xIndex] = "+";
            }
        }
    } else {
        int half = n/2;
        decompress( x, y, half, input, xy );// 좌상.
        decompress( x+half, y, half, input, xy );// 우상.
        decompress( x, y+half, half, input, xy );// 좌하.
        decompress( x+half, y+half, half, input, xy );// 우하.
    }
}
```

이제 근본적으로 문제를 풀어봅시다. 재귀를 이용하는 것은 확실하며, 단순히 원하는 것은 뒤집은 그림입니다. 
'뒤집다'의 개념은 위아래가 바뀌는 것입니다. 즉 4등분으로 나누었을 때, 상하가 바뀌는 것이며, w, b일 때는 뒤집지 뒤집을 필요가 없어서 그대로를 return 하는 것입니다. 
즉 작은 문제로 분할 ( 4등분 한다. ) , 병합과정, base case를 코드로 표현하면 아래와 같습니다.

```java
private static int inputIndex = 0;

public static void main(String args[]){
    quardTreeRevers("xxwwwbxwxwbbbwwxxxwwbbbwwwwbb", 16);
    
}

private static void quardTreeRevers( String input , int n) {
    String result = revers( input );
    System.out.println(result);
    
}

private static String revers( String input ) {
    char inputItem = input.charAt(inputIndex++);
    if( inputItem == 'w' || inputItem == 'b' ) {
        return String.valueOf(inputItem);
    } else {
        String leftUp = revers(input);
        String rightUp = revers(input);
        String leftDown = revers(input);
        String rightDown = revers(input);
        
        return "x" + leftDown + rightDown + leftUp + rightUp;
    }
}
```

**참고자료** <br> <br>
-- 인사이트 - 프로그래밍대회에서 배우는 알고리즘 문제해결 전략( 저자 - 구종만 ) ( C언어 ) <br> 
{: .notice--info}