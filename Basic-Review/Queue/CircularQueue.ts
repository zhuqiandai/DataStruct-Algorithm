class MyCircularQueue {
  private queue
  private tail
  private head
  private length

  constructor(k: number) {
    this.queue = []
    this.tail = -1
    this.head = -1
    this.length = k
  }

  enQueue(value: number): boolean {
    if (this.isFull() === true) return false
    if (this.isEmpty() === true) {
      this.head = 0
    }
    this.tail = (this.tail + 1) % this.length
    this.queue[this.tail] = value
    return true
  }

  deQueue(): boolean {
    if (this.isEmpty() === true) return false
    if (this.head === this.tail) {
      this.tail = -1
      this.head = -1
      return true
    }
    this.head = (this.head + 1) % this.length
    return true
  }

  Front(): number {
    if (this.isEmpty() === true) return -1
    return this.queue[this.head]
  }

  Rear(): number {
    if (this.isEmpty() === true) return -1
    return this.queue[this.tail]
  }

  isEmpty(): boolean {
    return this.head === -1
  }

  isFull(): boolean {
    return this.head === (this.tail + 1) % this.length
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
