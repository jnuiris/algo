//  这一题就不用说了，太经典了
// var climbStairs = function(n) {
//     if(n <= 0)
//         return;
//     if(n == 1)
//         return 1;
//     if(n == 2)
//         return 2;
//     return climbStairs(n - 1) + climbStairs(n - 2);
// };
var climbStairs = function(n) {
    if(n == 1)
        return 1;
    if(n == 2)
        return 2;
    let k = 3;
    let res = 0;
    let i = 1;
    let j = 2;
    while(k <= n) {
        res = i + j;
        i = j;
        j = res;
        k++;
    }
    return res;
    // return climbStairs(n - 1) + climbStairs(n - 2);
};
console.log(climbStairs(6));

setTimeout(function () {
    console.log('hello');
}, 0);

//  但是在leetcode上面提交超时，我印象中爬楼梯的经典解法就是这样，不过当数字太大时，确实在本地运行都要跑很长时间
//  直接递归是通过不了的，我们这里需要将其改为迭代


