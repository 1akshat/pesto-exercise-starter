const asciiValueFromChar = asciiCharsArray => {
	let asciiCodeArr = [];
	asciiCharsArray.forEach(char => {
		asciiCodeArr = [...asciiCodeArr, char.charCodeAt(0)];
	});
	return asciiCodeArr;
}

const charFromAsciiValue = asciiArray => {
	let shiftedCharsArray = [];
	asciiArray.forEach(ascii => {
		ascii += 1
		// For Capital Chars
		if(ascii === 	91) {
			ascii = 65
		}
		if(ascii === 	123) {
			ascii = 97
		}
		shiftedCharsArray = [...shiftedCharsArray, String.fromCharCode(ascii)];
	});
	return shiftedCharsArray;
}

const alphabeticShift = input => {
	const charsArray = input.split("");
	const asciiCodes = asciiValueFromChar(charsArray);
	const shiftedChars = charFromAsciiValue(asciiCodes);
  return shiftedChars.join("");
};

export { alphabeticShift };
