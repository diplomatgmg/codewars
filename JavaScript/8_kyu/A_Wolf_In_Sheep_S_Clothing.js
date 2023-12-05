/*
https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
*/

function warnTheSheep(queue) {
  const isWolf = queue[queue.length - 1] === 'wolf';

  if (isWolf) {
    return 'Pls go away and stop eating my sheep';
  }

  const sheepIndex = queue.length - (queue.indexOf('wolf') + 1);

  return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
}