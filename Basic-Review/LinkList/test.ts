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

const link = new LinkList()

link.push(1)
link.push(2)
link.push(3)
link.push(4)
link.push(5)

reverseList(link.head)

// 1->2->3->4->5->NULL
function reverseList(head) {
  let prev = null
  let curr = head
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}

console.log(link)
