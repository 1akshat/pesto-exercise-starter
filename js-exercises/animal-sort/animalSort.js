const animalSort = animals => {
  return animals.sort((a, b) => parseInt(a.numberOfLegs) !== parseInt(b.numberOfLegs) ? parseInt(a.numberOfLegs) - parseInt(b.numberOfLegs) : (a.name > b.name)*2-1)
};

export { animalSort };
