/*
https://www.codewars.com/kata/5a360620f28b82a711000047
*/

function defineSuit(card) {
  switch (card.at(-1)) {
       case '♣':
    return 'clubs'
             case '♦':
    return 'diamonds'
             case '♥':
    return 'hearts'
             case '♠':
    return 'spades'
  }
}