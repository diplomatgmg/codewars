"""
https://www.codewars.com/kata/51e056fe544cf36c410000fb
"""

import re


def top_3_words(text):
    words = re.findall(r"'*[a-zA-Z]+'*[a-zA-Z]*'*", text.lower())

    top = {}
    for word in words:
        if word in top:
            top[word] += 1
        else:
            top[word] = 1

    sort = sorted(top.items(), key=lambda x: x[1], reverse=True)
    return list(map(lambda x: x[0], sort))[:3]