def expanded_form(num):
    num, len_num = str(num), len(str(num)) - 1
    lst = []
    for n in range(len(num)):
        res = str(int(num[n]) * 10**len_num)
        len_num -= 1
        if res != '0':
            lst.append(res)
    return f'{" + ".join(lst)}'