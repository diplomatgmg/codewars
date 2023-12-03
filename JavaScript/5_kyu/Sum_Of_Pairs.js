/*
https://www.codewars.com/kata/54d81488b981293527000c8f
*/

function sumPairs(ints, s) {
  const targets = new Set();

  for (let i = 0; i < ints.length; i += 1) {
    const target = s - ints[i];

    if (targets.has(target)) {
      return [target, ints[i]];
    }

    targets.add(ints[i]);
  }

  return undefined;
}