function exponent_rec(base, exponent) {
  if (exponent == 1) return base;
  return exponent_rec(base, exponent - 1) * base;
}

console.log(exponent_rec(2, 3));
