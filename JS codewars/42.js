// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a st
// ring and a number within it.If the character code of any of the characters in the string matches
//  the number, you get a mini win.Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided 
// (win).If your total is more than or equal to(win), return 'Winner!'.Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.


function bingo(ticket, win){
let count = 0  
  
outer: for (let i = 0; i < ticket.length; i++){
  for (let k = 0; k < ticket[i][0].length; k++)
  if (ticket[i][0][k].charCodeAt(0) === ticket[i][1]) {
    count ++
    continue outer
  }
}

  if (count >= win) {
    return  'Winner!'
  } else {return  'Loser!'}
}