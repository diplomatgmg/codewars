/*
https://www.codewars.com/kata/5a97387e5ee396e70a00016d
*/

function pofi(n){
  const remainder = n % 4;

  if (remainder === 0) {
    return '1'
  } else if (remainder === 1) {
    return 'i'
  } else if (remainder === 2) {
    return '-1'
  } else {
    return '-i'
  }
}