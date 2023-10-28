/*
https://www.codewars.com/kata/65128732b5aff40032a3d8f0
*/

function neutralise(s1, s2) {
  let result = '';

  for (let i = 0; i < s1.length; i += 1) {
    if (s1[i] !== s2[i]) {
      result += '0';
    } else if (s1[i] === '-') {
      result += '-'
    } else {
      result += '+'
    }
  }

  return result;
}