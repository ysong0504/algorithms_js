class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();

  // queue에 데이터와 idx 저장
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
    /**
     * [2, 0]
     * [1, 1]
     * [3, 2]
     * [2, 3]
     */
  }

  // 내림차순으로 정렬 -> 3,2,2,1
  priorities.sort((a, b) => b - a);

  let count = 0;
  while (queue.size > 0) {
    const curValue = queue.peek()[0];
    if (curValue < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }

  return count;
}
