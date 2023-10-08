var solution = function (firstArray, secondArray) {
    const arrayLength = firstArray.length;
    let sum = 0;

    for (let i = 0; i < arrayLength; i += 1) {
        sum += Math.abs(firstArray[i] - secondArray[i]) ** 2;
    }

    return (sum / arrayLength);
};