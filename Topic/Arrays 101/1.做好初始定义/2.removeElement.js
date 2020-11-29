function removeElement(nums, val) {
  if (nums === null || nums.length === 0) return

  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i]
      j++
    }
  }
  return j
}

console.log(removeElement([3, 2, 2, 3], 3))
