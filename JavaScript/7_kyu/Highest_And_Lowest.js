/*
https://www.codewars.com/kata/554b4ac871d6813a03000035
*/

function highAndLow(numbers){
    let integerArray = numbers.split(' ').map(n => parseInt(n))
    return `${Math.max(...integerArray)} ${Math.min(...integerArray)}`
}