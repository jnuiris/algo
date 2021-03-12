//  非常经典的一道题，必须要写很多遍,递归与迭代两种方法都要掌握
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//  leetcode上面的链表节点实现是用构造函数实现的，自己也必须要会写
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
//  编写测试样例
var one = new ListNode(1);
var two = new ListNode(2);
var three = new ListNode(3);
var four = new ListNode(4);
var five = new ListNode(5);
one.next = two;
two.next = three;
three.next = four;
four.next = five;

//  遍历链表
function traverse(node) {
    while(node != null) {
        console.log(node.val);
        node = node.next;
    }
}
//
// traverse(one);
//  正式编写反转函数

//  这里遇到了一个小问题，cur.next无法引用，很奇怪
//  因为JS是按引用传值，因此节点赋值的时候会修改引用，导致了这种情况
// var reverseList = function(head) {
//     let node = null;
//     let cur = head;
//     let tmp = null;
//     // console.log(head);
//     while(cur != null) {
//         // console.log(cur.next);
//         tmp = cur;
//         tmp.next = node;
//         node = tmp;
//         cur = cur.next;
//         // console.log(cur.val);
//         // cur = cur.next;
//     }
//     return node;
// };

//  最终还是看了官方题解，简记为2指向0，0指向1，1指向2，返回0,先这么记，以后可以慢慢理解
// var reverseList = function(head) {
//     let pre = null;
//     let cur = head;
//     while(cur) {
//         let next = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = next;
//     }
//     return pre;
// };
//
//
// traverse(reverseList(one));

// 时隔一天之后，我决定重写一次
// var reverseList = function (head) {
//     var cur = head;
//     var pre = null;
//     while(cur) {
//         var next = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = next;
//     }
//     return pre;
// }
// traverse(reverseList(one));

//  时隔两天之后，我决定再写一次
// var reverseList = function (head) {
//     var pre = null;
//     var cur = head;
//     while(cur != null) {
//         var next = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = next;
//     }
//     return pre;
// }
//
// console.log(traverse(reverseList(one)));

//  第四次写
// var reverseList = function (head) {
//     let pre = null;
//     let cur = head;
//     while(cur) {
//         let next = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = next;
//     }
//     return pre;
// }

// 第五次写
var reverseList = function (head) {
    let pre = null;
    let cur = head;
    while(cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}
