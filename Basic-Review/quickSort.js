"use strict";
/**
 *  快速排序
 *  1. 主元 pivot (随机一个值，或者中间值)
 *  2. 划分 partition
 *  3. 递归
 */
exports.__esModule = true;
var utils_1 = require("./utils");
var arr = [3, 5, 1, 6, 4, 7, 2];
console.time();
console.log(sort(arr, 0, arr.length - 1));
console.timeEnd();
function sort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            sort(arr, left, index - 1);
        }
        if (index < right) {
            sort(arr, index, right);
        }
    }
    return arr;
}
function partition(arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)];
    var i = left;
    var j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            utils_1.swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}
