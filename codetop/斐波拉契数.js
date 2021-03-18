//  做道esay题练练手吧，不然今天的git push就是0了
// var fib = function(n) {
//     if(n == 0)
//         return 1
//     if(n == 1)
//         return 1
//     else {
//         return fib(n - 1) + fib(n - 2);
//     }
// };

var fib = function(n) {
    let i = 0;
    let j = 1;
    let res = 0;
    if(n == 0)
        return 0
    if(n == 1)
        return 1
    for(let k = 2; k <= n; k++) {
        res = i + j;
        i = j;
        j = res;
    }
    return res;
}

console.log(fib(4));


