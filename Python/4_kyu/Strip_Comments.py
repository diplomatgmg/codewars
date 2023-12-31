"""
https://www.codewars.com/kata/51c8e37cee245da6b40000bd
"""

def strip_comments(strng, markers):
    parts = strng.split('\n')
    for marker in markers:
        parts = [part.split(marker)[0].rstrip() for part in parts]

    return '\n'.join(parts)