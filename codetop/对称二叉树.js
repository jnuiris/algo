function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

//  先序遍历
// function traverse(root) {
//     if(root != null) {
//         console.log(root.val);
//         traverse(root.left);
//         traverse(root.right);
//     }
// }

//  层次遍历
//  一次AC我是没想到的
function levelTraverse(root) {
    let arr = [];
    let nodeArr = [];
    nodeArr.push(root);
    while(nodeArr.length != 0) {
        let tmp = nodeArr.shift();
        arr.push(tmp.val);
        if(tmp.left) {
            nodeArr.push(tmp.left);
        }
        if(tmp.right) {
            nodeArr.push(tmp.right);
        }
    }
    // for(let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // }
    return arr;
}

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(2);
let four = new TreeNode(3);
let five = new TreeNode(4);
let six = new TreeNode(4);
let seven = new TreeNode(3);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;

// traverse(one);
// levelTraverse(one);
// 二叉树基本都是递归吧
// var isSymmetric = function(root) {
//     if(root == null) {
//         return true;
//     }
//     return root.left.val == root.right.val && isSymmetric(root.left) && isSymmetric(root.right);
// };
//
// console.log(isSymmetric(one));

//  我突然有思路了，如果不用递归，直接用层次遍历，然后判断数组是不是对称，这样基本上是可行的

// var isSymmetric = function(root) {
//     let arr = levelTraverse(root);
//     console.log(arr);
//     let len = arr.length;
//     for(let i = 0; i <= Math.floor(len / 2); i++) {
//         if(arr[i] != arr[len - i - 1])
//             return false;
//     }
//     return true;
// };
//
// console.log(isSymmetric(one));

//  似乎不可行,需要记录层次，比较麻烦
function test(root1, root2) {
    if(root1 == null && root2 == null) {
        return true;
    }
    if(root1 == null || root2 == null) {
        return false;
    }
    return root1.val == root2.val && test(root1.left, root2.right) && test(root1.right, root2.left);
}
var isSymmetric = function(root) {
    return test(root, root);
};

console.log(isSymmetric(one));

