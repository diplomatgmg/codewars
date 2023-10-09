"""
https://www.codewars.com/kata/5861d28f124b35723e00005e
"""

def zero_fuel(distance_to_pump, mpg, fuel_left):
    return True if distance_to_pump / mpg <= fuel_left else False