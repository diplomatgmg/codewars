function twoSort(s) {
    let first = s.sort()[0]
    return [...first].join('***')
}