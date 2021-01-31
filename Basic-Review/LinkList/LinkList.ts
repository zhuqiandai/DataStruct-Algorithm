/**
 *  push() 尾部添加一个元素
 *  insert(element, index)  插入一个元素
 *  getElementAt()
 *  remove()
 *  indexOf() 返回一个元素的位置
 *  removeAt(position) // 移除指定位置元素，返回被移除元素
 *  isEmpty()
 *  size()
 *  toString()
 */

import { Compare, defaultCompare } from '../utils'
import LinkNode from './LinkNode'

// * 链表不能直接根据索引访问元素，就需要 getElementAt 遍历
class LinkList {
  public count
  public head

  constructor() {
    this.count = 0
    this.head = undefined
  }

  push(element) {
    const node = new LinkNode(element)
    let current // 只有第一个元素的引用
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head

      if (index === 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current
    }
    return undefined
  }

  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      for (let i = 0; i < index && current !== null; i++) {
        current = current.next
      }
      return current
    }
    return undefined
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new LinkNode(element)
      let current = this.head
      if (index === 0) {
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        let nextNode = previous.next
        previous.next = node
        node.next = nextNode
      }
      this.count++
    }
    return false
  }

  indexOf(element) {
    let currnet = this.head
    for (let i = 0; i < this.count && currnet; i++) {
      if (defaultCompare(element, currnet.element) === Compare.EQUALS) {
        return i
      }
      currnet = currnet.next
    }
  }
}

const link = new LinkList()
link.push(3)
link.push(4)
link.push(2)
link.push(1)

link.insert(5, 1)

console.log(link.indexOf(1))

export default LinkList
