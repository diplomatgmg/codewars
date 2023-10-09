/*
https://www.codewars.com/kata/54e6533c92449cc251001667
*/

function uniqueInOrder(iterable) {
    const result = [];

    for (let i = 1; i <= iterable.length; i += 1) {
        if (iterable[i] !== iterable[i - 1]) {
            result.push(iterable[i - 1])
        }
    }

    return result;
}