// givin an array 1 return how many duplicates in the array 2
let numJewelsInStones = function (J, S) {
  let counter = 0;
  for (let i = 0; i < J.length; i++) {
    for (let j = 0; j < S.length; j++) {
      if (J[i] === S[j]) {
        counter++;
      }
    }
  }
  return counter;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
