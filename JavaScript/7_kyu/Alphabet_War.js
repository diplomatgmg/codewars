/*
https://www.codewars.com/kata/59377c53e66267c8f6000027
*/

const power = {
  w: 4,
  p: 3,
  b: 2,
  s: 1,
  m: -4,
  q: -3,
  d: -2,
  z: -1,
};

function alphabetWar(fight) {
  const result = fight.split('').reduce((acc, cur) => acc + (power[cur] || 0), 0);

  console.log(result);

  if (result > 0) {
    return 'Left side wins!';
  }

  if (result < 0) {
    return 'Right side wins!';
  }

  return "Let's fight again!";
}