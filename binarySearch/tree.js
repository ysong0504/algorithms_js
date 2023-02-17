class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(newValue) {
    const newNode = new Node(newValue);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let curNode = this.root;
    while (curNode !== null) {
      // 큰 값은 오른쪽으로
      if (curNode.value < newValue) {
        if (curNode.right === null) {
          curNode.right = newNode;
          break;
        }

        curNode = curNode.right;
      } else {
        // 작은 값은 왼쪽으로
        if (curNode.left === null) {
          curNode.left = newNode;
          break;
        }

        curNode = curNode.left;
      }
    }
  }

  // 탐색 함수
  has(targetValue) {
    let curNode = this.root;
    while (curNode !== null) {
      if (curNode.value === targetValue) {
        return true;
      }
      // 찾고자하는 값이 현재값보다 크다면 오른쪽 탐색
      if (curNode.value < targetValue) {
        if (curNode.right === targetValue) {
          curNode = curNode.right;
        } else {
          curNode = curNode.left;
        }
      }
      return false;
    }
  }
}
