/*
https://www.codewars.com/kata/5f70c883e10f9e0001c89673
*/

const flip = (d, a) => {
    if (d === "R") {
        return a.sort((a, b) => a - b);
    } else {
        return a.sort((a, b) => b - a);
    }
};