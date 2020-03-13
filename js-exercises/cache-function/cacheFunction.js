function cacheFunction(cb) {
	const cache = {};
	const invoker = (...args) => {
		if (cb in cache) {
			return cache[cb];
		}
		cache[cb] = cb(...args);
		return cb(...args);
	}
	return invoker;
}

export {
	cacheFunction,
};
