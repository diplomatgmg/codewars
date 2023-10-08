def sum_two_smallest_numbers(numbers: list):
    min = 10**100
    predmin = 10**100 + 1

    for num in range(len(numbers)):
        if numbers[num] < predmin:
            predmin = numbers[num]

    for num in range(len(numbers)):
        if numbers[num] < min and predmin != numbers[num]:
            min = numbers[num]




    return predmin + min