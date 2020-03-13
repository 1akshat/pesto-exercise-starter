
function duplicateLetters(...args) {
	var length = args[0].length;
	var obj = {};
	for(let i=0; i<length; i++) {
		var l = args[0].charAt(i)
		obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
	}
	var sorted_array = Object.values(obj).sort(function(a,b) { return b-a })
	var max_utterance = sorted_array.shift()
	return max_utterance == 1 ? false:max_utterance
}

export {
  duplicateLetters,
};
