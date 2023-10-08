def rgb(r, g, b):
    min_max = lambda x: max(0, min(x, 255))

    return '{:02X}{:02X}{:02X}'.format(min_max(r), min_max(g), min_max(b))