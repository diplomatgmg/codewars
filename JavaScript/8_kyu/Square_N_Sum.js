function squareSum(numbers) {
    let result = 0
    for (let index in numbers) {
        result += numbers[index]**2
    }
    return result
}