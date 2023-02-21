// Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed (Just like the name of this Kata). Strings
// passed in will consist of only letters and spaces. Spaces will be included only when more
// than one word is present.

function spinWords(string) {
  // debugger
  let arr = string.split(" ");
  let qwe = arr.map((el) => {
    if (el.length >= 5) {
      let arrPol = [];
      el.split("").map((el) => arrPol.unshift(el));
      return arrPol.join("");
    } else return el;
  });
  return qwe.join(" ");
}
