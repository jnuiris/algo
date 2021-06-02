function ListNode(val) {
    this.val = val;
    this.next = null;
}

//  不如反转链表然后再打印一遍
function traverse(head, arr) {
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

var reversePrint = function(head) {
    let pre = null;
    let cur = head;
    while(cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    let arr = [];
    return traverse(pre, arr);
};

// let one = new ListNode(1);
// let two = new ListNode(3);
// let three = new ListNode(2);
// one.next = two;
// two.next = three;
//
// traverse(one);



// console.log(reversePrint(one));
// traverse(reversePrint(one));
console.log(reversePrint(one));
