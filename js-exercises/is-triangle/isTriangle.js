function isTriangle(a,b,c) {
	var a = new Array(a,b,c).sort(function(a,b){return a-b });
  	return Math.sqrt(Math.pow(a[0],2) + Math.pow(a[1],2)) == a[2] ? true:false 
}

export {
  isTriangle,
};
