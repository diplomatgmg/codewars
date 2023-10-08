function shortcut (string) {
    let result = '';

    for (let letter of string) {
        if (letter !== 'e' && letter !== 'a' && letter !== 'i' && letter !== 'o' && letter !== 'u'){
            result += letter
        }
    }

    return result;
}