

 export function bmiCalculator(weight:number, height:number) {
    let bmi = weight / (height**2);
    
    if(bmi < 18.5){
      return "Underweight";
    }else if (bmi < 25){
      return "Normal";
    }else if (bmi < 30){
      return "Overweight";
    }else{
      return "Obese";
    }
  }


console.log(bmiCalculator(1.93, 91))