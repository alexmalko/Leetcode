var gameOfLife = function (board) {
  let rows = board.length;
  let cols = board[0].length;

  // eight neighbors: n, ne, e, se, s, sw, w, nw
  const neighbors = [
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
  ];

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      let cellStatus = board[i][j];
      let neighborCount = 0;

      for (let [rDif, cDif] of neighbors) {
        let [nRow, nCol] = [i + rDif, j + cDif];

        // invalid board cell, off the board
        if (nRow < 0 || nCol < 0 || nRow >= rows || nCol >= cols) continue;

        // currently alive
        if (board[nRow][nCol] === -1 || board[nRow][nCol] === 1)
          neighborCount++;
      }

      // cell is currently LIVE, will become DEAD via over-population or under-population
      if (cellStatus === 1 && (neighborCount > 3 || neighborCount < 2))
        board[i][j] = -1;
      // cell is currently DEAD, can repopulate
      else if (cellStatus === 0 && neighborCount === 3) board[i][j] = 2;
    }
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      const cellStatus = board[i][j];
      if (cellStatus === -1) board[i][j] = 0;
      if (cellStatus === 2) board[i][j] = 1;
    }
  }

  return board;
};

let board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
console.log(gameOfLife(board));
