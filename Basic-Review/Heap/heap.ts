/**
 *  结构特性： 是一颗完全二叉树
 *  堆特性
 *
 *  insert(value) 成功 true 失败 false
 *  extract() : 移除最大值或者最小值，返回这个值
 *  findMinimum(): 返回最小值最大值
 */

import { defaultCompare, Compare, swap } from '../utils'

class MaxHeap {
  private compareFn
  heap

  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.heap = []
  }

  private getLeftIndex(index) {
    return 2 * index + 1
  }

  private getRightIndex(index) {
    return 2 * index + 2
  }

  private getParentIndex(index) {
    if (index === 0) {
      return undefined
    }
    return Math.floor((index - 1) / 2)
  }

  insert(value) {
    if (value !== null) {
      this.heap.push(value)
      this.siftUp(this.heap.length - 1)
      return true
    }
    return false
  }

  siftUp(index: number) {
    let parent = this.getParentIndex(index)
    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.LESS_THAN) {
      swap(this.heap, parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }

  size() {
    return this.heap.length
  }

  isEmpty() {
    return this.size() === 0
  }

  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0]
  }

  extract() {
    if (this.isEmpty()) {
      return undefined
    }
    if (this.size() === 1) {
      return this.heap.shift()
    }
    const removedValue = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.siftDown(0)
    return removedValue
  }

  private siftDown(index: number) {
    let element = index
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    const size = this.size()

    if (left < size && this.compareFn(this.heap[element], this.heap[left]) === Compare.LESS_THAN) {
      element = left
    }
    if (right < size && this.compareFn(this.heap[element], this.heap[right]) === Compare.LESS_THAN) {
      element = right
    }

    if (index !== element) {
      swap(this.heap, index, element)
      this.siftDown(element)
    }
  }
}

const maxheap = new MaxHeap()
maxheap.insert(2)
maxheap.insert(7)
maxheap.insert(26)
maxheap.insert(25)
maxheap.insert(19)
maxheap.insert(37)
maxheap.insert(1)
maxheap.insert(90)
maxheap.insert(3)
maxheap.insert(36)

console.log(maxheap.heap)
console.log(maxheap.extract())
console.log(maxheap.heap)
