//  递归

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}


let helper = function (root, sum) {
    if(!root) {
        return 0;
    }else if(!root.left && !root.right) {
        return sum * 10 + root.val;
    }
    return helper(root.left, 10 * sum + root.val) + helper(root.right, 10 * sum + root.val);
}

var sumNumbers = function(root) {
    return helper(root, 0);
};

// let one = new TreeNode(1);
// let two = new TreeNode(2);
// let three = new TreeNode(3);
// one.left = two;
// one.right = three;
// console.log(sumNumbers(one));

let one = new TreeNode(4);
let two = new TreeNode(9);
let three = new TreeNode(0);
let four = new TreeNode(5);
let five = new TreeNode(1);

one.left = two;
one.right = three;
two.left = four;
two.right = five;

console.log(sumNumbers(one));
