/**
 * 单链表反转
 *
 * 链表中环的检测
 *
 * 两个有序的链表合并
 *
 * 删除链表倒数第 n 个结点
 *
 * 求链表的中间结点
 */

import LinkList from './LinkList'
import LinkNode from './LinkNode'

const link = new LinkList()

link.push(1)
link.push(2)
link.push(3)
link.push(4)
link.push(5)
link.push(6)
function middleNode(head) {
  // 快慢指针

  let slow = head
  let fast = head

  while (fast.next) {
    slow = slow.next
    if (fast.next.next) {
      fast = fast.next.next
    } else {
      fast = fast.next
    }
  }
  return slow
}

console.log(middleNode(link.head))
