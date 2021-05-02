var maximumProduct = function(nums) {
    if(nums.length < 3)
        return 0;
    nums.sort((a, b) => {
        return a - b;
    })
    let n = nums.length - 1;
    return Math.max(nums[0] * nums[1] * nums[n], nums[n], nums[n - 1], nums[n - 2]);
};

console.log(maximumProduct([1,2,3]));
