//  最长重复子数组

//  不管怎么样先用暴力法做一遍

var findLength = function(nums1, nums2) {
    let max = 0;
    for(let i = 0; i < nums1.length; i++) {
        for(let j = 0; j < nums2.length; j++) {
            if(nums1[i] == nums2[j]) {
                let tmp = 1;
                let k = 1;
                while(i + k < nums1.length && j + k < nums2.length) {
                    if(nums1[i + k] == nums2[j + k]) {
                        k++;
                        tmp += 1;
                    }else{
                        break;
                    }
                }
                max = Math.max(max, tmp);
            }
        }
    }
    return max;
};

// console.log(findLength([1,2,3,2,1], [3,2,1,4,7]));
console.log(findLength())
