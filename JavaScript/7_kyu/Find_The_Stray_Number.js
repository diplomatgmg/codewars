/*
https://www.codewars.com/kata/57f609022f4d534f05000024
*/

function stray(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i]
    }
  }
}