/*
https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4
*/

function sortAnimal(animals) {
    const newAnimals = [...animals]
    return newAnimals.sort((a, b) => {
        if (a.numberOfLegs === b.numberOfLegs) {
            return a.name.localeCompare(b.name)
        }
        return a.numberOfLegs - b.numberOfLegs
    });
}