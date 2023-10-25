/*
https://www.codewars.com/kata/58d248c7012397a81800005c
*/

function cubeChecker(volume, side) {
  if (volume <= 0 || side <= 0) {
    return false;
  }
  const expectedVolume = side * side * side;

  return volume === expectedVolume;
}