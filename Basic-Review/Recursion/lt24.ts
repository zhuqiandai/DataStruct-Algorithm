/**
 *  两两交换链表中的节点
 *  （做实际交换）
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head
  }

  const newHead = head.next
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
}
