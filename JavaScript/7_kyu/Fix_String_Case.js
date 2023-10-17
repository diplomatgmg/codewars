/*
https://www.codewars.com/kata/5b180e9fedaa564a7000009a
*/

function solve(s){
    const countUpperCaseLetters = s.match(/[A-Z]/g)
    if (countUpperCaseLetters && countUpperCaseLetters.length > s.length / 2) {
        return s.toUpperCase()
    }

    return s.toLowerCase()
}