"""
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
"""

def duplicate_count(s):
    return len([c for c in set(s.lower()) if s.lower().count(c)>1])