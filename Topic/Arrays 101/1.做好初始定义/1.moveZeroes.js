function moveZeroes(arr) {
  const { length } = arr

  let left = 0

  for (let right = 0; right < length; right++) {
    // 当右指针等于 0 时，这时左指针不会 ++
    if (arr[right] !== 0) {
      if (right > left) {
        arr[left] = arr[right]
        arr[right] = 0
      }
      left++
    }
  }
  return arr
}
