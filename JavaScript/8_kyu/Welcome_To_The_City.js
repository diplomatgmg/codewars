/*
https://www.codewars.com/kata/5302d846be2a9189af0001e4
*/

function sayHello( name, city, state ) {
    const [firstName, lastName] = name
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}