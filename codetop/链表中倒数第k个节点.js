//  感觉这一题应该挺简单的吧
//  经典双指针问题

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

// traverse(one);

var getKthFromEnd = function(head, k) {
    if(head == null || k <= 0)
        return null;
    let node1 = head;
    let node2 = null;
    for(let i = 0; i < k; i++) {
        node1 = node1.next;
    }
    node2 = node1;
    while(node2) {
        node2 = node2.next;
        head = head.next;
    }
    return head;
};

traverse(getKthFromEnd(one, 2));

//  时间复杂度太差了，不过好歹ac了

