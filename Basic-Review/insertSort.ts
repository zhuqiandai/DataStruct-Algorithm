/**
 *  插入排序
 */
const arr = [3, 5, 1, 6, 4, 7, 2]

function insertSort(arr: number[], length: number) {
  if (length < 1) return arr

  let left
  let right

  let key: number

  for (left = 1; left < length; ++left) {
    key = arr[left]
    right = left - 1
    while (right >= 0 && arr[right] > key) {
      // 前面已经排好序，所以只需要比较 arr[right]和key
      arr[right + 1] = arr[right]
      right--
    }
    arr[right + 1] = key
  }

  return arr
}

console.log(insertSort(arr, 7))
