"""
https://www.codewars.com/kata/585d7d5adb20cf33cb000235
"""

def find_uniq(arr):
    return [i for i in set(arr) if arr.count(i) == 1][0]