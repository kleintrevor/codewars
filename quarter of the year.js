/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

const quarterOf = (month) => {
    let qrtr = 0;
    if (month <= 3){
      return qrtr= 1;
    } else if (month <= 6){
      return qrtr = 2
    } else if (month <= 9){
      return qrtr = 3
    } else return qrtr = 4
  }