class Node {
    value;
    next;

    constructor(value) {
        this.value = value
    }
}

export default class Queue {
    #head;
    #tail;
    #size;

    constructor() {

    }

    // 添加一个元素到队尾
    enqueue(value) {
        // 创造Queue中实例node
        const node = new Node(value)
        if (this.#head) {
            this.#head.next = node;
            this.#tail = node;
        } else {
            // 第一个结点自然头和尾都指向他自己
            this.#head = node;
            this.#tail = node;
        }
        this.#size++;
    }

    // 删去队头，并返回被删除的值 || 或者是 undefined（队列本来就已经为空的情况）
    dequeue() {
        const current = this.#head;
        if (!current) return;
        this.#head = this.#head.next;
        this.#size--;
        return current.value;
    }

    // 清空队列
    clear() {
        this.#head = undefined;
        this.#tail = undefined;
        this.#size = 0;
    }

    // 返回队列的大小
    // TODO: https://zh.javascript.info/class#getterssetters
    get size() {
        return this.#size
    }

    // TODO: * yield
    *[Symbol.iterator]() {
        let current = this.#head;

        while (current) {
            yield current.value;

            current = current.next;
        }

    }
}