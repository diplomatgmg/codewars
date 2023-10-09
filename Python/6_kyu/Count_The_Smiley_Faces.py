"""
https://www.codewars.com/kata/583203e6eb35d7980400002a
"""

def count_smileys(arr):
    new_arr = [i.replace('-', '').replace('~', '') for i in arr]
    return len([smile for smile in new_arr if smile in (':)', ':D', ';)', ';D')])