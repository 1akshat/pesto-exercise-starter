function addBigIntegers(intString) {
	return intString.split("\n").reduce((a,b) => BigInt(a)+BigInt(b), 0).toString()
}

export { addBigIntegers };
