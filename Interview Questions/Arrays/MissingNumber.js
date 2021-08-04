function missing(arr) {
  let set = new Set();
  arr.forEach((e) => {
    set.add(e);
  });

  for (let i = 0; i < arr.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
  return set;
}

console.log(missing([0, 1]));
