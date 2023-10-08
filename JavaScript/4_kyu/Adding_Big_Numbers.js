function add(a, b) {    
    const maxLength = a.length > b.length ? a.length + 1 : b.length + 1
    let result = new Array(maxLength)

    const arrayA = a.padStart(maxLength, '0').split('')
    const arrayB = b.padStart(maxLength, '0').split('')
    
    let nextPlus = 0;

    for (let i = maxLength - 1; i >= 0; i -= 1) {
        console.log(arrayA[i], arrayB[i]);
        const currentSum = parseInt(arrayA[i]) + parseInt(arrayB[i]) + nextPlus
        console.log('currentSum', currentSum);

        if (currentSum > 9) {
            result[i] = currentSum % 10
            nextPlus = 1;

        } else {
            nextPlus = 0;
            result[i] = currentSum
        }
    }

    if (result[0] === 0) {
        result = result.slice(1)
    }

    return result.join('');
}