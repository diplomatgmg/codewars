/*
https://www.codewars.com/kata/5547929140907378f9000039
*/

function shortcut (string) {
    let result = '';

    for (let letter of string) {
        if (letter !== 'e' && letter !== 'a' && letter !== 'i' && letter !== 'o' && letter !== 'u'){
            result += letter
        }
    }

    return result;
}