//  朴实无华的解法
function trans(hex) {
    let arr = [];
    let a = hex;
    do {
        arr.push(a % 2);
        a = Math.floor(a / 2);
    }while(a != 0)
    return arr;
}

function findSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == '1')
            sum += 1;
    }
    return sum;
}

Array.prototype.toBinary = function () {
    // console.log(1);
    // let newArr = this;
    // console.log(newArr);
    this.sort(function (i, j) {
        if(findSum(trans(i)) > findSum(trans(j))) {
            return 1;
        }else if(findSum(trans(i)) < findSum(trans(j))) {
            return -1;
        }else {
            if(i > j)
                return 1;
            else
                return -1;
        }
    })
    return this;
    // for(let i = 0; i < arr.length; i++) {
    //     arr[i] = trans()
    // }
}

var sortByBits = function(arr) {
    return arr.toBinary();
    // console.log(arr.toBinary());
    // arr.toBinary();
};

sortByBits([0,1,2,3,4,5,6,7,8]);
// console.log(trans(17));
