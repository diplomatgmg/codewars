function openOrSenior(data){
  return data.map((player) => {
    if (player[0] >= 55 && player[1] > 7) {
      return 'Senior'
    }
    return 'Open'
  })
}