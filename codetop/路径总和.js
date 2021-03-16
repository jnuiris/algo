//  树的题目真的老长时间没做了
//  反正这一题是基本上没什么思路
//  不管怎么样，先经典遍历测试
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
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

// levelTraverse(one);

//  现在再看其实也很简单，不过当时实在是太菜了
//  现在可以正式做这道题了
//  看了大神的JS递归代码，说实话我完全理解不了，不管怎么样，先AC，然后调试了解一下过程
var hasPathSum = function(root, targetSum) {
    if(root == null)
        return false;
    if(root.left == null && root.right == null)
        return targetSum - root.val == 0 ? true : false;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
    // if (root == null) return false;                // 遍历到null节点
    // if (root.left == null && root.right == null) { // 遍历到叶子节点
    //     return sum - root.val == 0;                  // 如果满足这个就返回true。否则返回false
    // }
    // // 当前递归问题 拆解成 两个子树的问题，其中一个true了就行
    // return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};

//  false测试没问题
// let one = new TreeNode(1);
// let two = new TreeNode(2);
// let three = new TreeNode(3);
// one.left = two;
// one.right = three;
// console.log(hasPathSum(one, 5));

//  测试一下true的情况
let one = new TreeNode(5);
let two = new TreeNode(4);
let three = new TreeNode(8);
let four = new TreeNode(11);
let five = new TreeNode(13);
let six = new TreeNode(4);
let seven = new TreeNode(7);
let eight = new TreeNode(2);
let nine = new TreeNode(1);

one.left = two;
one.right = three;
two.left = four;
three.left = five;
three.right = six;
four.left = seven;
four.right = eight;
six.right = nine;

console.log(hasPathSum(one, 22));

