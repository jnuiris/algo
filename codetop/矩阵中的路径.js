// let test = new Array(3);
// // for(let item in test) {
// //     console.log(item);
// // }
// test[0] = 0;
// for(let i = 0; i < 3; i++) {
//     console.log(test[i]);
// }
var exist = function(board, word) {
    if(board == null || board.length == 0 || board[0].length == 0) {
        return false;
    }
    let visited = [];
    for(let i = 0; i < board.length; i++) {
        let row = [];
        for(let j = 0; j < board[0].length; j++) {
            row.push(false);
        }
        visited.push(row);
    }
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(dfs(board, word, visited, i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};

let dfs = (board, word, visited, i, j , start) => {
    if(i < 0 || i >= board.length || j < 0 || j > board[0].length || word[start] != board[i][j] || visited[i][j]) {
        return false;
    }
    if(start == word.length - 1) {
        return true;
    }
    visited[i][j] = true;
    let ans = false;
    ans = dfs(board, word, visited, i + 1, j, start + 1)
    || dfs(board, word, visited, i - 1, j, start + 1)
    || dfs(board, word, visited, i, j + 1, start + 1)
    || dfs(board, word, visited, i, j - 1, start + 1);
    visited[i][j] = false;
    return ans;
}

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));
console.log(exist([["a","b"],["c","d"]], "abcd"));
