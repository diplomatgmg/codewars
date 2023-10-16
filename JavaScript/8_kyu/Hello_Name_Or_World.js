/*
https://www.codewars.com/kata/57e3f79c9cb119374600046b
*/

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}
function hello(name) {
    if (!name) {
        name = 'World'
    }

    return `Hello, ${capitalize(name)}!`
}