"""
https://www.codewars.com/kata/5208f99aee097e6552000148
"""

def solution(s):
    res = ''
    for letter in range(len(s)):
        if s[letter].isupper():
            res += ' ' + s[letter]
        else:
            res += s[letter]


    return res