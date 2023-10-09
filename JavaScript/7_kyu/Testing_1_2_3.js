/*
https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
*/

const number = function (array) {
    return array.map((value, index) => `${index + 1}: ${value}`)
};