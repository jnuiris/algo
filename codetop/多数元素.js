// 不管怎么样，先用笨办法AC吧
// Boyer-Moore 投票算法

var majorityElement = function(nums) {
    let candidate = nums[0], count = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] != candidate) {
            count--;
        }else {
            count++;
        }
        if(count < 0) {
            count = 0;
            candidate = nums[i];
        }
    }
    return candidate;
};
console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([1,3,1,1,4,1,1,5,1,1,6,2,2]));
