/**
 *  反转字符串
 */

function reverseString(s: string[]): void {
  let left = 0
  let right = s.length - 1

  const helper = (left, right, s) => {
    if (left < right) {
      ;[s[left], s[right]] = [s[right], s[left]]

      helper(left + 1, right - 1, s)
    }

    return
  }

  helper(left, right, s)
}
