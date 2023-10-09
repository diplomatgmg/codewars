"""
https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
"""

def duplicate_encode(word):
    result = ''
    word = word.lower()
    for sym in word:
        if word.count(sym) == 1:
            result += '('
        else:
            result += ')'
    return result