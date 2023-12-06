/*
https://www.codewars.com/kata/59c633e7dcc4053512000073
*/

function solve(s) {
  const badLetters = 'aeiou';

  let strengthMax = 0;
  let currentMax = 0;

  for (const letter of s) {
    if (!badLetters.includes(letter)) {
      currentMax += letter.charCodeAt(0) - 96;

      if (currentMax > strengthMax) {
        strengthMax = currentMax;
      }
    } else {
      currentMax = 0;
    }
  }

  return strengthMax;
}