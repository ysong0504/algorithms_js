/**
 * 연결 리스트의 요소
 */
class Node {
  constructor(value) {
    // 값
    this.value = value;
    // 포인터
    this.next = null;
  }
}

/**
 * 헤드와 테일로 이뤄진 연결 리스트
 */
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * 찾기 기능
   * @param {*} value
   * @returns
   */
  find(value) {
    // 찾고자 하는 요소의 값을 현재 노드로 정의한다.
    let curNode = this.head;
    // 원하는 값을 찾을 때까지 다음 요소를 조회한다.
    while (curNode.value !== value) {
      curNode = curNode.next;
    }
    // 원하는 요소가 나왔을 경우 해당 요소를 반환한다.
    return curNode;
  }

  /**
   * 마지막에 요소 추가하기
   *
   * @param {*} newValue
   */
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      // 만약 head가 없다면 노드가 비어있다는 의미이므로 head와 tail 포인터가 신규 노드를 가르키도록 한다.
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 만약 헤더가 있다면 값이 존재한다는 의미이르로 tail의 포인터가 다음 node를 가르키도록 한다.
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /**
   * 요소들 사이에 추가하기
   *
   * @param {*} node
   * @param {*} newValue
   */
  insert(node, newValue) {
    const newNode = new Node(newValue);
    // 1. 신규노드의 포인터가 2번째를 향하도록 수정
    newNode.next = node.next;
    // 2. 첫번째의 포인터를 신규 노드로 향하도록 수정
    node.next = newNode;
  }

  /**
   * 요소 삭제 (선형시간 소요)
   *
   * @param {*} value
   */
  remove(value) {
    // 1. 기존 노드 저장
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    // 기존 노드가 다음의 다음을 포인터로 가르키도록 설정 (그렇게 되면 스킵된 노드가 제거됨)
    // 이렇게 포인터가 안 가르키는 노드는 나중에 가비지컬렉터를 통해 제거된다.
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  /**
   * 노드 출력하기~
   */
  display() {
    let curNode = this.head;
    let displayString = "";
    while (curNode !== null) {
      displayString += curNode.value;
      curNode = curNode.next;
    }
    console.log(displayString);
  }
}
