//  我不是很懂为什么树的题目在leetcode上基本是easy,明明我感觉还挺难的
//  可能是因为这种题套模板的比较多吧
//  不管怎么样，先写一个计算节点高度的函数
//  其实就是之前的求二叉树的最大深度
//  然后再写一个递归就可以了

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// let one = new TreeNode(1);
// let two = new TreeNode(2);
// let three = new TreeNode(3);
// let four = new TreeNode(4);
// let five = new TreeNode(5);
// let six = new TreeNode(6);
// let seven = new TreeNode(7);
// let eight = new TreeNode(8);
//
// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;
// three.left = six;
// three.right = seven;
// four.left = eight;

//  先序遍历
function preTraverse(root) {
    if(root != null) {
        console.log(root.val);
        preTraverse(root.left);
        preTraverse(root.right);
    }
}

//  中序遍历
function inTraverse(root) {
    if(root != null) {
        inTraverse(root.left);
        console.log(root.val);
        inTraverse(root.right);
    }
}

//  后序遍历
function afterTraverse(root) {
    if(root != null) {
        afterTraverse(root.left);
        afterTraverse(root.right);
        console.log(root.val);
    }
}

//  先序遍历测试
// preTraverse(one);
// console.log('------------');
// //  中序遍历测试
// inTraverse(one);
// console.log('------------');
// //  后序遍历测试
// afterTraverse(one);

//  既然如此，不如写个层次遍历测试一下
//  层次遍历本质上就是借助队列实现的广度优先搜索
function levelTraverse(root) {
    let arr = [];
    arr.push(root);
    while(arr.length != 0) {
        let tmp = arr.shift();
        console.log(tmp.val);
        if(tmp.left != null)
            arr.push(tmp.left);
        if(tmp.right != null)
            arr.push(tmp.right);
    }
}

// let one = new TreeNode(3);
// let two = new TreeNode(9);
// let three = new TreeNode(20);
// let four = new TreeNode(15);
// let five = new TreeNode(7);
//
// one.left = two;
// one.right = three;
// three.left = four;
// three.right = five;

// preTraverse(one);

// let one = new TreeNode(1);
// let two = new TreeNode(2);
// let three = new TreeNode(2);
// let four = new TreeNode(3);
// let five = new TreeNode(3);
// let six = new TreeNode(4);
// let seven = new TreeNode(4);
//
// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;
// four.left = six;
// four.right = seven;

// let one = new TreeNode(1);
// let two = new TreeNode(2);
// let three = new TreeNode(3);
//
// one.right = two;
// two.right = three;

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(2);
let four = new TreeNode(3);
let five = new TreeNode(3);
let six = new TreeNode(4);
let seven = new TreeNode(4);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
four.left = six;
four.right = seven;

var maxDepth = function(root) {
    return root == null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

let maxLength = function (root) {
    return root == null ? 0 : Math.max(maxLength(root.left), maxLength(root.right)) + 1;
}

// console.log(maxLength(one));
// console.log(maxLength(two));
console.log(maxLength(one));
// console.log(maxDepth(one));
var isBalanced = function(root) {
    if(root == null)
        return true;
    return Math.abs(maxLength(root.left) - maxLength(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

console.log(isBalanced(one));
