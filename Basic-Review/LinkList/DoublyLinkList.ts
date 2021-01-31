import LinkList from './LinkList'
import LinkNode from './LinkNode'

class DoublyLinkList extends LinkList {
  public tail

  constructor() {
    super()
    this.tail = undefined
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyLinkNode(element)
      let currnet = this.head

      if (index === 0) {
        if (!this.head) {
          // 没有首节点
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          currnet.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        // 最后一项 处理tail
        // const lastNode = this.getElementAt(index - 1)
        // lastNode.next = node
        // node.prev = lastNode
        // this.tail = node
        currnet = this.tail // 不需要遍历查找一遍
        currnet.next = node
        node.prev = currnet
        this.tail = node
      } else {
        // 中间插入
        const prevNode = this.getElementAt(index - 1)
        currnet = prevNode.next // 缓存一下 prevNode.next
        prevNode.next = node
        node.prev = prevNode
        node.next = currnet
        currnet.prev = node
      }

      this.count++
      return true
    }
    return false
  }
}

class DoublyLinkNode extends LinkNode {
  public prev
  constructor(element) {
    super(element)
    this.prev = undefined
  }
}

const doublyList = new DoublyLinkList()
doublyList.insert(3, 0)
doublyList.insert(4, 0)
doublyList.insert(5, 1)
doublyList.insert(6, 2)

console.log(doublyList)
