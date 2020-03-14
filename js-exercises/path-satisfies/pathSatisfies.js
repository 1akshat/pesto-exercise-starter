function pathSatisfies(...args) {
	const condition  = args[0];
	const path = args[1];
	const jsonObj = args[2];
  let searchResult = jsonObj[path[0]];

	for (let i = 1; i < path.length; i++) {
		searchResult = searchResult[path[i]];
	}
  return condition(searchResult)
}

export {
  pathSatisfies,
};
