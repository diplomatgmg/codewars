/*
https://www.codewars.com/kata/559d2284b5bb6799e9000047
*/

function addLength(str) {
 return str.split(' ').map(word => `${word} ${word.length}`)
}