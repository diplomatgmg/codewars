function uniqueInOrder(iterable) {
    const result = [];

    for (let i = 1; i <= iterable.length; i += 1) {
        if (iterable[i] !== iterable[i - 1]) {
            result.push(iterable[i - 1])
        }
    }

    return result;
}