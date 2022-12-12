interface exerciseCalculator{
    periodLength:number,
    trainingDays:number,
    success:boolean,
    rating: number,
    ratingDescription:string,
    target:number,
    average:number,
}



export function exerciseCalculator(Exercice:Array<number>, target:number){
    let periodLength = Exercice.length;
    let trainingDays = Exercice.filter(days => days > 0).length;
    let average = Exercice.reduce((a,b)=>a+b, 0)/periodLength;
    let success = average >= target;
    let rating:number;
        if (success){
            rating = 3;
        } if (average >= target/2){
            rating = 2;}
            else{rating = 1;
            }
    let ratingDescription:string;
        if(success){
            ratingDescription = "Good job!";
        }if(average >= target/2){
            ratingDescription = "not too bad but could be better";
        }else{ratingDescription = "Bad business";
            }
    return{
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    }
    };
   
    console.log(exerciseCalculator([3, 0, 2, 4.5, 0, 3, 1],2));