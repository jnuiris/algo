//  也是之前写过很多遍的经典题目了，不过又忘了，学而时习之，诚不我欺
//  第一反应当然还是用哈希
var twoSum = function(nums, target) {
    // let m = new Map();
    let m1 = new Map();
    // let m2 = new Map();
    for(let [index, value] of nums.entries()) {
        m1.set(value, index);
        // m.set(index, value);
    }
    for(let [index, num] of nums.entries()) {
        if(m1.has(target - num) && m1.get(target - num) != index) {
            return [index, m1.get(target - num)];
        }
    }
};
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));

//  虽然AC了，但是算法效率惨不忍睹，不管怎么样还是先push上github
