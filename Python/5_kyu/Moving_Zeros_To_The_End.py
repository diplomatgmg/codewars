"""
https://www.codewars.com/kata/52597aa56021e91c93000cb0
"""

def move_zeros(lst):
    for _ in range(len(lst)):
        for num in range(len(lst) - 1):
            if lst[num] == 0:
                temp = lst[num + 1]
                lst[num + 1] = lst[num]
                lst[num] = temp
    return lst