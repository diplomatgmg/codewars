"""
https://www.codewars.com/kata/5526fc09a1bbd946250002dc
"""

def find_outlier(integers: list[int]):
    a = list((i for i in integers if i % 2 == 0))
    b = list((i for i in integers if i % 2 == 1))
    return min(a) if len(a) < len(b) else min(b)