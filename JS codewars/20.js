// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of
//  the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and
// return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!"
// would become "Ths wbst s fr lsrs LL!".

//   Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let chars = str.split("");
  const vowel_list = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let arr = [];
  for (i = 0; i < chars.length; i++) {
    if (
      chars[i] !== "a" &&
      chars[i] !== "e" &&
      chars[i] !== "i" &&
      chars[i] !== "o" &&
      chars[i] !== "u" &&
      chars[i] !== "A" &&
      chars[i] !== "E" &&
      chars[i] !== "I" &&
      chars[i] !== "O" &&
      chars[i] !== "U"
    ) {
      arr.push(chars[i]);
    }
  }
  return arr.join("");
}
