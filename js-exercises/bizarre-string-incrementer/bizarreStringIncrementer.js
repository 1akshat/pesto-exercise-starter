const bizarreStringIncrementer = (bizarreString) => {
	const numPattern = /(\d*$)/;
	return bizarreString.replace(numPattern, function(match) {
		const length = match.length;
		let incrementedValue = Number(match) + 1
		return incrementedValue.toString().padStart(length, "0");
	})
}

console.log(bizarreStringIncrementer('f99oo0099'));

// export {
// 	bizarreStringIncrementer
// }