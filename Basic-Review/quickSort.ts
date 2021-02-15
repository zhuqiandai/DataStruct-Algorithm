/**
 *  快速排序
 *  1. 主元 pivot (随机一个值，或者中间值)
 *  2. 划分 partition
 *  3. 递归
 */

import { swap } from './utils'

const arr = [3, 5, 1, 6, 4, 7, 2]

console.time()
console.log(sort(arr, 0, arr.length - 1))
console.timeEnd()

function sort(arr, left, right) {
  let index

  if (arr.length > 1) {
    index = partition(arr, left, right)
    if (left < index - 1) {
      sort(arr, left, index - 1)
    }
    if (index < right) {
      sort(arr, index, right)
    }
  }
  return arr
}

function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)]
  let j = right
  let i = left

  while (i <= j) {
    while (arr[i] < pivot) {
      i++
    }
    while (arr[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(arr, i, j)
      i++
      j--
    }
  }

  return i
}
