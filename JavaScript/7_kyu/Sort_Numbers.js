/*
https://www.codewars.com/kata/5174a4c0f2769dd8b1000003
*/

function solution(nums){
  if (!Array.isArray(nums)) {
    return []
  }

  return nums.sort((a, b) => a - b )
}