/*
https://www.codewars.com/kata/580a4734d6df748060000045
*/

function isSortedAndHow(array) {
  const joinArray = array.join('');
  const sortedArray = [...array].sort((a, b) => a - b);

  if (joinArray === sortedArray.join('')) {
    return 'yes, ascending';
  }

  if (joinArray === sortedArray.reverse().join('')) {
    return 'yes, descending';
  }

  return 'no';
}