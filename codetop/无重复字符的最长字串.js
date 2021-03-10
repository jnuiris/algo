//  无重复字符的最长字串
//  这道题算法设计时做过，当时是复制的别人的动态规划代码，现在已经忘了，再写一遍试试
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0)
        return 0;
    let m = new Map();
    max = 0;
    left = 0;
    for(let i = 0; i < s.length; i++) {
        if(m.has(s.charAt(i))) {
            left = Math.max(left, m.get(s.charAt(i)) + 1);
        }
        m.set(s.charAt(i), i);
        max = Math.max(max, i - left + 1);
    }
    return max;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));

//  直接对着精选回答的滑动窗口Java实现照抄了一下然后就直接AC了(ES6中的map除了has和set方法与Java方法名不太一样，其他
//  基本一致，现在需要理解这个回答


