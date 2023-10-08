def get_count(sentence):
    return len([i for i in sentence if i in ('a', 'e', 'i', 'o', 'u')])