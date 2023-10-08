function digitalRoot(n) {
    let digitsArray = String(n).split("");

    while (digitsArray.length !== 1) {
        let reduceArray = digitsArray.reduce((a, b) => parseInt(a) + parseInt(b))
        digitsArray = [...String(reduceArray)]
    }

    return parseInt(digitsArray[0]);
}