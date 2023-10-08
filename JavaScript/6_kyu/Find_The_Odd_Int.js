function findOdd(A) {
    const count = {};

    for (const number of A) {
        if (number in count) {
            count[number] += 1;
        } else {
            count[number] = 1;
        }
    }

    for (const [key, value] of Object.entries(count)) {
        if (value % 2 === 1) {
            return parseInt(key);
        }
    }
}