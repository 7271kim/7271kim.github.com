---
title: 자료구조 <br/> ( Tree )
layout: post
summary: Tree
categories: 
    - dataStructure
    - JAVA
thumbnail: posts/icon-data-structure.png
pre: "/datastructure/java/2019/10/26/data-structure-heap.html"
nex: "/datastructure/java/2019/10/28/data-structure-graph.html"
---
### 4. 자료구조 : Tree편

<div class="img-center">
    <img src="/assets/img/posts/dataStructure/tree.png" class="max-ratio-100" />
</div>
 - 하나의 루트 노드와 0개 이상의 자식노드로 이루어진 자료구조 주로 계층 관계를 표현한다.
 - DAG( Direct Acyclic Graph - 방향성이 있는 비순환그래프 )의 한 종류
 - Pre-order, In-order 아니면 Post-order로 이루어진다. 
 
<p class="bold-text">용어정리</p>
 - Root Node : 부모가 없는 노드
 - Leaf Node : 자식이 없는 노드
 - Edge      : 간선이라고 하며 노드를 연결하는 선
 - Size      : 자식을 포함한 노드의 갯수
 - Depth     : Root 노드에서 원하는 노드까지 거치는 간선의 수
 - 노드의 Degree : 차수라고 하며 자식의 수를 차수락 한다.
 - Degree of Tree : 트리의 차수란 모든 노드 중 자식의 수가 가장 많은 노드의 차수 

<p class="bold-text">트리의 종류</p>
 - 이진 트리 (Binary Tree) : 각 노드가 최대 두 개의 자식을 갖는 트리
 - 완전 이진 트리 ( Complete Binary Tree ) : 마지막 레벨을 제외한 모든 노드는 채워져 있어야 하며 마지막 레벨은 왼쪽부터 채워져 있어야 한다
 - 정 이진트리 ( Full Binary Tree ) : 모든 노드가 0개 또는 2개의 자식 노드를 갖는 트리
 - 포화 이진트리 ( Perfect Binary Tree ) : 모든 레벨의 노드가 꽉 차있는 경우
 - 이진 탐색 트리 ( Binary Search Tree ) : 중복된 값이 없으며 왼쪽 자식 값 <= root 노드 < 오른쪽 노드를 만족하는 트리 
 
 
<p class="bold-text">구현하기</p>
<pre>
{% raw %}
public class TreeNode {
    
    private Object node;
    private TreeNode left;
    private TreeNode right;
    
    public TreeNode( Object node ) {
        this.node   = node;
        this.left  = null;
        this.right  = null;
    }
    
    
    //중위 순회(in-order traversal): 왼쪽 가지 -> 현재 노드 -> 오른쪽 가지
    public void inOrderTraversal() {
        if( left != null ) left.inOrderTraversal();
        print();
        if( right != null ) right.inOrderTraversal();
    }
    
  //전위 순회(pre-order traversal): 현재 노드 ->왼쪽 -> 오른쪽 가지
    public void preOrderTraversal() {
        print();
        if( left != null ) left.preOrderTraversal();
        if( right != null ) right.preOrderTraversal();
    }
     
  //후위 순회(post-order traversal): 왼쪽 노드 -> 오른쪽 가지 -> 현재 가지
    public void postOrderTraversal() {
        if( left != null ) left.postOrderTraversal();
        if( right != null ) right.postOrderTraversal();
        print();
    }
    
    public void print() {
        if( node != null) {
            System.out.println(node);
        }
    }
    
    public void setLeft( TreeNode input ) {
        left = input;
    }
    public void setRight( TreeNode input ) {
        right = input;
    }
}

** 사용하기 
TreeNode root = new TreeNode(4);
root.setLeft(new TreeNode(3));
root.setRight(new TreeNode(2));

//현재 노드 ->왼쪽 -> 오른쪽 가지 4 3 2 
root.preOrderTraversal();

//왼쪽 가지 -> 현재 노드 -> 오른쪽 가지 3 4 2
root.inOrderTraversal();

//왼쪽 노드 -> 오른쪽 가지 -> 현재 가지 3 2 4
root.postOrderTraversal();
{% endraw %}
</pre>