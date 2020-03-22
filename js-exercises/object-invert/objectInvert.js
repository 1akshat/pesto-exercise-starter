
function objectInvert(obj) {
	const keys = Object.keys(obj);
	const values = Object.values(obj);
	let invertedObj = {};
	for(let i=0;i<keys.length;i++) {
		invertedObj[values[i]] = keys[i];
	}
	return invertedObj;
}

export {
  objectInvert,
};
