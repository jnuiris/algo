//  这道题我基本上题目都没有看懂，直接看评论区答案的
var getIntersectionNode = function(headA, headB) {
    if(headA == null || headB == null)
        return null;
    let p1 = headA, p2 = headB;
    while(p1 != p2) {
        p1 = p1 == null ? headB : p1.next;
        p2 = p2 == null ? headA : p2.next;
    }
    return p1;
};
