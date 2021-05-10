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

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
one.right = two;
two.left = three;
// one.left = two;
// one.right = three;
//
// traverse(one);

//  说实话，我总感觉这一题我做过很多遍了

//  中序遍历的递归写法
var inorderTraversal = function(root) {
    let result = [];
    let traverse = function (root) {
        if(root != null) {
            traverse(root.left);
            result.push(root.val);
            traverse(root.right);
        }
    }
    traverse(root);
    return result;
};

console.log(inorderTraversal(one));
