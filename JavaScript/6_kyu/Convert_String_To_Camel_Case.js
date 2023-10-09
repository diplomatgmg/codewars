/*
https://www.codewars.com/kata/517abf86da9663f1d2000003
*/

function toCamelCase(str) {
    if (str.length === 0) {
        return "";
    }
    let splitString = str.match(/[a-zA-Z]+/g);

    for (let i = 1; i < splitString.length; i += 1) {
        splitString[i] = splitString[i][0].toUpperCase() + splitString[i].slice(1).toLowerCase();
    }

    return splitString.join("");
}