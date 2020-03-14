function bouncer(array) {
	const FALSY_ARRAY = [false, null, 0, NaN, undefined, '']
  return array.filter(element => FALSY_ARRAY.includes(!element))
}

export { bouncer };
