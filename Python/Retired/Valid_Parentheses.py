"""
https://www.codewars.com/kata/52774a314c2333f0a7000688
"""

def valid_parentheses(string):
    cnt = 0
    for s in string:
        if s == '(':
            cnt += 1

        elif s == ')':
            cnt -= 1
        if cnt <0:
            return False

    return cnt == 0