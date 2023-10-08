function orderWeight(strng) {
    const clearSlitString = strng.replace(/\s+/, " ").split(" ");
    clearSlitString.sort((a, b) => {
        const weightA = a.split("").reduce((sum, curr) => parseInt(sum) + parseInt(curr), 0);
        const weightB = b.split("").reduce((sum, curr) => parseInt(sum) + parseInt(curr), 0);

        if (weightA === weightB) {
            return a.localeCompare(b)
        }
        return weightA - weightB

    });

    return clearSlitString.join(" ");
}