"""
https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
"""

def first_non_repeating_letter(string):
    for i in string:
        if string.lower().count(i.lower()) == 1:
            return i
    return ''