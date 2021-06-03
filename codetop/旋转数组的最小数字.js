// var minArray = function(numbers) {
//     for(let i = 0; i < numbers.length - 1; i++) {
//         if(numbers[i + 1] < numbers[i]) {
//             return numbers[i + 1];
//         }
//     }
// };

//  二分查找法，真的没想到
var minArray = function(numbers) {
    let low = 0;
    let high = numbers.length - 1;
    while(low < high) {
        let mid = low + Math.floor((high - low) / 2);
        if(numbers[mid] < numbers[high]) {
            high = mid;
        }else if(numbers[mid] > numbers[high]) {
            low = mid + 1;
        }else {
            high--;
        }
    }
    return numbers[low];
};
