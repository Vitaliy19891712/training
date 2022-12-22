// Take an array and remove every second element from the array.
// Always keep the first element and start removing with the next element.
// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  for (i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
}
