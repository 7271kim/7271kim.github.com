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


### 조합
조합이란 n 개의 값 중에서 r 개를 뽑는 경우를 말합니다.( 123, 321은 같은 것입니다. ) 조합을 풀기 위해서 순열처럼 무식한 방법과 재귀를 이용한 방법이 존재합니다. 

#### 중첩 for문 사용
```java
private static void result( String[] people ) {
    int count = 0;
    for( int firstIndex = 0; firstIndex < people.length; firstIndex++ ) {
        for( int secondIndex = firstIndex+1; secondIndex < people.length; secondIndex++ ) {
            for( int thirdIndex = secondIndex+1; thirdIndex < people.length; thirdIndex++ ) {
                String first = people[firstIndex];
                String second= people[secondIndex];
                String third = people[thirdIndex];
                count++;
                System.out.println("( "+first +" " + second + " " + third +" )");
            }
        }
    }
    System.out.println(count);
  
}
```

#### 재귀호출 사용해서 구현
무한 루프에서 한 것을 똑같이 사용하는 것을 단지 재귀로 호출하는 방법입니다. 최종 결과를 저장할 result[]를 만들고 전달하였습니다. 
```java
private static void result( String[] people ) {
    int end = 3;
    int start  = 0;
    String[] tempResult = new String[end];
    int loopStartIndex = 0; 
    ArrayList<String[]> result = new ArrayList<String[]>();
    combination( people, end, start, tempResult, result, loopStartIndex );
    for (String[] strings : result) {
        String temp = "";
        for (String strings2 : strings) {
            temp += " " + strings2;
        }
        System.out.println(temp);
    }
    System.out.println(result.size());
    
}

private static void combination( String[] people, int end, int start, String[] tempResult, ArrayList<String[]> result, int loopStartIndex ) {
    if( end == start ) {
        result.add(tempResult.clone());
        return;
    }
    
    for( int index = loopStartIndex; index < people.length; index++ ) {
            tempResult[start] = people[index];
            combination(people, end, start+1, tempResult, result, index+1);
            tempResult[start] = "";
    }
}

```

### 보글게임
보글게임이란 n x n 격자에 한 단어씩 적혀있는 격자가 2차원 배열로 주어질 때, 해당 격자에서 원한는 단어를 찾을 수 있을 때, true를 찾을 수 없을 
때 false를 return하는 프로그램입니다. 직관적으로 특정 알고리즘 없이 완전 탐색으로 푼다면, 모든 격자를 시작점으로 인접 8칸에 원하는 단어가 
있는지 확인하는 것입니다.


```java
{% raw %}
public static void main(String args[]){
    String[][] word = {
                        {"N","N","N","N","S"},
                        {"N","E","E","E","N"},
                        {"N","E","Y","E","N"},
                        {"N","E","E","E","N"},
                        {"N","N","N","N","N"}
                    };

    System.out.println(findWord( word, "YES" ));
}
{% endraw %}
```

```java
private static boolean findWord(String[][] word, String findText) {
    //1. 종료 조건 현재 위치가 마지막이고, 마지막 단어와 매칭 여부
    //2. return 단어 존재 여부 boolean
    //3. 한번 온 곳은 다시 가면 안됨.
    boolean result = false;
    boolean[][] checking = new boolean[word.length][word.length];
    
    out : for (int yIndex = 0; yIndex < word.length; yIndex++) {
        for (int xIndex = 0; xIndex < word.length; xIndex++) {
            if( result ) {
                break out;
            } else {
                result = checking( word, findText, 0, yIndex, xIndex , checking);
            }
        }
    }
    
    
    return result;
}

private static boolean checking(String[][] word, String findText, int checkingIndex, int yIndex, int xIndex, boolean[][] checking) {
    boolean result = false;
    int[] yCheck = {-1, -1, -1, 0, 0, 1, 1, 1};
    int[] xCheck = {-1, 0, 1, -1, 1, -1, 0, 1};
    
    if( yIndex == word.length || yIndex < 0)  return false;
    if( yIndex == word.length || yIndex < 0) return false;
    if( xIndex == word.length || xIndex < 0) return false;
    if( checking[yIndex][xIndex] ) return false;
    
    String checkText = findText.substring(checkingIndex, checkingIndex+1);
    String wordText = word[yIndex][xIndex];
    
    if( !checkText.equals(wordText) ) {
        return false;
    }
    
    if( findText.length()-1 == checkingIndex ) {
       return checkText.equals(wordText);
    }
    
    // 8방면 검사 
    for (int cIndex = 0; cIndex < 8; cIndex++) {
        checking[yIndex][xIndex] = true;
        result = checking(word, findText, checkingIndex+1, yIndex+yCheck[cIndex], xIndex+xCheck[cIndex], checking);
        checking[yIndex][xIndex] = false;
        if( result ) {
            return true;
         }
    }
    
    return  result;
}
```

### 소풍
만약 n명의 사람이 소풍을 놀러가서 2명씩 짝을 지어야 하는데, 서로 친구라는 단서가 배열로 주어질 때, 서로 친구인 경우만 짝을 짓는 케이스를 출력하는 
프로그램을 짠다고 생각해봅시다.

```java
{% raw %}
String[] name = {"석진", "우리", "현식", "희범","성우","밥"};
int[][] friend = {{0,1},{0,2},{1,2},{1,3},{1,4},{2,3},{2,4},{3,4},{3,5},{4,5}};
{% endraw %}
check( name, friend );
```
완전 탐색을 통해 짝을 짓는 방법은 한명씩 짝을 구성하면서 둘이 친구인 지를 확인하여 친구인 경우만 결과에 추가하는 방법입니다. 
짝이 있는 경우는 넘어가면서 다음 짝을 찾는 경우를 찾으면 됩니다.

```java
private static void check(String[] name, int[][] friend) {
    // 사람 수와 친구 쌍이 주어졌을 때, 친구끼리 쌍을 짓는 경우의 수 도출
    // 2명을 짝을 짓고, 친구인지 확인, 친구인 경우 제거, 나머지로 반복한다. 전체를 다 돌았음에도 짝을 못짓는 경우는 불가능 하다.
    // 친구 여부를 확인하기 위한 2차원 boolean 배열 [0][1] = true일 시 둘은 친구이다. 
    boolean[][] isFriend = new boolean[name.length][name.length];
    for( int[] fi : friend ) {
        isFriend[fi[0]][fi[1]] = true;
        isFriend[fi[1]][fi[0]] = true;
    }
    
    // 종료 조건 친구 쌍을 다 찾았을 때 >> 남은 친구가 없을 때 사람수가 0일때.
    // return 친구 쌍 조합을 ArrayList
    // 확인 여부를 위한 캐쉬
    ArrayList<String> result = new ArrayList<>();
    boolean[] check = new boolean[name.length];
    StringBuilder temp = new StringBuilder();
    compair( name.length, result, check, temp, isFriend, name);
    System.out.println(result.size());
}

private static void compair( int length, ArrayList<String> result, boolean[] check, StringBuilder temp, boolean[][] isFriend, String[] name) {
    if( length == 0 ) {
        result.add(temp.toString());
        return;
    }
    int findIndex = 0;
    for( int index = 0; index < check.length; index++ ) {
        if( !check[index] ) {
            findIndex = index;
            break;
        }
    }
    // 자기 다음부터 찾아 사전식으로 구성하여 중복을 제거한다.
    for( int second = findIndex+1; second < name.length; second++  ) {
        if( !check[second] && isFriend[findIndex][second] ) {
            StringBuilder copy = new StringBuilder(temp.toString());
            check[findIndex] = true;
            check[second] = true;
            temp.append("( "+name[findIndex] + " ");
            temp.append(name[second] + " )");
            compair(length-2, result, check, temp, isFriend, name);
            check[findIndex] = false;
            check[second] =false;
            temp = copy;
        }
    }
}
```

### 게임판 덮기
H X W 크기의 2차원 게임판이 있습니다. 게임판이 흰 칸과 검은 칸으로 주어질 때, 세칸짜리 ㄱ모양의 격자로 뒤덮을 수 있는 경우의 수를 출력하는 
프로그램을 작성하시오.

```java
public static void main(String args[]){
     int[][] image = {
                        {1,1,1,1,1,1,1,1,1,1},
                        {1,0,0,0,0,0,0,0,0,1},
                        {1,0,0,0,0,0,0,0,0,1},
                        {1,0,0,0,0,0,0,0,0,1},
                        {1,0,0,0,0,0,0,0,0,1},
                        {1,0,0,0,0,0,0,0,0,1},
                        {1,0,0,0,0,0,0,0,0,1},
                        {1,1,1,1,1,1,1,1,1,1}
                   };
    totalCase( image );
}
```

```java
private static void totalCase( int[][] image ) {
    // 현재 기준점 기준 격채를 변경하면서 채운다.
    // 종료조건, 2차원 격자를 돌면서 모두 1인경우.
    // return total 1개씩 더해가는 것
    System.out.println(check( image ));
}
```
```java
private static int check( int[][] image ) {
    int findX = -1;
    int findY = -1;
    int result = 0;
    
    out : for( int y = 0; y < image.length; y++ ) {
        for( int x = 0; x < image[0].length; x++  ) {
            if( image[y][x] == 0 ) {
                findY = y;
                findX = x;
                break out;
            }
        }
    }
    // 종료조건 : 찾을 곳이 없을 때,
    if( findY == -1 ) {
        return 1;
    }
    // 격자 덮기 시작 4방향 
    for( int loop = 0; loop < 4; loop++ ) {
        if( orignalRota(image, findX, findY, loop) ) {
            result += check(image);
            returnRota(image, findX, findY, loop);
        }
    }
    return result;
}

// 복구 
private static void returnRota( int[][] image, int x, int y, int type ) {
    if( type == 0 ) {
        image[y][x] = 0;
        image[y][x+1] = 0;
        image[y+1][x] = 0;
    } else if( type == 1 ) {
        image[y][x] = 0;
        image[y][x+1] = 0;
        image[y+1][x+1] = 0;
    } else if( type == 2 ) {
        image[y][x] = 0;
        image[y+1][x] = 0;
        image[y+1][x+1] = 0;
    } else if( type == 3 ) {
        image[y][x] = 0;
        image[y+1][x] = 0;
        image[y+1][x-1] = 0;
    }
}

private static boolean orignalRota( int[][] image , int x, int y, int type ) {
    // 현재 기준으로 왼쪽과 위쪽은 다 채워져 있다고 가정. 현재 점 기준으로 ㄱ자 격자를 채울 수 있는 경우는 4가지, 비어있지 않다고 생각하면 경우의 수가 더 많음.
    if( ( x+1 ) == image[0].length || ( y+1 ) == image.length || x-1 < 0 ) return false;
    boolean result = false;
    if( type == 0 && image[y][x] == 0 && image[y][x+1] == 0 && image[y+1][x] == 0) {
        result = true;
        image[y][x] = 1;
        image[y][x+1] = 1;
        image[y+1][x] = 1;
    } else if(  type == 1 && image[y][x] == 0 && image[y][x+1] == 0 && image[y+1][x+1] == 0) {
      //ㄱ 자 1차 회전
        result = true;
        image[y][x] = 1;
        image[y][x+1] = 1;
        image[y+1][x+1] = 1;
    } else if(type == 2 &&  image[y][x] == 0 && image[y+1][x] == 0 && image[y+1][x+1] == 0 ) {
        result = true;
        image[y][x] = 1;
        image[y+1][x] = 1;
        image[y+1][x+1] = 1;
    } else if( type == 3 && image[y][x] == 0 && image[y+1][x] == 0 && image[y+1][x-1] == 0 ) {
      //ㄱ 자 3차 회전
        result = true;
        image[y][x] = 1;
        image[y+1][x] = 1;
        image[y+1][x-1] = 1;
    }
    
    return result;
}
```

### 시계 맞추기
예전부터 상상해봤던 문제들 중 하나로 , 1번 ~ 10번 스위치와 각 스위치와 연결된 시계위치가 주어지고, 스위치를 한 번 터치시 연결된 시계가 3시간 이동한다고 
할 때, 최소의 스위치를 눌러 모든 시계를 12시로 맞추는 최소 터치 횟수를 구하는 문제입니다. 풀이는 시계라는 것, 즉 터치 4번을 
하면 자기 자신의 시간으로 돌아온다는 것을 생각해내야 합니다. 즉 하나의 스위치를 누를 수 있는 최대 경우의 수는 4회입니다. 최대 경우의 수는 4^10 
= 1,048,576개로 충분히 작은 숫자이기 때문에 완전 탐색 가능합니다.

```java
// 스위치와 연결된 시계
ArrayList<Integer> temp = new ArrayList<>( Arrays.asList(0,1,2) );
caseTest.add(temp);

temp = new ArrayList<>( Arrays.asList(3,7,9,11) );
caseTest.add(temp);

temp = new ArrayList<>( Arrays.asList(4,10,14,15) );
caseTest.add(temp);

temp = new ArrayList<>( Arrays.asList(0,4,5,6,7) );
caseTest.add(temp);

temp = new ArrayList<>( Arrays.asList(6,7,8,10,12) );
caseTest.add(temp);

temp = new ArrayList<>( Arrays.asList(0,2,14,15) );
caseTest.add(temp);

temp = new ArrayList<>( Arrays.asList(3,14,15) );
caseTest.add(temp);

temp = new ArrayList<>( Arrays.asList(4,5,7,14,15) );
caseTest.add(temp);

temp = new ArrayList<>( Arrays.asList(1,2,3,4,5) );
caseTest.add(temp);

temp = new ArrayList<>( Arrays.asList(3,4,5,9,13) );
caseTest.add(temp);

int[] test = { 12,9,3,12,6,6,9,3,12,9,12,9,12,12,6,6 }; // 16개의 시계가 현재 바라보는 시간
totalCase( test ); 
``` 
```java
private static void totalCase( int[] test ) {
    // 케이스 당 4번 , 0,1,2,3
    // 종료조건, 모두가 12시인가.
    // 종료조건, min보다 클때.
    // 종료 조건, 9개를 선택했을 때
    int min = 1048577;
    min = check( test, 0, 1048577, 0 );
    if( min == 1048577 ) {
        min = -1;
    }
}
```
```java
private static int check( int[] test, int count, int min, int checkNextMin ) {
    boolean isFinish = true;
    for( int number : test ) {
        if( number != 12 ) {
            isFinish = false;
            break;
        }
    }
    if( isFinish ) {
        min = checkNextMin;
        return min;
    }
    
    if( checkNextMin > min || count == 9 ) {
        return min;
    }
    
    for( int index = 0; index < 4; index++ ) {
        rotate( test, count, index, 1 );
        count++;
        min = check(test, count, min, checkNextMin+index);
        count--;
        rotate( test, count, index, -1 );
    }
    
    return min;
    
}
```

```java
private static void rotate( int[] test, int count, int rotateCount ,int flag ) {
    ArrayList<Integer> temp =  caseTest.get(count);
    if( flag == 1 ) {
        // 정방향 회전
        for( Integer item : temp ) {
            int clockTime = test[item];
            test[item] = (clockTime+3*rotateCount)%12 == 0 ? 12 : (clockTime+3*rotateCount)%12;
        }
    } else {
        // 역방향 회전
        for( Integer item : temp ) {
            int clockTime = test[item];
            test[item] = (clockTime-3*rotateCount) <= 0 ? 12 + (clockTime-3*rotateCount)  : (clockTime-3*rotateCount);
        }
    }
}
```

**참고자료** <br> <br>
-- 인사이트 - 프로그래밍대회에서 배우는 알고리즘 문제해결 전략( 저자 - 구종만 ) ( C언어 ) <br> 
{: .notice--info}