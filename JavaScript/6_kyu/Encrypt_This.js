var encryptThis = function (text) {
    const splitText = text.split(" ");
    const splitResult = [];

    for (const textElement of splitText) {
        const firstLetterCode = textElement.charCodeAt(0);
        let codeWord = '';

        if (textElement.length > 1) {
            const splitWord = textElement.split("").slice(1);
            const tempLetter = splitWord[0];
            splitWord[0] = splitWord[splitWord.length - 1];
            splitWord[splitWord.length - 1] = tempLetter;
            console.log(splitWord);
            codeWord = splitWord.join('')
        }
        splitResult.push(firstLetterCode + codeWord)

    }

    return splitResult.join(" ");
};