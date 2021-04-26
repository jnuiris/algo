//  比较有名的一道题了
//  虽然我不知道自己在写什么，但是我要会写

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var invertTree = function(root) {
    if(root == null)
        return root;
    tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    root.left = invertTree(root.left);
    root.right = invertTree(root.right);
    return root;
};
