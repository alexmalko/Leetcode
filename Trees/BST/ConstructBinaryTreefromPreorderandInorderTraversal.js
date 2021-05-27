let x = 5;
let y = 10;
let t;

console.log("x: " + x, "y: " + y);

var buildTree = function (x, y) {
  t = x;
  x = y;
  y = t;
  console.log("x: " + x, "y: " + y);
};

buildTree(x, y);
