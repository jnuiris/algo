var longestCommonPrefix = function(strs) {
    let sum = 0;
    let str = '';
    for(let i = 0; i < strs.length; i++) {
        var min = Infinity;
        if(strs[i].length < min)
            min = strs[i].length;
    }
    for(let i = 0; i < min; i++) {
        let j = 0;
        let flag = 0;
        while(j < strs.length - 1) {
            if(strs[j][i] != strs[j + 1][i]) {
                flag = 1;
                break;
            }
            j++;
        }
        if(flag == 1)
            break;
        sum += 1;
    }
    for(let i = 0; i < sum; i++) {
        str += strs[0][i];
    }
    return str;
};

// console.log(longestCommonPrefix(["flower","flow","flight"]));
// console.log(longestCommonPrefix(["dog","racecar","car"]))

// console.log(longestCommonPrefix(['ab']))
//
// for(let i = 0; i < 0; i++) {
//     console.log(1);
// }
// console.log(longestCommonPrefix(['1234', '1234']))
