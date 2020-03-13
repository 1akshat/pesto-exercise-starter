

function leastCommonMultiple(number1, number2) {
	if(typeof(number1) !== "number" || typeof(number2) !== "number") throw new Error(`Expected both numbers, Got ${typeof number1}, ${typeof number2}`)
	let large = Math.max(number1, number2);
  let small = Math.min(number1, number2);
  let lcm = large;
  while(lcm % small !== 0) {
  	lcm += large;
  }
  return lcm
}

export {
  leastCommonMultiple,
};
