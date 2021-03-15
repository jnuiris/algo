//  第一反应，直接合并，然后排序，然后返回，不过这种写法未免太投机取巧了
//  还是用归并比较好一点
//  但是题目给了一点限制，就是尽量不要引入新的空间，这就跟前面链表的题目不太一样
//  不管怎么样，先用排序试一下
// var merge = function(nums1, m, nums2, n) {
//     let num = new Array(m + n);
//     for(var i = 0; i < m; i++) {
//         num[i] = nums1[i];
//     }
//     for(var j = 0; j < n; j++) {
//         num[i + j] = nums2[j];
//     }
//     // console.log(num);
//     return num.sort();
// };
// console.log(merge([1,2,3,0,0,0], 3, [2, 5, 6], 3));
//  莫名其妙地在平台上跑有点问题，然后参考了平台地解法，仍然是双指针，不过是从后往前的，这样就不需要额外地的时间复杂度了，
//  写一下试试

var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;
    while(p1 >= 0 && p2 >= 0) {
        if(nums1[p1] >= nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        }else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    while(p1 >= 0) {
        nums1[p] = nums1[p1];
        p--;p1--;
    }
    while(p2 >= 0) {
        nums1[p] = nums2[p2];
        p--;p2--;
    }
    return nums1;
}
console.log(merge([1,2,3,0,0,0], 3, [2, 5, 6], 3));
