/*
https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
*/

function sumOfDifferences(arr) {
  const sortedArr = [...arr].sort((a, b) => b - a);

  let result = 0;

  for (let i = 1; i < sortedArr.length; i += 1) {
    result += Math.abs(sortedArr[i] - sortedArr[i - 1]);
  }

  return result;
}