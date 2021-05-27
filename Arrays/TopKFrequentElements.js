var topKFrequent = function (nums, k) {
  let obj = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }

  let sortedKeys = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

  for (let i = 0; i < k; i++) {
    result.push(sortedKeys[i]);
  }

  return result;
};

var topKFrequent = function (nums, k) {
  let m = new Map(),
    res = [];
  nums.forEach((num) => m.set(num, m.get(num) + 1 || 1));
  console.log(m);

  for (let i = 0; i < k; i++) {
    let max = 0,
      maxNum;
    for (let [num, freq] of m) {
      if (freq > max && !res.includes(num)) {
        max = freq;
        maxNum = num;
      }
    }
    res.push(maxNum);
  }
  return res;
};

let arr = [1, 2, 2, 3, 3, 3];
console.log(topKFrequent(arr, 2));
