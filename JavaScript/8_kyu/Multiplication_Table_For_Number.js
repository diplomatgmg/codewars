/*
https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
*/

function multiTable(number) {
    let result = '';

    for (let i = 1; i <= 10; i++) {
        result += `${i} * ${number} = ${i * number}\n`
    }

    return result.trim()
}