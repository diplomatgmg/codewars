"""
https://www.codewars.com/kata/55c04b4cc56a697bb0000048
"""

def scramble(s1, s2):
    for i in set(s2):
        if s1.count(i) < s2.count(i):
            return False
    return True