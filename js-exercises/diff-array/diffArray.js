function diffArray (Array1, Array2) {
	
	var firstArrayAllElements = [], symmetricDiffArray = [];

	for (var i = 0; i < Array1.length; i++) {
		firstArrayAllElements[Array1[i]] = true;
	}

	for (var i = 0; i < Array2.length; i++) {
	    if (firstArrayAllElements[Array2[i]]) {
	    	delete firstArrayAllElements[Array2[i]];
	    } else {
	    	firstArrayAllElements[Array2[i]] = true;
	    }
	}

	for (var i in firstArrayAllElements) {
		symmetricDiffArray.push(i);
	}

	return symmetricDiffArray;
}

export {
  diffArray,
};
