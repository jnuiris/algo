//  排序+双指针
var intersection = function(nums1, nums2) {
    let arr = [];
    nums1 = nums1.sort((a, b) => {
        return a - b;
    });
    nums2 = nums2.sort((a, b) => {
        return a - b;
    })
    let i = 0, j = 0;
    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] == nums2[j] && !arr.includes(nums1[i])) {
            arr.push(nums1[i]);
            i++;
            j++;
        }else if(nums1[i] > nums2[j]) {
            j++;
        }else {
            i++;
        }
    }
    return arr;
};

console.log(intersection([1,2,2,1], [2, 2]));

// let nums = [1, 3, 2];
// nums.sort((a, b) => {
//     return a - b;
// })
// console.log(nums);

console.log(intersection([4,9,5], [9,4,9,8,4]));
