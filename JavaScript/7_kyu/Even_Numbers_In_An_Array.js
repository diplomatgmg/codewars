/*
https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c
*/

function evenNumbers(array, number) {
  const unuqueArrayElements = [...new Set(array)];
  return array
    .reverse()
    .filter((n) => n % 2 === 0).slice(0, number)
    .reverse();
}