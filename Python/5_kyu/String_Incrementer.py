"""
https://www.codewars.com/kata/54a91a4883a7de5d7800009c
"""

def increment_string(strng: str):
    letters = ''
    nums = ''
    for elem in reversed(range(len(strng))):
        if strng[elem].isdigit():
            nums = str(strng[elem]) + nums
        else:
            letters += strng[:elem+1]
            break

    len_n = len(nums)
    if nums:
        nums = str(int(nums) + 1)
    else:
        nums = '1'

    while len_n > len(nums):
        nums = '0' + nums




    return letters + nums





print(increment_string('foo'))