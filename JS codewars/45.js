// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array where an uppercase
// letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
  debugger;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let newStr = str.split("");
    if (newStr[i] !== " ") {
      newStr[i] = newStr[i].toUpperCase();
    } else continue;
    let newNewStr = newStr.join("");
    arr.push(newNewStr);
    //     arr.push(str.split("")[i].toUpperCase().join)
  }
  return arr;
}
console.log(wave("hello"));
