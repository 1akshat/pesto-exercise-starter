import { isString } from "util";

function abbreviateString(str) {
	if(!isString(str)) throw new new Error(`Expected string, got ${typeof str}`);

	let stringArray = str.split(" ");
	return `${stringArray[0]} ${stringArray[stringArray.length - 1][0].toUpperCase()}.`;
}
	
export { abbreviateString };
