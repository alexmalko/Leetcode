var fourSumCount = function (A, B, C, D) {
  if (!A || !B || !C || !D) return [];
  // cuadratic solution... counter, reduced from sum_of_two
  let memory = new Map();
  for (let i of A) {
    for (let j of B) {
      memory.set(-(i + j), memory.get(-(i + j)) + 1 || 1);
    }
  }
  console.log(memory);
  // look in the map if we have seen the complement of this sum
  let output = 0;
  for (let m of C) {
    for (let n of D) {
      output += memory.has(m + n) ? memory.get(m + n) : 0;
    }
  }
  return output;
};

let A = [1, 2];
let B = [-2, -1];
let C = [-1, 2];
let D = [0, 2];

console.log(fourSumCount(A, B, C, D));
