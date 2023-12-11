/*
https://www.codewars.com/kata/55908aad6620c066bc00002a
*/

function XO(str) {
  const countX = (str.match(/x/gi) || []).length;
  const countO = (str.match(/o/gi) || []).length;

  return countO === countX;
}