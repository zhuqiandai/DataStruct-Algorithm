// 颜色分类

/**
 *  1. 单指针
 */
// function sortColors(nums: number[]): void {
//   let ptr = 0

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       ;[nums[i], nums[ptr]] = [nums[ptr], nums[i]]
//       ptr++
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       ;[nums[i], nums[ptr]] = [nums[ptr], nums[i]]
//       ptr++
//     }
//   }
// }

/**
 *  2. 双指针(1)
 *  2 0 2 1 1 0
 */
function sortColors(nums: number[]): void {
  let p0: number = 0
  let p2: number = nums.length - 1

  for (let i = 0; i <= p2; ++i) {
    while (i <= p2 && nums[i] === 2) {
      ;[nums[p2], nums[i]] = [nums[i], nums[p2]]
      --p2
    }
    if (nums[i] === 0) {
      ;[nums[p0], nums[i]] = [nums[i], nums[p0]]
      ++p0
    }
  }
}
