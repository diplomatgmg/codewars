"""
https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
"""

def sort_array(source_array):
    new = sorted(filter(lambda x: x % 2 != 0, source_array))

    index = 0
    for num in range(len(source_array)):
        if source_array[num] % 2 != 0:
            source_array[num] = new[index]
            index += 1

    return source_array