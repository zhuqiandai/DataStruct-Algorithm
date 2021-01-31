"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var LinkList_1 = require("./LinkList");
var LinkNode_1 = require("./LinkNode");
var DoublyLinkList = /** @class */ (function (_super) {
    __extends(DoublyLinkList, _super);
    function DoublyLinkList() {
        var _this = _super.call(this) || this;
        _this.tail = undefined;
        return _this;
    }
    DoublyLinkList.prototype.insert = function (element, index) {
        if (index >= 0 && index <= this.count) {
            var node = new DoublyLinkNode(element);
            var currnet = this.head;
            if (index === 0) {
                if (!this.head) {
                    // 没有首节点
                    this.head = node;
                    this.tail = node;
                }
                else {
                    node.next = this.head;
                    currnet.prev = node;
                    this.head = node;
                }
            }
            else if (index === this.count) {
                // 最后一项 处理tail
                // const lastNode = this.getElementAt(index - 1)
                // lastNode.next = node
                // node.prev = lastNode
                // this.tail = node
                currnet = this.tail; // 不需要遍历查找一遍
                currnet.next = node;
                node.prev = currnet;
                this.tail = node;
            }
            else {
                // 中间插入
                var prevNode = this.getElementAt(index - 1);
                currnet = prevNode.next; // 缓存一下 prevNode.next
                prevNode.next = node;
                node.prev = prevNode;
                node.next = currnet;
                currnet.prev = node;
            }
            this.count++;
            return true;
        }
        return false;
    };
    return DoublyLinkList;
}(LinkList_1["default"]));
var DoublyLinkNode = /** @class */ (function (_super) {
    __extends(DoublyLinkNode, _super);
    function DoublyLinkNode(element) {
        var _this = _super.call(this, element) || this;
        _this.prev = undefined;
        return _this;
    }
    return DoublyLinkNode;
}(LinkNode_1["default"]));
var doublyList = new DoublyLinkList();
doublyList.insert(3, 0);
doublyList.insert(4, 0);
doublyList.insert(5, 1);
doublyList.insert(6, 2);
console.log(doublyList);
