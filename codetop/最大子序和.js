//  又是算法设计的经典题目，我感觉我真废了，又不会写了
// var maxSubArray = function(nums) {
//     let ans = nums[0];
//     let sum = 0;
//     for(let num of nums) {
//         if(sum > 0) {
//             sum += num
//         }else {
//             sum = num;
//         }
//         ans = Math.max(ans, sum);
//     }
//     return ans;
// };
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

//  时隔一天，我决定再写一次
// var maxSubArray = function (nums) {
//     let sum = 0;
//     let ans = nums[0];
//     for(let num of nums) {
//         if(sum > 0) {
//             sum += num;
//         }else {
//             sum = num;
//         }
//         ans = Math.max(ans, sum);
//     }
//     return ans;
// }
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

//  刚才竟然还是没写出来，现在再写一遍
var maxSubArray = function (nums) {
    let ans = nums[0];
    let sum = 0;
    for(let num of nums) {
        if(sum > 0) {
            sum += num;
        }else {
            sum = num;
        }
        ans = Math.max(ans, sum);
    }
    return ans;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
