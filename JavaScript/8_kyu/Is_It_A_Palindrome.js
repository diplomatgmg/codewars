/*
https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
*/

function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
}