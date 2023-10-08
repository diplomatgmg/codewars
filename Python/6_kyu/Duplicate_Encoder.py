def duplicate_encode(word):
    result = ''
    word = word.lower()
    for sym in word:
        if word.count(sym) == 1:
            result += '('
        else:
            result += ')'
    return result