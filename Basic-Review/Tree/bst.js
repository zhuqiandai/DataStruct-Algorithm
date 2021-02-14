"use strict";
/**
 *  二叉搜索树的实现
 *
 *  insert(key)
 *  search(key)
 *  inOrderTraverse()
 *  preOrderTraverse()
 *  postOrderTraverse()
 *  查找某个节点的前驱后继节点
 *  min()
 *  max()
 *  remove(key)  删除后替换第一个大于该节点的节点
 *
 */
exports.__esModule = true;
var utils_1 = require("../utils");
var TreeNode = /** @class */ (function () {
    function TreeNode(key) {
        this.left = null;
        this.right = null;
        this.key = key;
    }
    return TreeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(compareFn) {
        if (compareFn === void 0) { compareFn = utils_1.defaultCompare; }
        this.compareFn = compareFn;
        this.root = null;
    }
    /**
     *  插入
     */
    BinarySearchTree.prototype.insert = function (key) {
        if (this.root === null) {
            this.root = new TreeNode(key);
        }
        else {
            this.insertNode(this.root, key);
        }
    };
    BinarySearchTree.prototype.insertNode = function (node, key) {
        if (this.compareFn(key, node.key) === utils_1.Compare.LESS_THAN) {
            if (node.left === null) {
                node.left = new TreeNode(key);
            }
            else {
                this.insertNode(node.left, key);
            }
        }
        else {
            if (node.right === null) {
                node.right = new TreeNode(key);
            }
            else {
                this.insertNode(node.right, key);
            }
        }
    };
    BinarySearchTree.prototype.inOrderTraverse = function (callback) {
        this.inOrderTraverseNode(this.root, callback);
    };
    /**
     *  中序遍历
     */
    BinarySearchTree.prototype.inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    };
    /**
     *  查找
     */
    BinarySearchTree.prototype.search = function (key) {
        return this.searchNode(this.root, key);
    };
    BinarySearchTree.prototype.searchNode = function (node, key) {
        if (node === null)
            return false;
        if (this.compareFn(key, node.key) === utils_1.Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        }
        else if (this.compareFn(key, node.key) === utils_1.Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        }
        else {
            return true;
        }
    };
    /**
     * 最小值
     * 右子树的最小值 即 后继节点
     */
    BinarySearchTree.prototype.min = function () {
        return this.minNode(this.root);
    };
    BinarySearchTree.prototype.minNode = function (node) {
        var curr = node;
        while (curr !== null && curr.left !== null) {
            curr = curr.left;
        }
        return curr;
    };
    /**
     * 删除节点
     * 1. 叶子节点
     * 2. 有一个子节点
     * 3. 有两个子节点，用后继节点替代（把后继节点值赋给该节点，删除后继节点）
     */
    BinarySearchTree.prototype.remove = function (key) {
        this.root = this.removeNode(this.root, key);
    };
    BinarySearchTree.prototype.removeNode = function (node, key) {
        if (node === null)
            return null;
        if (this.compareFn(key, node.key) === utils_1.Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            console.trace(node);
            return node;
        }
        else if (this.compareFn(key, node.key) === utils_1.Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            console.trace(node);
            return node;
        }
        else {
            // 1. 叶子节点
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // 2. 一个子节点
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }
            // 3. 右两个子节点
            var aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    };
    return BinarySearchTree;
}());
exports["default"] = BinarySearchTree;
var tree = new BinarySearchTree();
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
var printNode = function (val) {
    console.log(val);
};
tree.inOrderTraverse(printNode);
console.log(tree.search(20) ? '1' : '0');
tree.remove(12);
