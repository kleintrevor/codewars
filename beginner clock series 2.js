//Clock shows h hours, m minutes and s seconds after midnight.
//Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    const ms = 1000;
    let msH = ((h * 60 * 60)* ms);
    let msM = ((m * 60) * ms);
    let msS = (s * ms)
    return msH + msM + msS;
  }