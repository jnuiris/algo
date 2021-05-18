//  思路很明确了，大概就是先排序然后用栈对比

var isAnagram = function(s, t) {
    if(s.length != t.length)
        return 0;
    let sCode = [];
    let tCode = [];
    for(let i = 0; i < s.length; i++) {
        sCode[i] = s.charCodeAt(i);
        tCode[i] = t.charCodeAt(i);
    }
    sCode.sort((a, b) => {
        return a - b;
    })
    tCode.sort((a, b) => {
        return a - b;
    })
    let flag = 1;
    for(let i = 0; i < s.length; i++) {
        if(sCode[i] != tCode[i]) {
            flag = 0;
            break;
        }
    }
    return Boolean(flag);
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

// let s = '12ds4!!';
// let s2 = [1, 3, 2, 4]
// let s1 = ['1', '2', 'd', 's', '4', '!', '!']
// for(let i = 0; i < s.length; i++) {
//     s[i] = s.charCodeAt(i);
// }
// console.log(s)
// s1.sort((a, b) => {
//     return a - b;
// })
// console.log(s1);
// console.log(s.charCodeAt(1));
// let s = '12ds4!!';
// let s1 = [];
// for(let i = 0; i < s.length; i++) {
//     s1[i] = s.charCodeAt(i);
// }
// console.log(s1);

// console.log([1, 2] == [1, 2])

