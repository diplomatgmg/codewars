/*
https://www.codewars.com/kata/58cb43f4256836ed95000f97
*/

function findDifference(a, b) {
  return Math.abs(a.reduce((res, curr) => res * curr) - b.reduce((res, curr) => res * curr))
}