/*
https://www.codewars.com/kata/5ac6932b2f317b96980000ca
*/

function minValue(values) {
  const uniqueArrayElements = [...new Set(values)];
  const sortedArray = uniqueArrayElements.sort();
  return Number(sortedArray.join(''));
}