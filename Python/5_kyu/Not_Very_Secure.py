from string import ascii_letters, digits

def alphanumeric(password):
    d = 0
    l = 0
    for elem in password:
        if elem in digits:
            d = 1
        elif elem in ascii_letters:
            l = 1
        else:
            return False
    return d == 1 or l == 1