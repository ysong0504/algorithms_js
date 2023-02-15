class Node {
  constructor(value) {
    this.value = value; // 정점의 값
    this.children = new Map(); // 정점의 자식 데이터
  }
}

/**
 * 자동 검색에 사용되는 트라이
 */
class Trie {
  constructor() {
    this.root = new Node();
  }

  /**
   * 단어 추가
   * @param {*} string
   */
  insert(string) {
    let curNode = this.root;

    for (const char of string) {
      // 만약 해당되는 문자열이 없다면 새로 추가해준다.
      if (!curNode.children.has(char)) {
        curNode.children.set(char, newNode(curNode.value + char));
      }

      // 존재하지 않는 문자열이 확인될 때까지 문자열과 동일한 다음 자식 정점으로 이동한다.
      curNode = curNode.children.get(char);
    }
  }

  /**
   * 단어 유무 확인
   * @param {*} string
   * @returns
   */
  has(string) {
    let curNode = this.root;

    for (const char of string) {
      // 찾고자하는 문자열이 없다면 false 반환
      if (!curNode.children.has(char)) {
        return false;
      }

      // 문자가 끝날 때까지 자식 노드로 이동
      curNode = curNode.children.get(char);
    }
  }
}
