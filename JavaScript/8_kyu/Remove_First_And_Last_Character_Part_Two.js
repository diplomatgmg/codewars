/*
https://www.codewars.com/kata/570597e258b58f6edc00230d
*/

function array(string) {
    const splitStr = string.split(',');

    if (splitStr.length <= 2) {
        return null
    }

    return splitStr.slice(1, -1).join(' ')}