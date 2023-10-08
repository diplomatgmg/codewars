function firstNonConsecutive (arr) {
    for (let i = 1; i <= arr.length; i += 1) {
        if (arr[i - 1] +1 !== arr[i] && arr[i] !== undefined) {
            return arr[i];
        }
    }
    return null;
}