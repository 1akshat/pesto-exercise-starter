function longestWordInString(sentence) {
	const wordCountObject = {};
  var maxOccurance;

  for(let word of sentence.split(" ")){
    wordCountObject[word] = word.length;
  }

  maxOccurance = Math.max(...Object.values(wordCountObject))
  return maxOccurance;
}

export { longestWordInString };
