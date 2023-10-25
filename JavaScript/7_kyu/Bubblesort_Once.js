/*
https://www.codewars.com/kata/56b97b776ffcea598a0006f2
*/

function bubblesortOnce(a) {
  const copyArray = [...a]
  for (let i = 1; i < copyArray.length; i += 1) {
    if (copyArray[i] < copyArray[i - 1]) {
      [copyArray[i], copyArray[i - 1]] = [copyArray[i - 1], copyArray[i]]
    }
  }
  return copyArray
}