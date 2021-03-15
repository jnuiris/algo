//  完全没有思路系列
//  当然暴力法还是很容易想到的，只不过现在基本上不用暴力了吧
//  看了以下标准答案，还是用滑动窗口（我理解为某种意义上的双指针)

var minSubArrayLen = function(target, nums) {
    if(nums.length == 0)
        return 0;
    let left = 0;
    let right = 0;
    let min = Infinity;
    let ans = nums[left];
    let dis = 1;
    if(ans >= target)
        return 1;
    while(right <= nums.length - 1) {
        right++;
        // dis++;
        ans += nums[right];
        if(ans >= target) {
            dis = right - left + 1;
            while(left <= right) {
                ans -= nums[left];
                left++;
                if(ans >= target) {
                    dis = right - left + 1;
                }else {
                    break;
                }
            }
            // dis = right - left + 1;
            if(dis < min) {
                min = dis;
            }
        }
    }
    if(min < Infinity)
        return min;
    else
        return 0;
};
console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(4, [1,4,4]));
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));

//   这道题简直可以作为人生之耻纪念一下，在没有复杂数据结构的情况下，已知解题思路，竟然用了半小时才模拟出来....
//   要多训练啊
