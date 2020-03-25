async function sleep(ms) {
	const promise = new Promise((resolve, reject) => {
		return setTimeout(resolve, ms);
	});
	return promise;
};

export { sleep };