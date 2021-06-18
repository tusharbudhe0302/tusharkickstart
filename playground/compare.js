var getFood = function(grid) {
    
    const n = grid.length
    const m = grid[0].length
    const DIR = [[0,1],[0,-1], [1,0], [-1, 0]]
    const queue = []

    for(let r = 0; r < n; r++) {
        for(let c = 0; c < m; c++) {
            if(grid[r][c] === '#') {
                queue.push([r,c,0])
            }
        }
    }
    
    while(queue.length) {
        const curr = queue.shift()
        
        for(let d = 0; d < DIR.length; d++) {
            const x = curr[0] + DIR[d][0]
            const y = curr[1] + DIR[d][1]
            const distance = curr[2]
            if(isFeasible(grid, x, y, n, m)) {
                if(grid[x][y] === "*") {
                   return distance + 1
                } else {
                   grid[x][y] = "X"
                   queue.push([x,y, distance + 1])
                }
            }
        }
    }
    return -1
};

function isFeasible(grid, r,c,n,m) {
	return r >= 0 && r < n && c >= 0 && c < m && grid[r][c] !== "X"
}
console.log(getFood([
    ["X", "X", "X", "X", "X", "X"],
    ["X", "*", "O", "O", "O", "X"],
    ["X", "O", "O", "#", "O", "X"],
    ["X", "X", "X", "X", "X", "X"]
]));