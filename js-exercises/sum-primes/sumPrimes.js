function sumPrimes(num) {
	var curr = 2;
	var result = 0;
	while (curr <= num) {
	if (isPrime(curr)) {
		result += curr;
	}
		curr += 1
	}
	return result;
}

function isPrime(num){
	for(let i=2;i<num;i++){
		if(num%i === 0) return false;
	}
	return true;
}

export {
  sumPrimes,
};
