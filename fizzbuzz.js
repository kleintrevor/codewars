// JavaScript Documentlet number = 1;
let number=0;
 
while (number <=100){
      if (number % 3 === 0 && number % 5 === 0){
          console.log(`${number} is FizzBuzz`);}
      else if (number % 3 === 0){
          console.log(`${number} is Fizz`);}
      else if (number % 5 === 0){
          console.log(`${number} is Buzz`);}
      else{  
		  console.log(`${number}`);}
      number++;

}