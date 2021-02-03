/**
 *  移除链表元素
 */

class LNode {
  val: number
  next: LNode | null
  constructor(val?: number, next?: LNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
function removeElements(head: LNode | null, val: number): LNode | null {
  if (!head) {
    return null
  }
  const dummy = new LNode(0, head)

  let prev = dummy
  let curr = head

  console.log(prev.val, curr.val)

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next
    } else {
      prev = curr
    }
    curr = curr.next
  }
  return prev.next
}
