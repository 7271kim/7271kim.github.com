---
title: JAVA 알고리즘 1 (Algorithm)
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
meta_keywords: 알고리즘, 보글게임, 완전 탐색, 순열
last_modified_at: '2020-09-12 14:00:00 +08000'
toc: true
toc_sticky: true
toc_label: 목차
---
# Step 1 : 알고리즘(Algorithm)란 무엇인가?
알고리즘은 어떠한 입력이 있다면 이 입력에 따라 명령을 명확하게 실행하고, 효과적으로 입력에 따른 결과물을 도출할 수 있다면 알고리즘으로 볼 수 있습니다. 
즉 특정 원하는 결과를 도출하기 위해 처리하는 의사결정 과정의 코드를 알고리즘이라 칭할 수 있습니다. 
알고리즘은 무궁무진하며 지금부터는 이 문제 저 문제 풀어보면서 알게 된 기본적인 알고리즘을 정리하겠습니다.

# 완전 탐색 ( Brute - Force )
완전 탐색이란 사람이 손으로 하기엔 오래 걸리는 일을 컴퓨터의 힘을 빌려 모든 경우의 수를 계산하여 원하는 결과를 탐색하는 방법입니다. 즉 무식하게 처리하지만 단순하고 강력한 방법이기도 합니다. 

## 재귀 함수
재귀 함수이란 컴퓨터가 수행할 작업 중 반복되는 것을 작업 단위로 쪼개어 한 작업을 실행 후 나머지 작업을 자기 자신에게 호출하는 하여 결과를 완성하는 것을 말합니다. 주로 완전탐색에서 자주 사용되는 방법입니다. 

### 순열 ( Permutation )
순열이란 n 개의 값 중에서 r 개를 순서대로 뽑는 경우를 말합니다. 순열을 풀기 위해서 2가지 방법이 존재합니다.

<p class="bold-text">1)중첩 for문 사용</p>
<p class="bold-text">2)재귀호출 사용해서 구현</p>

** String n 크기의 배열이 들어 왔을 때, 3개를 순서대로 뽑는 경우의 수를 한번 만들어 보겠습니다. 

```java
//ex 123, 124..
String[] people = {"1","2","3","4","5","6"};
result(people);
```

#### 단순 무식하게 중첩루프 사용
풀이는 간단합니다. 중첩 루프를 뽑는 개수만큼 만들고 한번 나왔던 것을 제거하고 도는 것 입니다. 
```java
private static void result( String[] people ) {
    int count = 0;
    for( int firstIndex = 0; firstIndex < people.length; firstIndex++ ) {
        for( int secondIndex = 0; secondIndex < people.length; secondIndex++ ) {
            
            if( firstIndex == secondIndex ) continue;
            
            for( int thirdIndex = 0; thirdIndex < people.length; thirdIndex++ ) {
                if( thirdIndex == secondIndex || thirdIndex == firstIndex ) continue;
                
                String first = people[firstIndex];
                String second= people[secondIndex];
                String third = people[thirdIndex];
                count++;
                System.out.println("( "+first +" " + second + " " + third +" )");
            }
        }
    }
    System.out.println("총 경우의 수 : " + count);
}

```

#### 재귀함수로 구현
위로 푼 방법과 유사합니다. 다만 좀 더 코드를 줄일 수 있는 장점이 있습니다. 미리 3개를 뽑는 것이니 크기가 3인 result 배열을 만들어 두고 앞에부터 채워가는데 기존 나왔던 것을 제외하고 채워가는 것입니다. 
```java
private static void result( String[] people ) {
    int r = 3;
    boolean[] isChecked = new boolean[people.length];
    String[] result = new String[r];
    ArrayList<String[]> totalList = new ArrayList<String[]>();
    
    permutation(people, isChecked, result, r, 0, totalList);
    
    for (String[] strings : totalList) {
        String temp = "";
        for( String text : strings ) {
            temp += " " + text;
        }
        System.out.println(temp);
    }
    System.out.println("총 경우의 수 : " + totalList.size());
}

private static void permutation( String[] people, boolean[] isChecked, String[] result, int endPoint, int dept, ArrayList<String[]> totalList ) {
    if( endPoint == dept ) {
        totalList.add(result.clone());
    } else {
        for ( int i = 0; i < people.length; i++ ) {
            if( !isChecked[i] ) {
                isChecked[i] = true; // 사용된 배열 위치
                result[dept] = people[i]; // 저장 
                permutation(people, isChecked, result, endPoint, dept + 1, totalList);
                isChecked[i] = false; // 사용된 것 다시 제자리
                result[dept] = ""; // 저장된 것 제자리
            }
        }
    }
}
```


**참고자료** <br> <br>
-- 인사이트 - 프로그래밍대회에서 배우는 알고리즘 문제해결 전략( 저자 - 구종만 ) ( C언어 ) <br> 
{: .notice--info}