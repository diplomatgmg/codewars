/*
https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
*/

function openOrSenior(data){
  return data.map((player) => {
    if (player[0] >= 55 && player[1] > 7) {
      return 'Senior'
    }
    return 'Open'
  })
}