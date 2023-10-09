/*
https://www.codewars.com/kata/550554fd08b86f84fe000a58
*/

function inArray(array1, array2) {
    const result = new Set();

    for (const array1Element of array1) {
        for (const array2Element of array2) {
            if (array2Element.includes(array1Element)) {
                result.add(array1Element);
            }
        }
    }

    return [...result].sort();
}