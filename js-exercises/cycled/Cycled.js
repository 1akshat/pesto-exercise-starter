class Cycled extends Array {

	Constructor(...args) {
		this.args = args;
	}

	const next = () => {
		[Symbol.iterator]() {
			let step = 0;
			return next () {
				step++;
				if (step === 1) {
          return { value: 'This', done: false};
        } else if (step === 2) {
          return { value: 'is', done: false};
        } else if (step === 3) {
          return { value: 'iterable.', done: false};
        }
        return { value: '', done: true };
			}
		}
	}

}

const fixture = [1, 2, 3];
const c = new Cycled(fixture);
console.log(c.next());

// export { Cycled };
