"""
https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
"""

def persistence(n):
    count = 0
    while len(str(n)) > 1:
        n = list(str(n))
        n = eval("*".join(n))
        count += 1
    return count