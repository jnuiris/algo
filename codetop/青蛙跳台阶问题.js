//  经典斐波拉契数列，昨天才做的

var numWays = function(n) {
    if(n == 0)
        return 1;
    if(n == 1)
        return 1;
    let a = 0, b = 1, sum = 0;
    for(let i = 0; i < n; i++) {
        sum = (a + b) % 1000000007;
        a = b;
        b = sum;
    }
    return sum;
};
console.log(numWays(7));
