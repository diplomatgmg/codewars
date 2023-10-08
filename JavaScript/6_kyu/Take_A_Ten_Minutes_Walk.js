function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false
  }
  console.log(walk)
  
  const countN = walk.reduce((acc, curr) => curr === 'n' ? acc + 1 : acc, 0);
  const countS = walk.reduce((acc, curr) => curr === 's' ? acc + 1 : acc, 0);
  const countW = walk.reduce((acc, curr) => curr === 'w' ? acc + 1 : acc, 0);
  const countE = walk.reduce((acc, curr) => curr === 'e' ? acc + 1 : acc, 0);
  return (countN === countS && countW === countE);
}