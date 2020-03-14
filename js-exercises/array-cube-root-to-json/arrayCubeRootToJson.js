function convertArrayOfHashesToHash(cubeRootArray) {
	let cubeRootHashObject = {};
  for(let item of cubeRootArray) {
  	cubeRootHashObject = {...cubeRootHashObject, ...item};
  }
  return cubeRootHashObject;
}

const arrayCubeRootToJson = arr => {
  const cubeRootArray = arr.map(element => {
  	if(isNaN(parseInt(element))) throw new Error(`Expected number, Got ${typeof element}`);
  	const cubeRootObject = {};
    cubeRootObject[element] = Math.cbrt(element);
    return cubeRootObject;
  });
  return convertArrayOfHashesToHash(cubeRootArray)
};

export { arrayCubeRootToJson };
