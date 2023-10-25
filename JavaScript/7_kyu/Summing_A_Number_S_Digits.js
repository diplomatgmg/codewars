/*
https://www.codewars.com/kata/52f3149496de55aded000410
*/

function sumDigits(number) {
  const stringAbsNumber = Math.abs(number).toString()
  return stringAbsNumber.split('').reduce((acc, cur) => acc + Number(cur), 0)
}