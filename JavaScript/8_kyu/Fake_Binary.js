/*
https://www.codewars.com/kata/57eae65a4321032ce000002d
*/

function fakeBin(x){
  let result = ''
  for (const number of x) {
    if (number < 5) {
      result += '0'
    } else {
      result += '1'
    }
  }
  return result
}