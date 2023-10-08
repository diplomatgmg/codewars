def is_prime(num):
    res = []

    if num < 0:
        return False

    for i in range(1, round(num ** 0.5) + 1):

        if num % i == 0:
            res.append(num // i)
            res.append(i)
            if len(res) > 2:
                return False

    return len(set(res)) == 2