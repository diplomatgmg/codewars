/*
https://www.codewars.com/kata/51f2b4448cadf20ed0000386
*/

function removeUrlAnchor(url){
    return url.replace(/#.+/g, '')
}