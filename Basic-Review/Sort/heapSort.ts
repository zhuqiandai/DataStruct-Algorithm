import { defaultCompare as compareFn, Compare, swap } from '../utils'

const a = [2, 7, 26, 25, 19, 37, 1, 90, 3, 36]

export const heapSort = (array: number[]) => {
  let heapSize = array.length
  buildMaxHeap(array)
  while (heapSize > 1) {
    swap(array, 0, --heapSize)
    heapify(array, 0, heapSize)
  }
  return array
}

function buildMaxHeap(array: any[]) {
  // 这里只需要从最后一个节点的父节点开始做 heapify ， 就能保证他的子树堆化
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length)
  }
  return array
}

const heapify = (array: any[], index: number, heapSize: number) => {
  let largest = index
  const left = 2 * index + 1
  const right = 2 * index + 2

  if (left < heapSize && compareFn(array[largest], array[left]) === Compare.LESS_THAN) {
    largest = left
  }
  if (right < heapSize && compareFn(array[largest], array[right]) === Compare.LESS_THAN) {
    largest = right
  }

  if (index !== largest) {
    swap(array, largest, index)
    heapify(array, largest, heapSize)
  }
}

console.log(heapSort(a))
