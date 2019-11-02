---
title: 자료구조 <br/> ( Trie )
layout: post
summary: Trie
categories: 
    - dataStructure
    - JAVA
thumbnail: posts/icon-data-structure.png
pre: "/datastructure/java/2019/10/28/data-structure-graph.html"
nex: ""
---
### 6. 자료구조 : Trie편

<div class="img-center">
    <img src="/assets/img/posts/dataStructure/trie.png" class="max-ratio-100" />
</div>
 - 문자열 검색에 특화된 자료구조 (검색 O(n))
 - "APPC", "APPD", "ABC" 저장시 위 그림처럼 저장되어 검색할때 편하다.
 
<p class="bold-text">구현하기</p>
<pre>
{% raw %}
public class MyTtie {
    private class Node {
        private Object value;
        private char inputChar;
        private Node[] childNode;
        private Boolean isLast;
        
        private Node () {
            this.childNode   = new Node[26];
            this.isLast      = false;
        }
        private Node ( char inputChar ) {
            this.inputChar = inputChar;
            this.childNode   = new Node[26];
            this.isLast      = false;
        }
        
        private Node ( char inputChar, int value ) {
            this.inputChar = inputChar;
            this.childNode   = new Node[26];
            this.value       = value;
            this.isLast      = false;
        }
        
        private void setChild ( Node node, int key ) {
            this.childNode[key] = node;
        }
        
        private void setValue ( Object value ) {
            this.value = value;
        }
        
        private Object getValue () {
            return this.value;
        }
       
        private Node getChild ( int key ) {
            return childNode[key];
        }
        
        private Boolean hasChild ( int key ) {
            return childNode[key] != null;
        }
        private void setIslast ( Boolean input) {
            this.isLast = input;
        }
        private Boolean getIsLast () {
            return this.isLast ;
        }
        
    }
    
    public MyTtie() {
        this.root = new Node();
    }
    
    // 삽입
    public void insert( String inputText, int value ) {
        Node tempNode = root;
        int size = inputText.length();
        
        for (int index = 0; index &lt; size; index++) {
            char temp = inputText.charAt(index);
            int key   = changeKey(temp);
           
            // 하위 노드 확인 후 생성
            if(!tempNode.hasChild(key)) {
                Node node = new Node( temp, value );
                tempNode.setChild( node, key );
                tempNode = node;
            } else {
                tempNode = tempNode.getChild(key);
            }
            
            // 문자열의 종료를 나타냄 ABCD 노드가 True라면 ABCD라는 것이 있음
            if(index == size-1) {
                tempNode.setIslast(true);
            }
        }
    }
    
    public void insert( String inputText ) {
        Node tempNode = root;
        int size = inputText.length();
        
        for (int index = 0; index &lt; size; index++) {
            char temp = inputText.charAt(index);
            int key   = changeKey(temp);
           
            // 하위 노드 확인 후 생성
            if(!tempNode.hasChild(key)) {
                Node node = new Node( temp, 1 );
                tempNode.setChild( node, key );
                tempNode = node;
            } else {
                tempNode = tempNode.getChild(key);
            }
            
            // 문자열의 종료를 나타냄 ABCD 노드가 True라면 ABCD라는 것이 있음
            if(index == size-1) {
                tempNode.setIslast(true);
            }
        }
    }
    
    public Boolean search( String inputText ) {
        Boolean result = true;
        int size = inputText.length();
        Node tempNode = root;
        
        for (int index = 0; index &lt; inputText.length(); index++) {
            char temp = inputText.charAt(index);
            int key   = changeKey(temp);
            if( tempNode.hasChild(key) ) {
                tempNode = tempNode.getChild(key);
            } else {
                result = false;
                break;
            }
            
            if(index == size-1) {
                result = tempNode.getIsLast();
            }
        }
        return result;
    }
    
    public Object getValue( String inputText ) {
        Node tempNode = root;
        Object result = tempNode.getValue();
        for (int index = 0; index &lt; inputText.length(); index++) {
            char temp = inputText.charAt(index);
            int key   = changeKey(temp);
            if( tempNode.hasChild(key) ) {
                tempNode = tempNode.getChild(key);
                result = tempNode.getValue();
            } else {
                result = null;
                break;
            }
        }
        return result;
    }
    
    public int changeKey( char input ) {
        return input - 'a';
    }
    
}


** 사용하기 
 MyTtrie temp  = new MyTtrie();
temp.insert("appc");
temp.insert("appd");
temp.insert("abc");

System.out.println(temp.search("abc"));
{% endraw %}
</pre>