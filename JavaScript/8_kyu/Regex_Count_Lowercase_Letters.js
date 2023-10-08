function lowercaseCount(str){
  const lowerCaseLetters = str.match(/[a-z]/g) 
    return lowerCaseLetters ? lowerCaseLetters.length : 0
}