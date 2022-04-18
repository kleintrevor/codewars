/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr (n, s) {
    let i = 0;
    let str = "";
    while (i < n){
     str = str.concat(s);
      i++;
    }
    console.log(str)
    return str;
  }
  