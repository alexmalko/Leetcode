function sequence(nums) {
  let set = new Set(nums);
  let longestStreak = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (set.has(currentNum + 1)) {
        currentStreak++;
        currentNum++;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  return longestStreak;
}

console.log(sequence([100, 100, 4, 200, 1, 3, 2]));
