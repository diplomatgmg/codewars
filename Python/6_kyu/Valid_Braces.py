"""
https://www.codewars.com/kata/5277c8a221e209d3f6000b56
"""

def validBraces(string):
    braces = {'(': ')', '[': ']', '{': '}'}
    result = []

    for brace in string:
        if brace in braces.keys():
            result.append(brace)
        else:
            if len(result) == 0 or brace != braces[result.pop()]:
                return False
    return not result