//  以后这种题目可以自己先观察一下，不用急着否定自己

var nthUglyNumber = function(n) {
    if(n < 1) {
        return -1;
    }
    let arr = new Array(n);
    arr[0] = 1;
    let id1 = 0, id2 = 0, id3 = 0;
    for(let i = 1; i < n; i++) {
        let now = Math.min(arr[id1] * 2, Math.min(arr[id2] * 3, arr[id3] * 5));
        if(now == arr[id1] * 2)
            id1 += 1;
        if(now == arr[id2] * 3)
            id2 += 1;
        if(now == arr[id3] * 5)
            id3 += 1;
        arr[i] = now;
    }
    return arr[n - 1];
};

console.log(nthUglyNumber(10));
