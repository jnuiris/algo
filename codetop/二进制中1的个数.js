var hammingWeight = function(n) {
    let m = n.toString(2);
    let num = 0;
    for(let i = 0; i < m.length; i++) {
        if(m[i] - '0' && 1) {
            num += 1;
        }
    }
    return num;
};

console.log(hammingWeight(11));
