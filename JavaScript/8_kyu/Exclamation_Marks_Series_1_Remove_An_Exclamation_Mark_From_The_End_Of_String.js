/*
https://www.codewars.com/kata/57fae964d80daa229d000126
*/

function remove(string) {
    return string.lastIndexOf('!') === string.length - 1 ?
        string.slice(0, string.length - 1) : string;
}