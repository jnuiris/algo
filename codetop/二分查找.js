//  二分查找，送分题
var search = function(nums, target) {
    let left = 0, right = nums.length - 1
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(nums[mid] == target)
            return mid
        else if(nums[mid] < target)
            left = mid + 1
        else
            right = mid - 1;
    }
    return -1;
};
console.log(search( [5], 5));

//  二分查找虽然简单，但是有几个容易忽视的点
//  left <= right以及left = mid + 1和right = mid - 1
