def is_pangram(s):
    return 26 == len(set([i for i in s.lower() if i.isalpha()]))