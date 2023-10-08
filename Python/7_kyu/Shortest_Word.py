def find_short(s):
    return len(min(s.split(), key=lambda x: len(x)))