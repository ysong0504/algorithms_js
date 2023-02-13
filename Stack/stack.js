/**
 * Array 버전
 */
const stack = []
stack.push()
stack.pop()
stack[stack.length-1]


/**
 * SinglyLinkedList 버전
 */
class Node {
    constructor(value) {
        // 데이터 값
        this.value = value;
        // 포인터
        this.next = null
    }
}

class Stack{
    constructor() {
        this.top = null
        this.size = 0
    }

    push(value) {
        const node = new Node(value) 
        // stack 특성상 항상 top이 제일 먼저 출력되기 때문에 새롭게 쌓인 탑에 포인터를 향하도록 한다.
        node.next = this.top
        this.top = node
        this.size += 1
    }
    
    pop() {
        // pop할 top 데이터를 저장
        const value = this.top.value
        // 다음탑은 pop한 탑의 next
        this.top = this.top.next
        this.size -= 1
        return value
    }

    size() {
        return this.size
    }

    top() {
        return this.top.value
    }

    
}