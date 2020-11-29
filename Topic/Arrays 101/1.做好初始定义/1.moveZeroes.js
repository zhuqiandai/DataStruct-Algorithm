const arr = [0, 1, 0, 3, 12]

/**
 * @description: 输入: [0,1,0,3,12]
                 输出: [1,3,12,0,0]
 * @param arr 
 */
function moveZeroes(arr) {
  const { length } = arr

  let left = 0
  let right = 0

  while (right < length - 1) {
    right++
    if (arr[right] !== 0) {
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
      left++
    }
  }

  return arr
}

console.log(moveZeroes(arr))
