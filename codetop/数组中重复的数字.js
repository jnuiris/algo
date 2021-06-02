//  方法1 set
// var findRepeatNumber = function(nums) {
//     let s = new Set();
//     for(let num of nums) {
//         if(!s.has(num)) {
//             s.add(num);
//         }else {
//             return num;
//         }
//     }
// };
//
// console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));

//  方法2 原地交换
var findRepeatNumber = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != i) {
            let tmp = nums[i];
            nums[i] = nums[tmp];
            nums[tmp] = tmp;
            if(nums[i] == nums[nums[i]]) {
                return nums[i];
            }
        }
    }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
