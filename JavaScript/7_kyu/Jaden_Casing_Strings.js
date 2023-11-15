/*
https://www.codewars.com/kata/5390bac347d09b7da40006f6
*/

String.prototype.toJadenCase = function () {
  return this
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};