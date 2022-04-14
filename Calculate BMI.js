/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
    let weightStat = '';
    let bmi = (weight / (height * height));
      
    if (bmi <= 18.5){
      return weightStat = "Underweight"
    } else if (bmi <= 25.0) {
      return weightStat = "Normal"
    } else if (bmi <= 30.0){
      return weightStat = "Overweight"
    } else if (bmi > 30) {
      return weightStat = "Obese"
    }else return weightStat = "";
    }