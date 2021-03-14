//  拿到这道题的第一反应，归并排序
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
//  编写测试样例
let l1_one = new ListNode(1);
let l1_two = new ListNode(2);
let l1_three = new ListNode(4);
l1_one.next = l1_two;
l1_two.next = l1_three;

let l2_one = new ListNode(2);
let l2_two = new ListNode(3);
let l2_three = new ListNode(4);
let l2_four = new ListNode(5);
let l2_five = new ListNode(9);
l2_one.next = l2_two;
l2_two.next = l2_three;
l2_three.next = l2_four;
l2_four.next = l2_five;

// traverse(l1_one);
// console.log('----');
// traverse(l2_one);


//  遍历链表
function traverse(node) {
    while(node != null) {
        console.log(node.val);
        node = node.next;
    }
}

var mergeTwoLists = function(l1, l2) {
    if(l1 == null || l2 == null) {
        return l1 == null ? l2 : l1;
    }

    let new_head = new ListNode(l1.val <= l2.val ? l1.val : l2.val);
    let result = new_head;
    if(new_head.val == l1.val)
        l1 = l1.next;
    else
        l2 = l2.next;

    while(l1 != null && l2 != null) {
        let l1_val = l1.val;
        let l2_val = l2.val;
        new_head.next = new ListNode(l1_val <= l2.val ? l1.val : l2.val);
        new_head = new_head.next;
        if(new_head.val == l1_val)
            l1 = l1.next == null ? null : l1.next;
        // if(new_head.val == l2_val && new_head.val != l1_val)
        else
            l2 = l2.next == null ? null : l2.next;
        // else {
        //     return;
        // }
    }
    while(l1) {
        new_head.next = new ListNode(l1.val);
        new_head = new_head.next;
        l1 = l1.next;
    }
    while(l2) {
        new_head.next = new ListNode(l2.val);
        new_head = new_head.next;
        l2 = l2.next;
    }
    return result;
};

traverse(mergeTwoLists(l1_one, l2_one));

//  成功AC，这一次有了很大进步，包括测试方面，但是内存消耗明显有点大，下次可以尝试降低内存消耗的写法
