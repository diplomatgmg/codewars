"""
https://www.codewars.com/kata/5264d2b162488dc400000001
"""

def spin_words(sentence):
    return ' '.join(word[::-1] if len(word) > 4 else word for word in sentence.split())