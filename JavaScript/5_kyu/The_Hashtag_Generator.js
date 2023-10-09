/*
https://www.codewars.com/kata/52449b062fb80683ec000024
*/

function generateHashtag (str) {
    if (str.trim().length === 0 || !str) {
        return false
    }

    let result = '#'


    let splitStr = str.trim().replace(/\s+/g, ' ').split(' ')
    let splitStrUpperCase = splitStr.map(str => str[0].toUpperCase() + str.slice(1))

    result += splitStrUpperCase.join('')

    if (result.length > 140) {
        return false
    }

    return result
}