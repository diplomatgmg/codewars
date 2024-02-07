/*
https://www.codewars.com/kata/5809b62808ad92e31b000031
*/

function calculate(str) {
  return eval(str.replace(/plus/g, '+').replace(/minus/g, '-')).toString();
}