/*
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
*/

function accum(s) {
    let result = [];

    for (let i = 0, l = s.length; i < l; i++) {
        result.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
    }

    return result.join('-')
}