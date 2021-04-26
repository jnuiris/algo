//  这一题好像做过，递归超时，迭代才可以
// var fib = function(n) {
//     if(n == 0)
//         return 0;
//     if(n == 1)
//         return 1;
//     return fib(n - 1) + fib(n - 2);
// };

// console.log(fib(5));

//  那就用迭代做吧

var fib = function (n) {
    if(n == 0)
        return 0;
    if(n == 1)
        return 1;
    let a = 0, b = 1, sum = 0;
    for(let i = 1; i < n; i++) {
        //  注意这里取模的位置
        sum = (a + b) % 1000000007;
        a = b;
        b = sum;
    }
    return sum % 1000000007;
}
console.log(fib(5));

// console.log(37889062373143904 % 1000000007)
