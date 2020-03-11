const sumEvenArgs = (...args) => {

  var evenNumbers = args.filter(num => num%2==0);
  return evenNumbers.reduce((a,b) => a+b, 0)
};

export { sumEvenArgs };
