function findDifference(a, b) {
  return Math.abs(a.reduce((res, curr) => res * curr) - b.reduce((res, curr) => res * curr))
}