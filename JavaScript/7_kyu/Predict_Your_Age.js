/*
https://www.codewars.com/kata/5aff237c578a14752d0035ae
*/

function predictAge(...age){
  const sumMultiplyAge = age.map(x => x ** 2).reduce((acc, cur) => acc + cur, 0)
  return Math.floor(Math.sqrt(sumMultiplyAge) / 2)
}