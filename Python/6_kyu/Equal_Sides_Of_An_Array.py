"""
https://www.codewars.com/kata/5679aa472b8f57fb8c000047
"""

def find_even_index(arr):
    for index in range(len(arr) - 1):
        print(arr[:index], arr[index + 1:])
        if sum(arr[:index]) == sum(arr[index + 1:]):
            return index

    if sum(arr) - arr[-1] == 0:
        return len(arr) - 1

    return -1