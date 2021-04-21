function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function traverse(node) {
    while(node != null) {
        console.log(node.val);
        node = node.next;
    }
}

//  我的思路有点搞。。转化为数组回文的问题
let isPalindrome = function(head) {
    if(head == null) {
        return false;
    }
    let node = head;
    let arr = [];
    while(node != null) {
        arr.push(node.val);
        node = node.next;
    }
    let index = Math.floor(arr.length / 2);
    if(arr.length % 2 == 1) {
        for(let left = index - 1, right = index + 1; left >= 0 && right < arr.length; left--,right++) {
            if (arr[left] != arr[right])
                return false;
        }
        return true;
    }
    else {
        for(let left = index - 1, right = index; left >= 0 && right < arr.length; left--,right++) {
            if (arr[left] != arr[right])
                return false;
        }
        return true;
    }
};

// let node1 = new ListNode(1);
// let node2 = new ListNode(2);
// let node3 = new ListNode(2);
// let node4 = new ListNode(1);
//
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
//
// traverse(node1);
let node1 = new ListNode(1);
// let node2 = new ListNode(2);
// node1.next = node2;

console.log(isPalindrome(node1));
