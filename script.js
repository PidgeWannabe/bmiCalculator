function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    if(bmi < 18.5){
        alert("Your BMI is " + bmi + " so you are underweight.");
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        alert("Your BMI is " + bmi.toFixed(1) + " so you have a normal weight.");
    } else if(bmi > 24.9){
        alert("Your BMI is " + bmi.toFixed(1) + " so you are overweight.");
    }
    // toFixed() retroune une string un chiffre après la virgule
    return bmi.toFixed(1);
    // return interpretation;
}

bmiCalculator(prompt("What is your weight(kg, input only numbers separated by a period) ? "), prompt("What is your height(m, input only numbers separated by a period) ? "));
