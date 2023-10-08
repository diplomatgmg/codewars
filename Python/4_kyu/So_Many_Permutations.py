import itertools

def permutations(s):
    return [''.join(string) for string in set(itertools.permutations(s))]