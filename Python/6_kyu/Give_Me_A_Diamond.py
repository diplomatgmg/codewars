def diamond(n):
    s = ''
    if n == 1:
        return '*\n'

    if n % 2 == 0:
        return None
    if n < 0:
        return None

    star = 1

    space = n // 2
    for num in range(1, n +1):
        if num < n // 2 +1:
            s += (' ' * space + '*' * star) + '\n'
            star += 2
            space -= 1

        if num == n // 2:
            s += ('*' * n) + '\n'
            space += 1

        if num > n // 2 + 1:
            star -= 2
            s += (' ' * space + '*' * star) + '\n'
            space += 1

    return s
