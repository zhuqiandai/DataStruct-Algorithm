'use strict'
/**
 *  1. 创建堆(1) O(N log N)
 */
exports.__esModule = true
var utils_1 = require('./utils')
var arr = [2, 7, 26, 25, 19, 17, 1, 90, 3, 36]
var heap = []
function getLeft(index) {
  return 2 * index + 1
}
function getRight(index) {
  return 2 * index + 2
}
function getParent(index) {
  if (index === 0) return undefined
  return Math.floor((index - 1) / 2)
}
/**
 * 插入创建堆
 * @param ele 插入的元素
 */
function createHeap(array, ele) {
  array.push(ele)
  var i = array.length - 1
  var parentIndex = getParent(i)
  while (i > 0 && array[parentIndex] < ele) {
    utils_1.swap(array, parentIndex, i)
    i = parentIndex
    parentIndex = getParent(i)
  }
}
// arr.forEach((ele: number) => {
//   createHeap(ele)
// })
/**
 *  导出堆顶
 *  1. 移除堆顶
 *  2. 最后一个节点放在堆顶
 *  3. 下移操作
 */
function siftDown(array, index) {
  var element = index
  var left = getLeft(index)
  var right = getRight(index)
  var size = array.length
  if (left < size && utils_1.defaultCompare(array[element], array[left]) === utils_1.Compare.BIGGER_THAN) {
    element = left
  }
  if (right < size && utils_1.defaultCompare(array[element], array[right]) === utils_1.Compare.BIGGER_THAN) {
    element = right
  }
  if (index !== element) {
    utils_1.swap(array, index, element)
    siftDown(array, element)
  }
}
function heapify(array) {
  var maxIndex = Math.floor(array.length / 2) - 1
  for (var i = 0; i <= maxIndex; i++) {
    siftDown(array, i)
  }
  return array
}
var offerArr = [1, 9, 2, 8, 3, 7, 4, 6, 5]
var result = []
offerArr.forEach(function (ele) {
  createHeap(result, ele)
})
console.log(result)
heapify(result)
console.log(result)
