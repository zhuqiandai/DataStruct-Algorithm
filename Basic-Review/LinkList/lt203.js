/**
 *  移除链表元素
 */
var LNode = /** @class */ (function () {
    function LNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return LNode;
}());
function removeElements(head, val) {
    if (!head) {
        return null;
    }
    var dummy = new LNode(0, head);
    var prev = dummy;
    var curr = head;
    console.log(prev.val, curr.val);
    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
        }
        else {
            prev = curr;
        }
        curr = curr.next;
    }
    return prev.next;
}
