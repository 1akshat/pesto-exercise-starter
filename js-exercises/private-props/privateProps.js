function privateProps(obj, isPrivate) {
	
	const handler = {
		get(target, property) {
			return target[property];
		},
		set(target, property, value) {
			isPrivate();
			return Reflect.set(target, property, value);
		},
		has(target, property) {
			if (property.indexOf('_') === 0) {
				return false;
    	}
			return property in target;
		},
		ownKeys(target) {
			return Reflect.ownKeys(target).filter(key => key[0] !== '_');
		},
		getOwnPropertyDescriptor(target, propertyKey) {
			return Reflect.getOwnPropertyDescriptor(target, propertyKey);
		}
	};

	return new Proxy(obj, handler);
}

export { privateProps };