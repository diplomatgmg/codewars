/*
https://www.codewars.com/kata/541c8630095125aba6000c00
*/

function digitalRoot(n) {
    let digitsArray = String(n).split("");

    while (digitsArray.length !== 1) {
        let reduceArray = digitsArray.reduce((a, b) => parseInt(a) + parseInt(b))
        digitsArray = [...String(reduceArray)]
    }

    return parseInt(digitsArray[0]);
}