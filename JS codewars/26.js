// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmi1 = weight / (height * height);

  if (bmi1 <= 18.5) {
    return "Underweight";
  } else if (bmi1 <= 25) {
    return "Normal";
  } else if (bmi1 <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
