/*
https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08
*/

multiplicationTable = function(size) {
    const result = [];

    for (let i = 1; i <= size; i += 1) {
        const temp = []
        for (let j = 0; j < size; j += 1) {
            temp.push(i + i * j)
        }
        result.push(temp)
    }
    
    return result
}