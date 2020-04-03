function hasSameTypes(...values) {
	if(values.length <= 1) {
		return true;
	}
	if (values[0] === null) {
		return values.every(el => el === null);
	}
	const firstElementType = typeof values[0];
	return values.every((el) => typeof el === firstElementType)
}

function descriptorAreEqual(desc1, desc2) {
	for (const [key, value] of Object.entries(desc1)) {
		const otherValue = desc2[key];
		if (value !== otherValue) {
			return false;
		}
	}
	return true;
}

function deepEqual(actual, expected, { matchDescriptors = false } = {}) {
	// base case
	if(!(actual, expected)) {
		return false;
	}

	// both have same types
	if (typeof actual !== 'object') {
		return actual === expected;
	}

	// both are objects
	const actualKeys = Object.getOwnPropertyNames(actual);
	const expectedKeys = Object.getOwnPropertyNames(expected);

	if (actualKeys.length !== expectedKeys.length) {
		return false;
	}

	// recursive case
	let equality = true;
	// keys are equal in number
	for(const  [key, actualValue] of Object.entries(actual)) {
		const expectedValue = expected[key];
		if (matchDescriptors) {
			const desc1 = Object.getOwnPropertyDescriptor(actual, key);
			const desc2 = Object.getOwnPropertyDescriptor(expected, key);
			equality = equality && descriptorAreEqual(desc. desc2);
		}
		equality = equality && deepEqual(actualValue, expectedValue, { matchDescriptors });
	}
	return equality;
}

export {
  deepEqual,
};
