//  不知道为什么，这道题总给我似曾相识的感觉


//  leetcode上面的链表节点实现是用构造函数实现的，自己也必须要会写
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

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

//  好吧，其实就是这道题两天前我就做过了.....
