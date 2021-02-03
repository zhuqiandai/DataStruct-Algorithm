/**
 *  环形链表
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (head && head.next) {
    let slow = head
    let fast = head.next

    while (slow !== fast) {
      if (fast === null || fast.next === null) {
        return false
      }
      slow = slow.next
      fast = fast.next.next
    }

    return true
  }
  return false
}
