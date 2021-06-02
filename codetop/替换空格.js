var replaceSpace = function(s) {
    let newArr = [];
    for(let item of s) {
        if(item != ' ') {
            newArr.push(item);
        }else {
            newArr.push('%');
            newArr.push('2');
            newArr.push('0');
        }
    }
    return newArr.join('');
};

console.log(replaceSpace("We are happy."));
// let s = 'jiangnan university';
// for(let item of s) {
//     console.log(item);
// }
