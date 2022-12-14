// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < vowels.length; k++) {
      if (str[i] === vowels[k]) {
        counter++;
      }
    }
  }

  return counter;
}
