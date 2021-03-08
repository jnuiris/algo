//  虽然我知道肯定不是这么写，但是AC最重要
var nums = [3,2,1,5,6,4];
var k = 2;
//  不要忽略了数组的下标从0开始
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);
    // console.log(nums);
    return nums[k - 1];
};
console.log(findKthLargest(nums, k));

//  JS的sort函数果然牛逼，直接AC并且击败了一大半用户，过会看看真正的写法，先提交
