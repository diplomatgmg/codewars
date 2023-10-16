/*
https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
*/

function expressionMatter(a, b, c) {
  const options = [
    a + b + c,
    a * b * c,
    (a + b) * c,
    a * (b + c)
  ];
  
  return Math.max(...options);
}