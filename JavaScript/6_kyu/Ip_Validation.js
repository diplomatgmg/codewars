function isValidIP(str) {
    const pattern = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/g;

    if (!str.match(pattern)) {
        return false;
    }

    for (const ipStr of str.split('.')) {
        const ipNum = parseInt(ipStr);

        if (ipStr.startsWith("0") && ipStr.length !== 1) {
            return false;
        }

        if (ipNum < 0 || ipNum > 255) {
			return false;
        }
    }

    return true;
}