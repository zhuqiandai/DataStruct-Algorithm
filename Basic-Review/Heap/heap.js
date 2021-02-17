"use strict";
/**
 *  结构特性： 是一颗完全二叉树
 *  堆特性
 *
 *  insert(value) 成功 true 失败 false
 *  extract() : 移除最大值或者最小值，返回这个值
 *  findMinimum(): 返回最小值最大值
 */
exports.__esModule = true;
var utils_1 = require("../utils");
var MaxHeap = /** @class */ (function () {
    function MaxHeap(compareFn) {
        if (compareFn === void 0) { compareFn = utils_1.defaultCompare; }
        this.compareFn = compareFn;
        this.heap = [];
    }
    MaxHeap.prototype.getLeftIndex = function (index) {
        return 2 * index + 1;
    };
    MaxHeap.prototype.getRightIndex = function (index) {
        return 2 * index + 2;
    };
    MaxHeap.prototype.getParentIndex = function (index) {
        if (index === 0) {
            return undefined;
        }
        return Math.floor((index - 1) / 2);
    };
    MaxHeap.prototype.insert = function (value) {
        if (value !== null) {
            this.heap.push(value);
            this.siftUp(this.heap.length - 1);
            return true;
        }
        return false;
    };
    MaxHeap.prototype.siftUp = function (index) {
        var parent = this.getParentIndex(index);
        while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === utils_1.Compare.LESS_THAN) {
            utils_1.swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    };
    MaxHeap.prototype.size = function () {
        return this.heap.length;
    };
    MaxHeap.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    MaxHeap.prototype.findMinimum = function () {
        return this.isEmpty() ? undefined : this.heap[0];
    };
    MaxHeap.prototype.extract = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.size() === 1) {
            return this.heap.shift();
        }
        var removedValue = this.heap[0];
        // this.heap[0] = this.heap.pop()
        this.siftDown(0);
        return removedValue;
    };
    MaxHeap.prototype.siftDown = function (index) {
        var element = index;
        var left = this.getLeftIndex(index);
        var right = this.getRightIndex(index);
        var size = this.size();
        if (left < size && this.compareFn(this.heap[element], this.heap[left]) === utils_1.Compare.LESS_THAN) {
            element = left;
        }
        if (right < size && this.compareFn(this.heap[element], this.heap[right]) === utils_1.Compare.LESS_THAN) {
            element = right;
        }
        if (index !== element) {
            utils_1.swap(this.heap, index, element);
            this.siftDown(element);
        }
    };
    return MaxHeap;
}());
var maxheap = new MaxHeap();
maxheap.insert(2);
maxheap.insert(7);
maxheap.insert(26);
maxheap.insert(25);
maxheap.insert(19);
maxheap.insert(37);
maxheap.insert(1);
maxheap.insert(90);
maxheap.insert(3);
maxheap.insert(36);
console.log(maxheap.heap);
console.log(maxheap.extract());
console.log(maxheap.heap);
