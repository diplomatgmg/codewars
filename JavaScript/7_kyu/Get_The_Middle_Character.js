function getMiddle(s) {
    const middleIndex = s.length / 2

    if (Number.isInteger(middleIndex)) {
        return s.slice(middleIndex - 1, middleIndex + 1)
    } else {
        return s[Math.floor(middleIndex)]
    }
}