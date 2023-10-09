/*
https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
*/

var countSheep = function (num){
    let result = ''
    for (let i = 1; i <= num; i += 1) {
        result += `${i} sheep...`
    }
    return result
}