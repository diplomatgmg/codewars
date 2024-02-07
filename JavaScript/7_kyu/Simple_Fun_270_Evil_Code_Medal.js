/*
https://www.codewars.com/kata/5915686ed2563aa6650000ab
*/

const convertToTime = (strTime) => {
  const [hours, minutes, seconds] = strTime.split(':');
  return new Date(0, 0, 0, hours, minutes, seconds);
};

function evilCodeMedal(userTime, gold, silver, bronze) {
  const dateUserTime = convertToTime(userTime);
  const dateGold = convertToTime(gold);
  const dateSilver = convertToTime(silver);
  const dateBronze = convertToTime(bronze);

  if (dateUserTime < dateGold) {
    return 'Gold';
  }

  if (dateUserTime < dateSilver) {
    return 'Silver';
  }

  if (dateUserTime < dateBronze) {
    return 'Bronze';
  }

  return 'None';
}