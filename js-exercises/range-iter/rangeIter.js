function rangeIter(lb, ub) {
	if (typeof lb !== "number") throw new TypeError(`${lb} is not a number.`);
	if (typeof ub !== "number") throw new TypeError(`${ub} is not a number.`);
	
	const range = [];
	if(ub >= lb) {
		for(let i = lb; i <= ub; i++) {
			range.push(i);
		}
	};
	return range;
}

export { rangeIter };
