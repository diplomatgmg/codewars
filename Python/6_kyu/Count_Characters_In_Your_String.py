"""
https://www.codewars.com/kata/52efefcbcdf57161d4000091
"""

def count(string):
    # The function code should be here
    return {x: string.count(x) for x in string}