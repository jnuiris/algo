function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function preTraverse(root) {
    if(root != null) {
        console.log(root.val);
        preTraverse(root.left);
        preTraverse(root.right);
    }
}

let one = new TreeNode(3);
let two = new TreeNode(1);
let three = new TreeNode(4);
let four = new TreeNode(2);

one.left = two;
one.right = three;
two.right = four;

// preTraverse(one);

function levelTraverse(root) {
    let result = [];
    let arr = [];
    arr.push(root);
    while(arr.length) {
        let cur = arr.shift();
        result.push(cur.val);
        if(cur.left)
            arr.push(cur.left);
        if(cur.right)
            arr.push(cur.right);
    }
    return result;
}

var kthLargest = function(root, k) {
    return levelTraverse(root).sort((a, b) => {
        return b - a;
    })[k - 1];
};

console.log(kthLargest(one, 1));
