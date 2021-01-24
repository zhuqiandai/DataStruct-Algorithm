/**
 *
 *  Input: [1,1,0,1,1,1]
 *  Output: 3
 *  Explanation: The first two digits or the last three digits are consecutive 1s.
 *      The maximum number of consecutive 1s is 3.
 */

function findMaxConsecutiveOnes(nums) {
  if (nums === null) return

  let max = 0
  let count = 0
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === 1) {
      count++
    } else {
      max = Math.max(max, count)
      count = 0
    }
  }
  max = Math.max(max, count)
  return max
}

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]))
