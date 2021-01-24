"use strict";
exports.__esModule = true;
exports.defaultCompare = exports.Compare = exports.swap = void 0;
/**
 *
 * @param arr 交换的数组
 * @param i
 * @param j
 */
function swap(arr, i, j) {
    var _a;
    ;
    _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
}
exports.swap = swap;
var Compare;
(function (Compare) {
    Compare[Compare["LESS_THAN"] = -1] = "LESS_THAN";
    Compare[Compare["BIGGER_THAN"] = 1] = "BIGGER_THAN";
    Compare[Compare["EQUALS"] = 0] = "EQUALS";
})(Compare = exports.Compare || (exports.Compare = {}));
function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
exports.defaultCompare = defaultCompare;
