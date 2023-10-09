/*
https://www.codewars.com/kata/55911ef14065454c75000062
*/

function multiply(a, b) {
    const arr1 = a.split('').map(Number).reverse();
    const arr2 = b.split('').map(Number).reverse();

    let result = new Array(arr1.length + arr2.length).fill(0);

    for (let i = 0; i < arr1.length; i += 1) {
        for (let j = 0; j < arr2.length; j += 1) {
            result[i + j] += arr1[i] * arr2[[j]]
        }
    }

    for (let i = 0; i < result.length - 1; i += 1) {
        result[i + 1] += Math.floor(result[i] / 10)
        result[i] = result[i] % 10
    }

    while (result.at(-1) === 0) {
        result.pop()
    }

    return result.reverse().join('') || '0'
}