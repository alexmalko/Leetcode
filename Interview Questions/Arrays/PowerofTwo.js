function power(n) {
  let i = 1;
  while (i < n) {
    i *= 2;
  }
  return i === n;
}

console.log(power(5));
