function cakes(recipe, available) {
  let maxCakes = Infinity;

  for (const ingredient in recipe) {
    if (!available.hasOwnProperty(ingredient) || available[ingredient] < recipe[ingredient]) {
      return 0;
    }

    const possibleCakes = Math.floor(available[ingredient] / recipe[ingredient]);
    maxCakes = Math.min(maxCakes, possibleCakes);
  }

  return maxCakes;
}