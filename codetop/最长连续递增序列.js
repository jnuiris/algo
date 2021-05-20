// 提示的已经非常明显了，总是大概是个双指针问题

// var findLengthOfLCIS = function(nums) {
//     if(nums.length <= 0) {
//         return -1;
//     }
//     if(nums.length == 1) {
//         return nums[0];
//     }
//     let left = 0, right = 1;
//     while(right < nums.length) {
//         if(left < right) {
//             right++;
//         }else {
//             left++;
//         }
//     }
// };

// 我大意了，跟双指针似乎没有什么关系

var findLengthOfLCIS = function(nums) {
    if(nums.length <= 1)
        return nums.length;
    let ans = -1;
    let count = 1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i + 1] > nums[i]) {
            count++;
        }else {
            count = 1;
        }
        ans = Math.max(count, ans);
    }
    return ans;
};
console.log(findLengthOfLCIS([1,3,5,4,7]));
console.log(findLengthOfLCIS([2,2,2,2,2]));
