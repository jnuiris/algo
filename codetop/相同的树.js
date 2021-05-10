function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 先序遍历
function traverse(root) {
    if(root != null) {
        console.log(root.val);
        traverse(root.left);
        traverse(root.right);
    }
}

var isSameTree = function(p, q) {
    if(p == null && q == null)
        return true;
    if(p == null || q == null)
        return false;
    return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

let one_1 = new TreeNode(1);
let two_1 = new TreeNode(2);
let three_1 = new TreeNode(3);
one_1.left = two_1;
one_1.right = three_1;

let one_2 = new TreeNode(1);
let two_2 = new TreeNode(2);
let three_2 = new TreeNode(3);
one_2.left = two_2;
one_2.right = three_2;

// let one_1 = new TreeNode(1);
// let two_1 = new TreeNode(2);
// one_1.left = two_1;
//
// let one_2 = new TreeNode(1);
// let two_2 = new TreeNode(2);
// one_2.right = two_2;

console.log(isSameTree(one_1, one_2));


