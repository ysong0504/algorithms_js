class Node {
  constructor(value) {
    this.value = value; // 데이터
    this.next = null; // 포인터
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = this.taill = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}
