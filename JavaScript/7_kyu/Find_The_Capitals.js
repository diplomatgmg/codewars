/*
https://www.codewars.com/kata/539ee3b6757843632d00026b
*/

var capitals = function (word) {
    return word.split('').reduce((acc, cur, index) => {
        return cur === cur.toUpperCase() ? acc.concat(index) : acc
    }, [])
};