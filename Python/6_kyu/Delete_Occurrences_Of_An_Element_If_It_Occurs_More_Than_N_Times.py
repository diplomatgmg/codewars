def delete_nth(order: list,max_e):
    new_list = []

    for elem in order:
        if new_list.count(elem) < max_e:
            new_list.append(elem)
    return new_list