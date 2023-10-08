function remove(string) {
    return string.lastIndexOf('!') === string.length - 1 ?
        string.slice(0, string.length - 1) : string;
}