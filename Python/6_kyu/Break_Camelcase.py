def solution(s):
    res = ''
    for letter in range(len(s)):
        if s[letter].isupper():
            res += ' ' + s[letter]
        else:
            res += s[letter]


    return res