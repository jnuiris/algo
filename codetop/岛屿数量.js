//  看了一下思路，希望能顺利写出来

// var numIslands = function(grid) {
//     let count = 0;
//     let dfs = function (grid, i, j) {
//         let flag = 0;
//         for(let m = 0; m < i; m++) {
//             for(let n = 0; n < j; n++) {
//                 if(grid[m][n] == '1') {
//                     count++;
//                     flag = 1;
//                     break;
//                 }
//             }
//             if(flag == 1)
//                 break;
//         }
//
//     }
//     dfs(grid, 0, 0);
// };

// for(let i = 0; i < 10; i++) {
//     let flag = 0;
//     for(let j = 0; j < 10; j++) {
//         console.log(j);
//         if(j == 1) {
//             flag = 1;
//             break;
//         }
//     }
//     if(flag == 1)
//         break;
//     console.log(i);
// }

//  又看了一眼答案，这次应该会写了吧
let dfs = (grid, i, j) => {
    let r = grid.length;
    let c = grid[0].length;

    grid[i][j] = '0';

    if(i - 1 >= 0 && grid[i - 1][j] == '1') {
        dfs(grid, i - 1, j);
    }
    if(i + 1 < r && grid[i + 1][j] == '1') {
        dfs(grid, i + 1, j);
    }
    if(j - 1 >= 0 && grid[i][j - 1] == '1') {
        dfs(grid, i, j - 1);
    }
    if(j + 1 < c && grid[i][j + 1] == '1') {
        dfs(grid, i, j + 1);
    }
}

var numIslands = function(grid) {
    // 岛屿数量
    let count = 0;

    let r = grid.length;
    if(r == 0)
        return 0;
    let c = grid[0].length;

    for(let i = 0; i < r; i++) {
        for(let j = 0; j < c; j++) {
            if(grid[i][j] == '1') {
                count += 1;
                dfs(grid, i, j);
            }
        }
    }
    return count;
};

// console.log(numIslands([
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
// ]))

console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]))
