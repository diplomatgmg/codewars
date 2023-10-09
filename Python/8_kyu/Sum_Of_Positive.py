"""
https://www.codewars.com/kata/5715eaedb436cf5606000381
"""

def positive_sum(arr):
    # Your code here
    return sum(filter(lambda x: x > 0, arr))