const limitFunctionCallCount = (cb, functionExecutionThreshold) => {
	return function() {
 		return functionExecutionThreshold-- > 0 ? cb.apply(this, arguments) : null;
 	};

};

export {
  limitFunctionCallCount,
};
