/*
https://www.codewars.com/kata/56a946cd7bd95ccab2000055
*/

function lowercaseCount(str){
  const lowerCaseLetters = str.match(/[a-z]/g) 
    return lowerCaseLetters ? lowerCaseLetters.length : 0
}