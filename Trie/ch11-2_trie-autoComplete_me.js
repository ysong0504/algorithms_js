class Node {
  constructor(value) {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  // 문자 삽입
  insert(string) {
    let curNode = this.root; // root는 비워놓는다.
    for (const char of string) {
      if (!curNode.children.has(char)) {
        curNode.children.set(char, new Node(curNode.value + char));
      }
      curNode = curNode.children.get(char);
    }
  }

  // 값 유무 확인
  has(string) {
    let count = 0;
    let curNode = this.root;
    for (const char of string) {
      if (!curNode.children.has(char)) {
        count++;
        return false;
      }
      curNode = curNode.children.get(char);
    }
    return count;
  }

  /**
   * 단어 검색 횟수
   * @param {*} string
   * @returns
   */
  _count(string) {
    let curNode = this.root;
    let count = 0;
    for (const char of string) {
      // 찾고자하는 문자열이 없다면 false 반환
      if (curNode.children.has(char)) {
        count++;
      }
      // 문자가 끝날 때까지 자식 노드로 이동
      curNode = curNode.children.get(char);
    }

    return count;
  }
}

function solution(words) {
  const trie = new Trie();
  let total = 0;
  for (const word of words) {
    trie.insert(word);
    trie.count;
  }

  return total;
}
