/*
https://www.codewars.com/kata/539de388a540db7fec000642
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    const newCurrentDate = new Date(currentDate)
    const newExpirationDate = new Date(expirationDate)

    return enteredCode === correctCode && newCurrentDate <= newExpirationDate;
}