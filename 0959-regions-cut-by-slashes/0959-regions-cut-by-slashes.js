/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    const n = grid.length;
    const parent = new Array(4 * n * n).fill(0).map((_, i) => i);
    
    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    
    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            parent[rootX] = rootY;
        }
    }
    
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            const index = 4 * (i * n + j);
            const char = grid[i][j];
            if (char === ' ') {
                union(index, index + 1);
                union(index + 1, index + 2);
                union(index + 2, index + 3);
            } else if (char === '/') {
                union(index, index + 3);
                union(index + 1, index + 2);
            } else if (char === '\\') {
                union(index, index + 1);
                union(index + 2, index + 3);
            }
            
            if (j + 1 < n) {
                union(index + 1, 4 * (i * n + j + 1) + 3);
            }
            if (i + 1 < n) {
                union(index + 2, 4 * ((i + 1) * n + j));
            }
        }
    }
    
    let regions = 0;
    for (let i = 0; i < 4 * n * n; ++i) {
        if (find(i) === i) {
            ++regions;
        }
    }
    
    return regions;
};