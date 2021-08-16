function task(tasks, n) {
  if (fruits == null || fruits.length == 0) {
    return 0;
  }
  let max = 1,
    map = new Map(),
    i = 0,
    j = 0;
  while (j < fruits.length) {
    if (map.size <= 2) {
      map.set(fruits[j], j++);
    }
    if (map.size > 2) {
      min = tree.length - 1;
      for (let [key, value] of map) {
        min = Math.min(min, value);
      }
      i = min + 1;
      map.delete(fruits[min]);
    }
  }

  return map;
}

console.log(task(["A", "A", "A", "B", "B", "B"], 2));
