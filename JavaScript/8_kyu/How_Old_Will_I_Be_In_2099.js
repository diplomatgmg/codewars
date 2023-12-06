/*
https://www.codewars.com/kata/5761a717780f8950ce001473
*/

function calculateAge(age1, age2) {
  const difference = age2 - age1;
  const pluralYear = Math.abs(difference) === 1 ? 'year' : 'years'

  if (difference > 0) {
    return `You are ${difference} ${pluralYear} old.`;
  }
  if (difference < 0) {
    return `You will be born in ${Math.abs(difference)} ${pluralYear}.`;
  }
  return 'You were born this very year!';
}