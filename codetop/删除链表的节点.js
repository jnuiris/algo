function ListNode(val) {
    this.val = val;
    this.next = null;
}

let one = new ListNode(4);
let two = new ListNode(5);
let three = new ListNode(1);
let four = new ListNode(9);

one.next = two;
two.next = three;
three.next = four;

let traverse = (head) => {
    while(head) {
        console.log(head.val);
        head = head.next;
    }
}

// traverse(one);

var deleteNode = function(head, val) {
    if(head.val == val) {
        head = head.next;
        return head;
    }
    let preHead = new ListNode(-1);
    preHead.next = head;
    while(preHead.next) {
        if(preHead.next.val == val) {
            preHead.next = preHead.next.next;
            break;
        }
        preHead = preHead.next;
    }
    return head;
};

traverse(deleteNode(one, 4));
