function maxSequence(arr) {
    if (arr.length === 0) return 0;

    let maxSum = 0;
    let index = 0;
    let currentSum = 0;

    while (index < arr.length - 1) {
        for (let i = index; i < arr.length; i += 1) {
            currentSum += arr[i]

            if (currentSum > maxSum) {
                maxSum = currentSum
            }
        }
        index += 1;
        currentSum = 0;
    }

    return maxSum
}