function prefix(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
}

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

console.log(prefix(["flower", "flow", "flight"]));

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
