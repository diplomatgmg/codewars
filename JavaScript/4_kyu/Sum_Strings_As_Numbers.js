/*
https://www.codewars.com/kata/5324945e2ece5e1f32000370
*/

function sumStrings(a, b) {
  const reverseResultArray = [];
  const maxLength = Math.max(a.length, b.length);

  let nextAdd = 0;

  for (let i = 1; i <= maxLength; i += 1) {

    const numberA = a[a.length - i] || 0;
    const numberB = b[b.length - i] || 0;

    const sum = (Number(numberA)) + (Number(numberB)) + nextAdd;
    if (sum > 9) {
      reverseResultArray.push(sum % 10);
      nextAdd = 1;
    } else {
      reverseResultArray.push(sum);
      nextAdd = 0;

    }
  }

  if (nextAdd === 1) {
    reverseResultArray.push('1');
  }

  while (reverseResultArray.at(-1) === 0) {
    reverseResultArray.pop()
  }
  
  return reverseResultArray.reverse().join('')
}