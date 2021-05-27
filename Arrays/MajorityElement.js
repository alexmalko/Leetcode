var majorityElement = function (nums) {
  let obj = {};

  for (const num of nums) {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }

  // for (let i = 0; i < nums.length; i++) {
  //   if (obj[nums[i]]) {
  //     obj[nums[i]]++;
  //   } else {
  //     obj[nums[i]] = 1;
  //   }
  // }
  console.log(obj);
  for (const key in obj) {
    if (obj[key] > nums.length / 2) {
      return key;
    } else {
      continue;
    }
  }
};

let arr = [1, 2, 3, 4, 5, 5, 5, 5, 5];
console.log(majorityElement(arr));
