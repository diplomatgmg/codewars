"""
https://www.codewars.com/kata/554ca54ffa7d91b236000023
"""

def delete_nth(order: list,max_e):
    new_list = []

    for elem in order:
        if new_list.count(elem) < max_e:
            new_list.append(elem)
    return new_list