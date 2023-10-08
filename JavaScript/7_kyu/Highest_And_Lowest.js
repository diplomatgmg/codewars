function highAndLow(numbers){
    let integerArray = numbers.split(' ').map(n => parseInt(n))
    return `${Math.max(...integerArray)} ${Math.min(...integerArray)}`
}