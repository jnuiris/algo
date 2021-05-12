//  最长重复子数组

//  不管怎么样先用暴力法做一遍

// var findLength = function(nums1, nums2) {
//     let max = 0;
//     for(let i = 0; i < nums1.length; i++) {
//         for(let j = 0; j < nums2.length; j++) {
//             if(nums1[i] == nums2[j]) {
//                 let tmp = 1;
//                 let k = 1;
//                 while(i + k < nums1.length && j + k < nums2.length) {
//                     if(nums1[i + k] == nums2[j + k]) {
//                         k++;
//                         tmp += 1;
//                     }else{
//                         break;
//                     }
//                 }
//                 max = Math.max(max, tmp);
//             }
//         }
//     }
//     return max;
// };

// console.log(findLength([1,2,3,2,1], [3,2,1,4,7]));
// console.log(findLength())

 // 动态规划写法
var findLength = function (nums1, nums2) {
    let dp = new Array(nums1.length + 1);
    for(let m = 0; m < dp.length; m++) {
        dp[m] = new Array(nums2.length + 1);
    }
    for(let i = 0; i < dp.length; i++) {
        for(let j = 0; j < dp[0].length; j++) {
            dp[i][j] = 0;
        }
    }
    // for(let i = 0; i < nums1.length; i++) {
    //     for(let j = 0; j < nums2.length; j++) {
    //         dp[i][j] = (nums1[i] == nums2[j])
    //     }
    // }
    let max = 0;
    for(let i = nums1.length - 1; i >= 0; i--) {
        for(let j = nums2.length; j >= 0; j--) {
            dp[i][j] = (nums1[i] == nums2[j]) ? dp[i + 1][j + 1] + 1 : 0;
            max = Math.max(max, dp[i][j]);
        }
    }
    return max;
}

// let dp = new Array(10);
// for(let m = 0; m < 10; m++) {
//     dp[m] = new Array(10);
// }
// console.log(dp[0][0]);

console.log(findLength([1,2,3,2,1], [3,2,1,4,7]));
