const sequentialPromise = promises => {
	let promise = promises[0]();
	for(let i=0;i<promises.length; i++) {
		promise = promise.then(promises[i]);
	}
	const resolvedPromise = new Promise((resolve) => resolve(promise));
	return resolvedPromise;
}

export { sequentialPromise };