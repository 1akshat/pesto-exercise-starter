function sorted(arr) {
	return arr.sort(function(a,b) { return a-b });
}

function minima(numberOfElements, elementsArray) {
	const sortedArray = sorted(elementsArray);
	return sortedArray.slice(0, numberOfElements); 
}

export { minima };
