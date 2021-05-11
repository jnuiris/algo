//  虽然的树的easy深度优先遍历问题，但是还是一点思路没有

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

//  看答案永远是那么简单，但是自己就是想不到

//  所以说在JS中使用二分要用l + Math.ceil((r - l) / 2)
var sortedArrayToBST = function(nums) {
    let dfs = function (nums, l, r) {
        if(l > r)
            return null;
        let mid = l + Math.floor((r - l) / 2);
        let root = new TreeNode(nums[mid]);
        root.left = dfs(nums, l, mid - 1);
        root.right = dfs(nums, mid + 1, r);
        return root;
    }
    return dfs(nums, 0, nums.length - 1);
};

console.log(traverse(sortedArrayToBST( [-10,-3,0,5,9])));
