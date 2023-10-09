/*
https://www.codewars.com/kata/5226eb40316b56c8d500030f
*/

function pascalsTriangle(num) {
    const matrix = [];

    for (let i = 0; i < num; i += 1) {
        if (i === 0) {
            matrix.push([1]);
            continue;
        } else if (i === 1) {
            matrix.push([1, 1]);
            continue;
        }
        const row = [];

        for (let j = 0; j <= i; j += 1) {
            if (j === 0 || j === i) {
                row.push(1);
                continue;
            }
            row.push(matrix[i - 1][j - 1] + matrix[i - 1][j])
        }

        matrix.push(row)

    }
    return matrix.flat()
}