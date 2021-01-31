"use strict";
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
exports.__esModule = true;
var LinkList_1 = require("./LinkList");
var link = new LinkList_1["default"]();
link.push(1);
link.push(2);
link.push(3);
link.push(4);
link.push(5);
reverseList(link.head);
function reverseList(head) {
    var prev = null;
    var current = head;
    while (current) {
        var next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
console.log(link);
