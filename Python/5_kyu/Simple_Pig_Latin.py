"""
https://www.codewars.com/kata/520b9d2ad5c005041100000f
"""

def pig_it(text):
    return ' '.join(elem[1:] + elem[0] + 'ay' if elem.isalpha() else elem for elem in text.split())