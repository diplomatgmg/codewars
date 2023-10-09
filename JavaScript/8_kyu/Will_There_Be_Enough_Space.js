/*
https://www.codewars.com/kata/5875b200d520904a04000003
*/

function enough(cap, on, wait) {
    const max = cap - on - wait;

    return max < 0 ? Math.abs(max): 0
}