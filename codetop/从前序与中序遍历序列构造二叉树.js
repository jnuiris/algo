//  又是完全没有思路的一题

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

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

//  构造
let one = new TreeNode(3);
let two = new TreeNode(9);
let three = new TreeNode(20);
let four = new TreeNode(15);
let five = new TreeNode(7);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
//
// console.log(preTraverse(one));
// console.log(inTraverse(one));


var buildTree = function(preorder, inorder) {
    let preLen = preorder.length;
    let inLen = inorder.length;

    if(preLen != inLen) {
        return -1;
    }

    let map = new Map();
    for(let i = 0; i < inLen; i++) {
        map.set(inorder[i], i);
    }

    return buildTrees(preorder, 0, preLen - 1, map, 0, inLen - 1);
};

let buildTrees = function (preorder, preleft, preright, map, inleft, inright) {
    if(preleft > preright || inleft > inright) {
        return null;
    }

    let rootVal = preorder[preleft];
    let root = new TreeNode(rootVal);
    let pIndex = map.get(rootVal);

    root.left = buildTrees(preorder, preleft + 1, pIndex - inleft + preleft,
        map, inleft, pIndex - 1);

    root.right = buildTrees(preorder, pIndex - inleft + preleft + 1, preright,
        map, pIndex + 1, inright);

    return root;
}

console.log(preTraverse(buildTree([3,9,20,15,7], [9,3,15,20,7])))
