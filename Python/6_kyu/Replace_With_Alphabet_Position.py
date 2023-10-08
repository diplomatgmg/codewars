from string import ascii_lowercase

def alphabet_position(text):
    zipp = dict(zip(ascii_lowercase, map(str, range(1, 27))))
    letters = [zipp[letter] for letter in text.lower() if letter in ascii_lowercase]
    return ' '.join(letters)