"""
https://www.codewars.com/kata/56269eb78ad2e4ced1000013
"""

def find_next_square(sq):
    # Return the next square if sq is a square, -1 otherwise
    return int((sq**0.5+1)**2) if sq**0.5 == int(sq**0.5) else -1