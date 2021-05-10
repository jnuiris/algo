// var restoreIpAddresses = function(s) {
//     //  存储结果的数组
//     let result = [];
//     //  存储每种可能的数组
//     let segment = new Array(4);
//     //  定义回溯函数
//     let dfs = function (s, id, start) {
//         if(id == 4) {
//             if(start == s.length) {
//                 result.push(segment.join('.'));
//             }
//             return;
//         }
//         //  特殊情况之:不可以有前导0，因此，有0直接加入
//         if(s[start] == '0') {
//             segment[id] = s[start] - '0';
//             dfs(s, id + 1, start + 1);
//         }
//             //  更一般的情况
//         let add = 0;
//         for(let end = start; end < s.length; end++) {
//             add = add * 10 + (s[end] - '0');
//             if(add > 0 && add <= 255) {
//                 segment[id] = add;
//                 // result.push(add);
//                 dfs(s, id + 1, end + 1);
//             }else {
//                 break;
//             }
//         }
//     }
//     dfs(s, 0, 0);
//     return result;
// };
//
// console.log(restoreIpAddresses("101023"));
//
//
// // console.log([1, 2, 3].join('.'));
var restoreIpAddresses = function (s) {
//    储存最终结果的数组
    let result = [];
//    储存当前结果的数组
    let segment = new Array(4);
    
//    定义回溯函数
    let dfs = function (s, id, start) {
        if(id == 4) {
            if(start == s.length) {
                result.push(segment.join('.'));
            }
            return;
        }
    //  减枝，如果还没有四段就已经结束了
        if(start == s.length) {
            return;
        }
    //    对于首字母是0的情况
        if(s[start] == '0') {
            segment[id] = 0;
            dfs(s, id + 1, start + 1);
        }

    //    更加一般的情况
        let add = 0;
        for(let end = start; end < s.length; end++) {
            add = add * 10 + (s[end] - '0');
            if(add > 0 && add < 255) {
                segment[id] = add;
                dfs(s, id + 1, end + 1);
            }else {
                break;
            }
        }
    }
    dfs(s, 0, 0);
    return result;
}

console.log(restoreIpAddresses("101023"));

