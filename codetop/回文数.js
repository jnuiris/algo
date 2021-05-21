var isPalindrome = function(x) {
    if(x < 0)
        return false;
    let sum = 0;
    let arr = [];
    while(x) {
        sum++;
        arr.push(x % 10);
        x = Math.floor(x / 10);
    }
    let l = sum;
    for(let i = 0; i < Math.floor(l / 2); i++) {
        if(arr[i] != arr[l - i - 1])
            return false;
    }
    return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
console.log(isPalindrome(1));
