// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  let str = String(num);
  let sum = "";
  for (let i = 0, k = 1; i < str.length; i++, k++) {
    if (str[i] !== "0") {
      if (i === 0) {
        sum += `${str[i] * 10 ** (str.length - k)}`;
      } else {
        sum += ` + ${str[i] * 10 ** (str.length - k)}`;
      }
    } else continue;
  }

  return sum;
}
