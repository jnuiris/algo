//  不需要额外的空间复杂度，就往位运算方向想


var singleNumber = function(nums) {
    let single = 0;
    for(let num of nums) {
        // console.log(num);
        single ^= num;
        // console.log(single);
    }
    return single;
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
