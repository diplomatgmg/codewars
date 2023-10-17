/*
https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9
*/

function rowWeights(array) {
    return array.reduce((acc, cur, index) => {
        index % 2 === 0 ? acc[0] += cur : acc[1] += cur
        return acc
    }, [0, 0])
}