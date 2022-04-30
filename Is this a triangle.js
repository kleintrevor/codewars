/*Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

function isTriangle(a,b,c){ 
//Heron's formula
let area = (0.25 * Math.sqrt((a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c)));  
 
 //triangle inequality theorem
  if ((a + b < c) || (a + c < b) || (b + c < a)) {
    return false;
   } else if (area > 0){
      return true;
      } else {return false}
}