"""
https://www.codewars.com/kata/55c45be3b2079eccff00010f
"""

def order(sentence):
  splited = sentence.split()
  new_list = []

  for num in range(1, 10):
    for elem in splited:

          print(num)
          if str(num) in elem:
              print(elem)
              new_list.append(elem)
  return ' '.join(new_list)