/*
https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
*/

function twoSort(s) {
    let first = s.sort()[0]
    return [...first].join('***')
}