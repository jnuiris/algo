//  第一反应，用栈，先试试
var isValid = function(s) {
    let arr = [];
    // let flag = 1;
    let m = new Map();
    m.set(')', '(');
    m.set(']', '[');
    m.set('}', '{');
    if(s.length % 2 == 1) {
        return false;
    }
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(' || s[i] == '[' || s[i] == '{') {
            arr.push(s[i]);
            // flag = 0;
        }else {
            let tmp = arr.pop();
            if(tmp != m.get(s[i])) {
                // flag = 0;
                arr.push(tmp);
                break;
            }else {
                // flag = 1;
            }
        }
    }
    if(arr.length != 0) {
        return false;
    }else {
        return true;
    }
    // if(flag == 1) {
    //     return true;
    // }else {
    //     return false;
    // }
};
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid('0'));
console.log(isValid('[]('));
console.log(isValid('(('));
console.log(isValid('[[[]'))
// console.log(isValid('(]'));
//  这一题很简单，但是暴露出了很多问题:
//  首先，经验不够，做题目太容易想当然了
//  然后，编写代码后完全不测试，也不知道该怎么测试，问题很大
