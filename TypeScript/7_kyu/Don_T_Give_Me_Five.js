/*
https://www.codewars.com/kata/5813d19765d81c592200001a
*/

export function dontGiveMeFive (start: number, end: number): number {
  let count = 0

  for (let i = start; i <= end; i += 1) {
    if (!String(i).includes('5')) {
      count += 1
    }
  }

  return count
}