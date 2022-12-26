// An isogram is a word that has no repeating letters, consecutive or non - consecutive.
// Implement a function that determines whether a string that contains only letters is an
// isogram.Assume the empty string is an isogram.Ignore letter case.

function isIsogram(str) {
  let str1 = str.toLowerCase();
  for (let i = 0; i < str1.length - 1; i++) {
    for (let k = i + 1; k < str1.length; k++) {
      if (str1[k] == str1[i]) {
        return false;
        break;
      }
    }
  }
  return true;
}
console.log(isIsogram("moOse"));
