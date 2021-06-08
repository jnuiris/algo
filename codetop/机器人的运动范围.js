var movingCount = function(m, n, k) {
    let visited = [];
    for(let i = 0; i < m; i++) {
        let tmp = [];
        for(let j = 0; j < n; j++) {
            tmp.push(false);
        }
        visited.push(tmp);
    }
    return dfs(0, 0, m, n, k, visited);
};

let dfs = (i, j, m, n, k, visited) => {
    if(i < 0 || i >= m || j < 0 || j >= n || (Math.floor(i / 10) + i % 10 + Math.floor(j / 10) + j % 10) > k || visited[i][j])
        return 0;
    visited[i][j] = true;
    return dfs(i + 1, j, m, n, k, visited) + dfs(i - 1, j, m, n, k, visited)
    + dfs(i, j + 1, m, n, k, visited) + dfs(i, j - 1, m, n, k, visited) + 1;
}

console.log(movingCount(2, 3, 1));

// console.log(1 / 10);
