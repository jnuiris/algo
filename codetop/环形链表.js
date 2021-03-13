//  环形链表
//  这道题可能之前做过，经典双指针，应该是会做的，先试一下
var hasCycle = function(head) {
    if(head == null || head.next == null) {
        return false;
    }
    let quick = head;
    let slow = head;
    while(quick != null && slow != null) {
        if(quick.next == null) {
            quick = null;
        }else if(quick.next.next == null) {
            quick = null;
        }else {
            quick = quick.next.next;
        }
        if(slow.next == null) {
            slow = null;
        }else {
            slow = slow.next;
        }
        if(slow == quick) {
            return true;
        }
    }
    return false;
    // let node = head;
    // while(node != null) {
    //     node = node.next;
    // }
};
//  一次AC我是没想到的，加油
