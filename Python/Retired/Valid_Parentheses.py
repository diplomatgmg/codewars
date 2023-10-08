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