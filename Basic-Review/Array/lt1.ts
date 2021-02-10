/**
 *  两数之和
 *  输入：nums = [2,7,11,15], target = 9
 */

function twoSum(nums: number[], target: number): number[] {
  const hashtable = new Map()
  for (let i = 0; i < nums.length; i++) {
    const result = target - nums[i]
    if (hashtable.has(result)) {
      return [hashtable.get(result), i]
    }
    hashtable.set(nums[i], i) // 值 和 index
  }
}
twoSum([3, 2, 4], 6)

/**
 *  枚举
 */
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; ++i) {
//     for (let j = i + 1; j < nums.length; ++j) {
//       if (nums[i] + nums[j] === target) {
//         console.log([i, j])
//         return [i, j]
//       }
//     }
//   }
//   return []
// }
