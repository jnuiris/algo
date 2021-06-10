var firstUniqChar = function(s) {
    if(s.length == 0)
        return '';
    let m = new Map();
    for(let i = 0; i < s.length; i++) {
        if(!m.has(s[i])) {
            m.set(s[i], 1);
        }else {
            m.set(s[i], m.get(s[i]) + 1);
        }
    }
    for(let item of m.keys()) {
        if(m.get(item) == 1) {
            return item;
        }
    }
    return '';
};

console.log(firstUniqChar("abaccdeff"));
console.log(firstUniqChar(''));
