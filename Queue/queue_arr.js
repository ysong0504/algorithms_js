// Array 사용
// but front rear 가 무한정으로 커질 수 있음

class Queue {
  constructor(value) {
    this.queue = value;
    this.front = 0;
    this.rear = 0;
  }

  // 큐 삽입 (맨 마지막에 데이터를 넣는다.)
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  // 큐 빼기
  dequue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    // 앞 배열이 사라졌으므로 다음 배열이 front가 된다.
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}
