def pig_it(text):
    return ' '.join(elem[1:] + elem[0] + 'ay' if elem.isalpha() else elem for elem in text.split())