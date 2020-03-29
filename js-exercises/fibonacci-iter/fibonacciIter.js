const fibonacciIter = {
	[Symbol.iterator]() {
		let firstNumber = 1;
		let secondNumber = 2;
		let current;
		return {
			next() {
				current = firstNumber;
				firstNumber = secondNumber;
				secondNumber = firstNumber + current;
				return {done: false, value: current};	
			},
			return(value) {
				return {done: true, value: value};
			}
		}
	}
};

export { fibonacciIter };
