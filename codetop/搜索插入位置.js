var searchInsert = function(nums, target) {
    if(!nums.includes(target)) {
        nums.push(target);
        nums = nums.sort((a, b) => {
            return a - b;
        })
        return nums.indexOf(target);
    }else {
        return nums.indexOf(target);
    }
};

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 7))
