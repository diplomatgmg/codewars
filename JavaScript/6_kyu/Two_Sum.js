/*
https://www.codewars.com/kata/52c31f8e6605bcc646000082
*/

function twoSum(numbers, target) {

    for (let i = 0; i < numbers.length; i += 1) {
        for (let j = 0; j < numbers.length; j += 1) {
            const numJ = numbers[j];
            const numI = numbers[i];

            if (i !==  j  && numJ + numI === target) {
                return [i, j]
            }
        }
    }
}