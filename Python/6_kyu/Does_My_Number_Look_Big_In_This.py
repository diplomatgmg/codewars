"""
https://www.codewars.com/kata/5287e858c6b5a9678200083c
"""

def narcissistic(value):
    return value == sum([int(num) ** len(str(value)) for num in str(value)])