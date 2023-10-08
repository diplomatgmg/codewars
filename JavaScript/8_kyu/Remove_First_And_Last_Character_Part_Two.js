function array(string) {
    const splitStr = string.split(',');

    if (splitStr.length <= 2) {
        return null
    }

    return splitStr.slice(1, -1).join(' ')}