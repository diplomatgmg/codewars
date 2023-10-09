"""
https://www.codewars.com/kata/55983863da40caa2c900004e
"""

def next_bigger(n):
    # if the number is the same as the reverse
    if str(n) == ''.join(sorted(str(n))[::-1]):
        # return -1 as it doesn't change
        return -1

    # keep a new temp variable
    a = n

    # loop forever
    while True:
        # increment the number
        a += 1

        # we have a match!
        if sorted(str(a)) == sorted(str(n)):
            # return the answer!
            return a