function longest(s) {
  let set = new Set(),
    left = 0,
    right = 0,
    maxSubstringLength = 0;

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      maxSubstringLength = Math.max(maxSubstringLength, set.size);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }
  return maxSubstringLength;
}

console.log(longest("abcabcbb"));
