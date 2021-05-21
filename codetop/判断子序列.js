//  暴力就完事了

// var isSubsequence = function(s, t) {
//     let arr = [];
//     s = s.split('');
//     t = t.split('');
//     let l = s.length;
//     for(let i = 0; i < l; i++) {
//         if(t.indexOf(s[i]) == -1)
//             return false;
//         else {
//             arr.push(t.indexOf(s[i]));
//             s.splice(i, 1);
//             l--;
//         }
//     }
//     for(let i = 0; i < arr.length - 1; i++) {
//         if(arr[i + 1] < arr[i])
//             return false;
//     }
//     return true;
// };
//
// console.log(isSubsequence("abc", "ahbgdc"));
// console.log(isSubsequence( "axc", "ahbgdc"));
// console.log(isSubsequence("acb",
// "ahbgdc"))

// console.log('jnuzzb'.indexOf('a'))

// console.log([1, 2, 3] == [1, 3, 2])

// 我选择放弃，还是使用双指针法
var isSubsequence = function(s, t) {
    let l = 0, r = 0;
    while(l < s.length && r < t.length) {
        if(s[l] == t[r]) {
            l++;
            r++;
        }else {
            r++;
        }
    }
    if(l == s.length)
        return true;
    else
        return false;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence( "axc", "ahbgdc"));
console.log(isSubsequence("acb",
    "ahbgdc"))


