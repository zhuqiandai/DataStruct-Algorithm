/**
 *  环形链表Ⅱ
 */
function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null
  }

  let slow = head
  let fast = head

  while (fast) {
    if (fast.next === null) {
      return null
    } else {
      fast = fast.next.next
      slow = slow.next

      if (slow === fast) {
        let prev = head

        while (prev !== slow) {
          prev = prev.next
          slow = slow.next
        }
        return prev
      }
    }
  }
  return null
}
