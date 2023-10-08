def wave(people):
    indx = 0

    res = []

    for sym in people:
        if sym.isalpha():
            letters = list(people)
            letters[indx] = sym.upper()
            res.append(''.join(letters))
        indx += 1

    return res