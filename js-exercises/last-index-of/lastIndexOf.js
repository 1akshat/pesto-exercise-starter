function lastIndexOf(numToSearch,list) {
  const numMap = {}

  for(let i=0;i<list.length;i++) {
  	// does not consider "1" equal to 1
    if(typeof numToSearch === typeof list[i]){
      numMap[list[i]] = i
    }
  }
  return typeof numMap[numToSearch] === "undefined" ? -1 : numMap[numToSearch]
}

export {
  lastIndexOf,
};
