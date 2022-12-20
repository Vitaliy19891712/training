// Complete the function that accepts a string parameter,
// and reverses each word in the string.All spaces in the string should be retained.

function reverseWords(str) {
  let arr = str.split(" ");
  let arr2 = [];
  for (let word of arr) {
    let a = word.split("");
    let b = a.reverse();
    let c = b.join("");
    arr2.push(c);
  }
  return arr2.join(" ");
}
