//  感觉这一题应该是动态规划的题目
//  不管怎么样，先自己写一下试试
// var maxArea = function(height) {
//     if(height.length <= 1)
//         return 0;
//     let left = 0, right = 1;
//     let max = 0;
//     let tmp = 0;
//     while(right < height.length) {
//         tmp = (right - left) * Math.min(height[right], height[left]);
//         if(tmp > max) {
//             right++;
//             max = tmp;
//         }else {
//             left++;
//         }
//         right++;
//     }
//     return max;
// };
// console.log(maxArea([1,8,6,2,5,4,8,3,7]));

//  这题我的直觉是对的，但是思路错了，双指针，但是指针移动的条件错了
// var maxArea = function(height) {
//     if(height.length <= 1)
//         return 0;
//     let left = 0, right = height.length - 1;
//     let max = 0;
//     let tmp = 0;
//     while(left <= right) {
//         let high = 0;
//         if(height[left] <= height[right]) {
//             high = height[left];
//             left++;
//         }else {
//             high = height[right];
//             right--;
//         }
//         tmp = high * (right - left + 1);
//         if(tmp > max)
//             max = tmp;
//     }
//     return max;
// };
// console.log(maxArea([1,2,1]));
var maxArea = function(height) {
    if(height.length <= 1)
        return 0;
    let left = 0, right = 1;
    let max = 0;
    let tmp = 0;
    while(left <= right) {
        let high = 0;
        if(height[left] <= height[right]) {
            high = height[left];
            left++;
        }else {
            high = height[right];
            right++;
        }
        tmp = high * (right - left + 1);
        if(tmp > max)
            max = tmp;
    }
    return max;
};
console.log(maxArea([1,2,1]));
