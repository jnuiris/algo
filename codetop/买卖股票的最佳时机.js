//  这应该是目前在leetcode上所遇到的最简单的题目了，虽然不知道考点在哪，但是可以先尝试AC
// var maxProfit = function(prices) {
//     if(prices.length == 1) {
//         return 0;
//     }
//     let min = Infinity;
//     let max = 0;
//     let min_index = 0;
//     let max_index = 0;
//     for(let i = 0; i < prices.length; i++) {
//         if(prices[i] < min) {
//             min = prices[i];
//             min_index = i;
//         }
//         if(prices[i] > max) {
//             max = prices[i];
//             max_index = i;
//         }
//     }
//     if(max_index <= min_index)
//         return 0;
//     return max - min;
// };
// console.log(maxProfit([7,1,5,3,6,4]));

//  但是在第一次写的时候就犯了低级错误，这一题并不是求数据的最大值和最小值的差，而是求前后差值的最小值
// var maxProfit = function(prices) {
//     if(prices.length == 1) {
//         return 0;
//     }
//     let max = 0;
//     for(let i = 0; i < prices.length; i++) {
//         for(let j = i + 1; j < prices.length; j++) {
//             if(prices[j] - prices[i] > max) {
//                 max = prices[j] - prices[i];
//             }
//         }
//     }
//     return max;
// };
// console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([7,6,4,3,1]));

//  最终用了N*N算法复杂度解决了这道问题,不过在平台上会运行超时
//  必须思考有没有其他的解决方法
//  看了官方题解后豁然开朗，原来如此，自己先写着试试
var maxProfit = function(prices) {
    let max = 0;
    let min = Infinity;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < min) {
            min = prices[i];
        }
        max = Math.max(prices[i] - min, max);
    }
    return max > 0 ? max : 0;
};
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));

//  这样的话算法复杂度就成功降到了N，因为只需要一次遍历了


