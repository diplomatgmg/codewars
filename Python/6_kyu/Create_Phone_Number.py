def create_phone_number(n):
    n = list(map(str, n))
    number = '('
    for i in range(3):
        number += n[i]
    number += ') '
    for i in range(3, 6):
        number += n[i]
    number += '-'
    for i in range(6, 10):
        number += n[i]
    return number