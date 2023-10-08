// write the function isAnagram
var isAnagram = function(test, original) {
  const sortTest = test.toLowerCase().split('').sort().join('')
  const sortOriginal = original.toLowerCase().split('').sort().join('')
  return  sortTest === sortOriginal
};