function flickSwitch(arr){
    const result = [];

    let isFlick = false;

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === 'flick') {
            isFlick = !isFlick;
        }
        if (isFlick) {
            result.push(false)
        } else {
            result.push(true)
        }
    }

    return result
}