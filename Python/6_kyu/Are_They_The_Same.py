"""
https://www.codewars.com/kata/550498447451fbbd7600041c
"""

def comp(array1, array2):
    if array1 is None or array2 is None:
        return False
    array1 = list(map(lambda x: x**2, array1))
    return sorted(array1) == sorted(array2)