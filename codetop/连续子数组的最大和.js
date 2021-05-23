//  这道题好像算法设计做过，不过又忘了

//  动态规划，唉，又不会了

var maxSubArray = function(nums) {
    // let sum = 0;
    let num = new Array(nums.length);
    num[0] = nums[0];
    for(let i = 1; i < nums.length; i++) {
        num[i] = Math.max(num[i - 1], 0) + nums[i];
    }
    return Math.max(...num);
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([-1]))
