function alternatingCharacters(arrOfStrings) {
  var alternatingCharactersCount = [];
	arrOfStrings.forEach(function(singleString) {
		let counter = 0;
     if (singleString.length >= 1 && singleString.length <= 100000) {
     	let stringArray = singleString.split('');
     	let past = stringArray[0];
     	stringArray = stringArray.filter((item, key) => {
     		if (item !== past && key !== 0) {
     			past = item;
     			return item; 
     		}  
     	});
     	counter = singleString.length - [ singleString.charAt(0), ...stringArray ].length;
     };
     alternatingCharactersCount.push(counter);
	});
  return alternatingCharactersCount;
};

export { alternatingCharacters };
