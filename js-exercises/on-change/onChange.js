const onChange = (obj, onChangeFn) => {
	const myHandler = {
		get(target, property) {
			if (typeof target[property] === "object" && target[property] !== null) {
				return new Proxy(target[property], myHandler)
			}
			return target[property];
		},
		set(target, property, value) {
			onChangeFn();
			return Reflect.set(target, property, value);
		},
		defineProperty(target, property, descriptor) {
			if(descriptor) {
				onChangeFn();
				return true;
			}
			return false;
		},
		apply(target, thisArgument, argumentsList) {
			onChangeFn();
			return Reflect.apply(target, argumentsList)
		},
		deleteProperty(target, property) {
			onChangeFn();
			return Reflect.deleteProperty(target, property);
		}
	};

	return new Proxy(obj, myHandler);
};


export { onChange };
