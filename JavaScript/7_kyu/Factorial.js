/*
https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc
*/

function factorial(n) {
    if (n < 0 || n > 12) {
      throw RangeError
    }
  
    if (n === 0) {
        return 1
    }

    return n * factorial(n - 1)
}