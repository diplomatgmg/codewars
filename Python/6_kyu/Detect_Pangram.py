"""
https://www.codewars.com/kata/545cedaa9943f7fe7b000048
"""

def is_pangram(s):
    return 26 == len(set([i for i in s.lower() if i.isalpha()]))