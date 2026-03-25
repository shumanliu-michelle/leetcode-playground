export function equalPairs(grid: number[][]): number {
    const rows = new Map();
    let ans = 0;
    for (const row of grid) {
        const key = row.toString();
        rows.set(key, (rows.get(key) || 0) + 1);
    }
    for(let col = 0; col < grid.length; col++) {
        const key = [];
        for (const row of grid) {
            key.push(row[col]);
        }
        ans += (rows.get(key.toString()) || 0)
    }
    
    return ans;
};
