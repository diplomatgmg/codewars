def narcissistic(value):
    return value == sum([int(num) ** len(str(value)) for num in str(value)])