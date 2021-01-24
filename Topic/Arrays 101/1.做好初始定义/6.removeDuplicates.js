/**
 * 删除排序数组中的重复项 2
 */

function removeDuplicates(nums) {
  if (nums === null) return
  const { length } = nums

  let slow = 0
  let count = 1

  for (let fast = 0; fast < length; fast++) {
    if (nums[fast] === nums[slow - 1]) {
      count++
      if (count > 2) {
        continue
      }
      nums[slow++] = nums[fast]
    } else {
      nums[slow++] = nums[fast]
      count = 1
    }
  }
  return slow
}
