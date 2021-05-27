var numIslands = function (grid) {
  if (grid === null || grid.length === 0) return 0;

  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count += BFS(grid, i, j);
      }
    }
  }
  return count;

  function BFS(grid, i, j) {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[i].length ||
      grid[i][j] === "0"
    ) {
      return 0;
    }

    grid[i][j] = "0";

    BFS(grid, i + 1, j);
    BFS(grid, i - 1, j);
    BFS(grid, i, j + 1);
    BFS(grid, i, j - 1);

    return 1;
  }
};

let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid));
