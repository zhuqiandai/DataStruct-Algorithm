/**
 *  1. 创建堆(1) O(N log N)
 */

import { swap, Compare, defaultCompare } from './utils'

function getLeft(index: number) {
  return 2 * index + 1
}

function getRight(index: number) {
  return 2 * index + 2
}

function getParent(index: number) {
  if (index === 0) return undefined
  return Math.floor((index - 1) / 2)
}

/**
 * 插入创建堆
 * @param ele 插入的元素
 */
function createHeap(array: number[], ele: number) {
  array.push(ele)
  let i = array.length - 1
  let parentIndex = getParent(i)

  while (i > 0 && array[parentIndex] < ele) {
    swap(array, parentIndex, i)
    i = parentIndex
    parentIndex = getParent(i)
  }
}

/**
 *  导出堆顶
 *  1. 移除堆顶
 *  2. 最后一个节点放在堆顶
 *  3. 下移操作
 */

function siftDown(array: number[], index: number): void {
  let element = index
  const left = getLeft(index)
  const right = getRight(index)
  const size = array.length
  if (left < size && defaultCompare(array[element], array[left]) === Compare.BIGGER_THAN) {
    element = left
  }
  if (right < size && defaultCompare(array[element], array[right]) === Compare.BIGGER_THAN) {
    element = right
  }
  if (index !== element) {
    swap(array, index, element)
    siftDown(array, element)
  }
}

function heapify(array) {
  const maxIndex = Math.floor(array.length / 2) - 1
  for (let i = 0; i <= maxIndex; i++) {
    siftDown(array, i)
  }
  return array
}

const offerArr = [1, 9, 2, 8, 3, 7, 4, 6, 5]
const result = []

offerArr.forEach((ele: number) => {
  createHeap(result, ele)
})
console.log(result)

heapify(result)

console.log(result)
