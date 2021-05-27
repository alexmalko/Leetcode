var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  const stack = [0];

  while (stack.length) {
    const num = stack.pop();
    if (visited.has(num)) continue;
    visited.add(num);
    for (let next of rooms[num]) stack.push(next);
  }
  console.log(visited);
};

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
