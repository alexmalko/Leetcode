function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log("i is equal to ", arr[i]);
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // console.log("before the swap " + arr[j] + " ---> " + arr);
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // console.log(`after the swap ${arr}`);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([2, 0, 2, 1, 1, 0]));
