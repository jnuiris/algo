//  涉及到数论了，想不到

var cuttingRope = function(n) {
    if(n <= 3)
        return n - 1;
    let sum = 1;
    while(n > 4) {
        sum *= 3;
        n -= 3;
    }
    return sum * n;
};

console.log(cuttingRope(10));
