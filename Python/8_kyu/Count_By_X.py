"""
https://www.codewars.com/kata/5513795bd3fafb56c200049e
"""

def count_by(x, n):
    return [i for i in range(x, x * n + 1) if i % x == 0]