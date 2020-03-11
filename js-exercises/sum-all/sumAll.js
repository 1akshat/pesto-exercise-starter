function sumAll(series) {
	var max = Math.max.apply(Math, series);
	var min = Math.min.apply(Math, series);
	return (max - min + 1) * (max + min)/2
}

export {
  sumAll,
};
