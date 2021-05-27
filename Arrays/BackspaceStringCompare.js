var backspaceCompare = function (S, T) {
  let i = S.length - 1;
  let j = T.length - 1;
  let countS = 0;
  let countT = 0;
  while (i >= 0 || j >= 0) {
    // find the next valid letter in S
    while (i >= 0) {
      if (S[i] == "#") countS++;
      else {
        if (countS == 0) break;
        else countS--;
      }
      i--;
    }
    // find the next valid letter in T
    while (j >= 0) {
      if (T[j] == "#") countT++;
      else {
        if (countT == 0) break;
        else countT--;
      }
      j--;
    }
    if (S[i] != T[j]) return false;
    i--, j--;
  }
  return true;
  // Time Complexity: O(n)
  // Space Complexity: O(1)
};

console.log(backspaceCompare("ab#c", "ad#c"));
