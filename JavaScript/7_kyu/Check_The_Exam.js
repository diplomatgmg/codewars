/*
https://www.codewars.com/kata/5a3dd29055519e23ec000074
*/

function checkExam(array1, array2) {
    let result = 0;

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            result += 4;
        } else if (array1[i] !== array2[i] && array2[i] !== '') {
            result -= 1;
        }
    }

    return Math.max(0, result);
}