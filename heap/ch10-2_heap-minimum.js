/**
 * 주어진 숫자(N)만큼 배열에 있는 값을 마이너스한다.
 * 마이너스된 숫자에 제곱을 했을 때 최소값이 나올 수 있는 로직을 구하라
 *
 */

class Heap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);

    let curIdx = this.heap.length - 1;
    let parentIndex = Math.floor(curIdx / 2);

    while (parentIndex !== 0 && value > parentIndex) {
      const parentValue = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[curIdx] = parentValue;
      curIdx = parentIndex;
      parentIndex = Math.floor(curIdx / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = 2;
    let rightIdx = 3;

    while (
      this.heap[curIdx] < this.heap[leftIdx] ||
      this.heap[curIdx] < this.heap[rightIdx]
    ) {
      const curValue = this.heap[curIdx];
      const leftValue = this.heap[leftIdx];
      const rightValue = this.heap[rightIdx];

      if (rightValue < leftValue) {
        this.heap[curIdx] = leftValue;
        this.heap[leftIdx] = curValue;
        curIdx = leftIdx;
      } else {
        this.heap[curIdx] = rightValue;
        this.heap[rightIdx] = curValue;
        curIdx = rightIdx;
      }

      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return returnValue;
  }
}
/**
 *
 * @param {*} no
 * @param {*} works
 * @returns
 */

function solution(no, works) {
  // 모든 작업의 합보다 no가 크면 배상 비용을 낼 필요가 없다.
  if (works.reduce((a, b) => a + b) <= no) {
    return 0;
  }

  const heap = new Heap();
  for (const work of works) {
    heap.push(work);
  }

  for (let i = 0; i < no; i += 1) {
    heap.push(heap.pop() - 1);
  }

  return heap.heap.reduce((a, b) => a + b * b);
}
