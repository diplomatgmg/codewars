"""
https://www.codewars.com/kata/56a1c074f87bc2201200002e
"""

def smaller(arr):
    res = []

    for num in range(len(arr)):
        count = 0
        for num2 in arr[num:]:
            if num2 < arr[num]:
                count += 1
        res.append(count)

    return res