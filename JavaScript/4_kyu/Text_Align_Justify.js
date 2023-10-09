/*
https://www.codewars.com/kata/537e18b6147aa838f600001b
*/

function justify(text, width) {
    let equalWidth = [];
    const splitText = text.split(" ");
    let currentWidth = 0;
    let currentRow = [];

    for (let i = 0; i < splitText.length; i += 1) {
        const wordLength = splitText[i].length;

        if (currentWidth + wordLength <= width) {
            currentRow.push(splitText[i]);
            currentWidth += wordLength + 1;

            if (i + 1 === splitText.length) {
                equalWidth.push(currentRow.join(" "));
            }
        } else {
            equalWidth.push(currentRow);
            i -= 1;
            currentRow = [];
            currentWidth = 0;
        }
    }

    const justifyResult = [];
    const equalWidthWithoutLastRow = equalWidth.slice(0, equalWidth.length - 1);

    for (const row of equalWidthWithoutLastRow) {
        if (row.length === 1) {
            justifyResult.push(row[0]);
            continue;
        }

        const totalWordsLength = row.reduce((acc, word) => acc + word.length, 0);
        const totalSpacesNeeded = width - totalWordsLength;
        const spacesBetweenWords = Math.floor(totalSpacesNeeded / (row.length - 1));
        const extraSpaces = totalSpacesNeeded % (row.length - 1);

        let justifiedRow = row[0];

        for (let j = 1; j < row.length; j++) {
            const spacesToAdd = j <= extraSpaces ? spacesBetweenWords + 1 : spacesBetweenWords;
            justifiedRow += ' '.repeat(spacesToAdd) + row[j];
        }

        justifyResult.push(justifiedRow);
    }

    if (Array.isArray(equalWidth[equalWidth.length - 1])) {
        justifyResult.push(equalWidth[equalWidth.length - 1].join(" "));
    } else {
        justifyResult.push(equalWidth[equalWidth.length - 1]);
    }

    return justifyResult.join("\n");
}