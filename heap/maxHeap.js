/**
 * Left = Index * 2
 * Right = Index * 2 + 1
 * Parent = floor(Index / 2)
 */

class MaxHeap {
  constructor() {
    // 편의를 위해 첫번째 요소는 사용하지 않는다.
    this.heap = [null];
  }

  /**
   * 노드 추가
   * @param {*} value
   */
  push(value) {
    this.heap.push(value);
    let curIndex = this.heap.length - 1;
    let parentIndex = Math.floor(curIndex / 2); // 자식 노드 기준으로 부모 노드 찾기

    // 부모와 자식 노드를 비교하며 우선 순위가 높은 것을 상위에 배치해준다.
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[curIndex] = temp;

      curIndex = parentIndex;
      parentIndex = Math.floor(curIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1]; // 0번째는 사용안하니 1번쨰 배열이 루트 노드
    this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = 2;
    let rightIdx = 3;

    // 자식 노드들과 비교 시작
    while (
      this.heap[curIdx] < this.leftIdx ||
      this.heap[curIdx] < this.rightIdx
    ) {
      const leftNode = this.heap[leftIdx];
      const rightNode = this.heap[rightIdx];
      const curNode = this.heap[curIdx];

      // 오른쪽 정점이 더 크다면
      if (leftNode < rightNode) {
        const temp = curNode;
        this.heap[curIdx] = rightNode;
        this.heap[rightIdx] = temp;
        curIdx = rightIdx;
      } else {
        // 왼쪽 정점이 더 크다면
        const temp = curNode;
        this.heap[curIdx] = leftNode;
        this.heap[leftIdx] = temp;
        curIdx = leftIdx;
      }

      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return returnValue;
  }
}
