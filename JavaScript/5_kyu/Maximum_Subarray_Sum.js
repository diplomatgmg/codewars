/*
https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
*/

var maxSequence = function (arr) {
  let max = 0;

  let currentMax = 0;
  let lastIndex = 0;

  while (lastIndex < arr.length) {
    for (let i = lastIndex; i < arr.length; i += 1) {
      currentMax += arr[i];
      max = Math.max(max, currentMax)
    }
    lastIndex += 1;
    currentMax = 0;
  }
  return max
};