//  先用栈做一下吧
//  限制条件是相邻且相同
var removeDuplicates = function(S) {
    let result = new Array();
    result.push(S[0]);
    for(let i = 1; i < S.length; i++) {
        let tmp = result.pop();
        if(tmp == S[i]) {

        }else {
            result.push(tmp);
            result.push(S[i]);
        }
    }
    return result.toString().split(',').join('');
};

// var str = "abbaca";
// removeDuplicates(str);

// let arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.shift();
// arr.unshift(4);
// console.log(arr);

console.log(removeDuplicates("abbaca"));
