//  方法1 set
var findRepeatNumber = function(nums) {
    let s = new Set();
    for(let num of nums) {
        if(!s.has(num)) {
            s.add(num);
        }else {
            return num;
        }
    }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
