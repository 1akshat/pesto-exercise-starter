function aperture(tupleLength, inputArray) {
	let aperture = new Array();
	for(let i = 0;i < inputArray.length;i++) {
		let individualTuple = inputArray.slice(i, i+tupleLength);
		if(individualTuple.length < tupleLength) return aperture;
		aperture = [...aperture, individualTuple];
	}
	return aperture;
}

export { aperture };
