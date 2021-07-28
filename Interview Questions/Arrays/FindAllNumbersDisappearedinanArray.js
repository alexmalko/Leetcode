var findDisappearedNumbers = function (nums) {
  let set = new Set(),
    result = [];
  nums.forEach((e) => {
    set.add(e);
  });

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(i + 1)) {
      result.push(i + 1);
    }
  }
  return result;
};

console.log(findDisappearedNumbers([2, 2, 1, 1]));
