// Write a function to convert a name into initials.This kata strictly
// takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

function abbrevName(name) {
  let secondWord;
  for (let i = 1; i < name.length; i++)
    if (name[i - 1] == " ") {
      secondWord = name[i];
    }

  return `${name[0].toUpperCase()}.${secondWord.toUpperCase()}`;
}
console.log(abbrevName("Sam Harris"));
