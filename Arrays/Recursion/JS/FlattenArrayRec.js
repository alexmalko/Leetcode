function flatten(data) {
  if (!Array.isArray(data)) return [data];
  let allElements = [];
  data.forEach((el) => {
    let flat = flatten(el);
    allElements.push(...flat);
  });
  return allElements;
}

console.log(flatten([1, 2, [3, 4], [[[5]]]]));
