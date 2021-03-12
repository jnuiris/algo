//  这一题用JS就很简单了
// var addStrings = function(num1, num2) {
//     return Number(num1) + Number(num2);
// };
// console.log(addStrings(1, 2));
//  但是题目要求不能用任何内建库，再想办法
// var addStrings = function(num1, num2) {
//     let sum1 = sum2 = 0;
//     for(let i = num1.length - 1; i >= 0; i--) {
//         sum1 += (num1[i] - '0') * Math.pow(10, num1.length - i - 1);
//         // let tmp = num1 % 10;
//         // sum1 += tmp * (i + 1);
//         // num1 /= 10;
//         // console.log(sum1);
//     }
//     for(let j = num2.length - 1; j >= 0; j--) {
//         sum2 += (num2[j] - '0') * Math.pow(10, num2.length - j - 1);
//         // let tmp = num2 % 10;
//         // sum2 += tmp * (i + 1);
//         // num2 /= 10;
//         // console.log(sum2);
//         // console.log(sum2);
//     }
//     console.log(sum1);
//     console.log(sum2);
//     // console.log(num1);
//     console.log(sum2 + sum1);
//     return (sum1 + sum2) + '';
// };
// console.log(addStrings("9333852702227987", "85731737104263"));
//
//
// //  JS在处理16位以上的数字时会损失精度，还是我太年轻了

//  参考了标准回答，可以用模拟解决问题
var addStrings = function(num1, num2) {
    let i = num1.length - 1, j = num2.length - 1;
    let ans = 0, add = 0, tmp1 = 0, tmp2 = 0;
    let result = [];
    while(i >= 0 || j >= 0) {
        tmp1 = i >= 0 ? num1[i] - '0' : 0;
        tmp2 = j >= 0 ? num2[j] - '0' : 0;
        ans = tmp1 + tmp2 + add;
        add = (Math.floor(ans / 10));
        result.push(ans % 10);
        i--;j--;
    }
    if(add != 0) {
        result.push(add);
    }
    return result.reverse().join('');
};
console.log(addStrings('0', '0'));

//  几经修改之后终于AC，这是非常有意思的一道题，也是这几天做的最有收获的一道题

