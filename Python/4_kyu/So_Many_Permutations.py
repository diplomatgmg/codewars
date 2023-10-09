"""
https://www.codewars.com/kata/5254ca2719453dcc0b00027d
"""

import itertools

def permutations(s):
    return [''.join(string) for string in set(itertools.permutations(s))]