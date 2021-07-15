var longestCommonPrefix = function (arr) {
  if (arr.length === 0) return "";
  let prefix = "";
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j][i] !== arr[j + 1][i]) {
        return prefix;
      }
    }
    prefix += arr[0][i];
  }
  return prefix;
};

let arr = ["flower", "fly", "flight"];
console.log(longestCommonPrefix(arr));
