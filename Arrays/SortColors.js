const sortColors = (n) => {
  let beg = 0,
    end = n.length - 1,
    i = 0,
    temp;
  while (i <= end) {
    if (n[i] === 0) {
      temp = n[beg];
      n[beg] = n[i];
      n[i] = temp;
      beg++;
      i++;
    } else if (n[i] === 2) {
      temp = n[end];
      n[end] = n[i];
      n[i] = temp;
      end--;
    } else {
      // we want to compare the last swapped element as such we do not advancing i
      i++;
    }
  }
  return n;
};
console.log(sortColors([1, 1, 0, 0, 2, 2]));
