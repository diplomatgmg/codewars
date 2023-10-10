/*
https://www.codewars.com/kata/56b29582461215098d00000f
*/

function pipeFix(numbers){
  const result = [];

  const start = numbers[0]
  const end = numbers.at(-1)
 
  for (let i = start; i <= end; i += 1) {
    result.push(i)
  }
  
  return result
}