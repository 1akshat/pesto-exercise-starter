function booleanExpressionEvaluator(expression) {
	const expressionArr = expression.split(" ");
	console.log(eval(expression));
	if (expressionArr.includes("&&") || expressionArr.includes("||") || expressionArr.includes("*") || expressionArr.includes("^")) throw new Error("")
	if(eval(expression) !== 0 || eval(expression) !== 1) throw new Error("")
	return eval(expression === 1)
}

console.log(booleanExpressionEvaluator('false ^ false'))

// export { booleanExpressionEvaluator };
