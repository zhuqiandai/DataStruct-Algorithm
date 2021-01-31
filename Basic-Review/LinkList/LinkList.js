"use strict";
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
exports.__esModule = true;
var utils_1 = require("../utils");
var LinkNode_1 = require("./LinkNode");
// * 链表不能直接根据索引访问元素，就需要 getElementAt 遍历
var LinkList = /** @class */ (function () {
    function LinkList() {
        this.count = 0;
        this.head = undefined;
    }
    LinkList.prototype.push = function (element) {
        var node = new LinkNode_1["default"](element);
        var current; // 只有第一个元素的引用
        if (!this.head) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    };
    LinkList.prototype.removeAt = function (index) {
        if (index >= 0 && index < this.count) {
            var current = this.head;
            if (index === 0) {
                this.head = current.next;
            }
            else {
                var previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current;
        }
        return undefined;
    };
    LinkList.prototype.getElementAt = function (index) {
        if (index >= 0 && index < this.count) {
            var current = this.head;
            for (var i = 0; i < index && current !== null; i++) {
                current = current.next;
            }
            return current;
        }
        return undefined;
    };
    LinkList.prototype.insert = function (element, index) {
        if (index >= 0 && index <= this.count) {
            var node = new LinkNode_1["default"](element);
            var current = this.head;
            if (index === 0) {
                node.next = current;
                this.head = node;
            }
            else {
                var previous = this.getElementAt(index - 1);
                var nextNode = previous.next;
                previous.next = node;
                node.next = nextNode;
            }
            this.count++;
        }
        return false;
    };
    LinkList.prototype.indexOf = function (element) {
        var currnet = this.head;
        for (var i = 0; i < this.count && currnet; i++) {
            if (utils_1.defaultCompare(element, currnet.element) === utils_1.Compare.EQUALS) {
                return i;
            }
            currnet = currnet.next;
        }
    };
    return LinkList;
}());
var link = new LinkList();
link.push(3);
link.push(4);
link.push(2);
link.push(1);
link.insert(5, 1);
console.log(link.indexOf(1));
exports["default"] = LinkList;
