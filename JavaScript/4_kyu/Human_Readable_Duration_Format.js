/*
https://www.codewars.com/kata/52742f58faf5485cae000b9a
*/

const getYears = (seconds) => Math.floor(seconds / 60 / 60 / 24 / 365);
const getDays = (seconds) => Math.floor(seconds / 60 / 60 / 24) % 365;
const getHours = (seconds) => Math.floor(seconds / 60 / 60) % 24;
const getMinutes = (seconds) => Math.floor(seconds / 60) % 60;
const getSeconds = (seconds) => seconds % 60;
const getPlural = (number, string) => number > 1 ? string + 's' : string;

function formatDuration(seconds) {
  if (seconds === 0) {
    return 'now';
  }

  const time = [
    ['year', getYears(seconds)],
    ['day', getDays(seconds)],
    ['hour', getHours(seconds)],
    ['minute', getMinutes(seconds)],
    ['second', getSeconds(seconds)],
  ];

  const haveTime = time.filter(obj => obj[1] > 0);

  const joinTime = haveTime.map(([timeUnit, duration]) => {
    return `${duration} ${getPlural(duration, timeUnit)}`;
  });

  if (joinTime.length === 1) {
    return joinTime[0];
  } else if (joinTime.length === 2) {
    return joinTime.join(' and ');
  } else {
    return joinTime.slice(0, joinTime.length - 1).join(', ') + ' and ' + joinTime.at(-1);
  }
}