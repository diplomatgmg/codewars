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