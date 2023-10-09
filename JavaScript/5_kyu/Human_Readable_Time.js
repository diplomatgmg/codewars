/*
https://www.codewars.com/kata/52685f7382004e774f0001f7
*/

function humanReadable (seconds) {
    let hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    let minutes = String(Math.floor(seconds / 60 % 60)).padStart(2, '0');
    let newSeconds = String(seconds % 60).padStart(2, '0');
    
    return `${hours}:${minutes}:${newSeconds}`
}