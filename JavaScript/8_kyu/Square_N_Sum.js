/*
https://www.codewars.com/kata/515e271a311df0350d00000f
*/

function squareSum(numbers) {
    let result = 0
    for (let index in numbers) {
        result += numbers[index]**2
    }
    return result
}