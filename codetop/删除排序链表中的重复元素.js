//  这一题很简单啊

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// let one = new ListNode(1);
// let two = new ListNode(1);
// let three = new ListNode(1);
// let four = new ListNode(1);
// let five = new ListNode(1);
// let six = new ListNode(1);
// let seven = new ListNode(1);
// one.next = two;
// two.next = three;
// three.next = four;
// four.next = five;
// five.next = six;
// six.next = seven;
let one = new ListNode(1);
let two = new ListNode(1);
let three = new ListNode(2);
let four = new ListNode(3);
let five = new ListNode(3);

one.next = two;
two.next = three;
three.next = four;
four.next = five;

let cur = one;
cur.next = three;


var traverse = function (head) {
    let node = head;
    while(node) {
        console.log(node.val);
        node = node.next;
    }
}

traverse(one);
// traverse(one);

var deleteDuplicates = function (head) {
    if(head == null)
        return null;
    let cur = head;
    while(cur) {
        let node = cur;
        while(node.next) {
            if(node.next.val == node.val) {
                node = node.next;
            }else {
                break;
            }
        }
        cur.next = node.next;
        cur = cur.next;
    }
    return head;
}

// traverse(deleteDuplicates(one));
