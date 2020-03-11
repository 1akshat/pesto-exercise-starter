function sumFibs(num) {
  var prev = 0;
  var curr = 1;
  var result = 0;
  while (curr <= num) {
    if(isOdd(curr)) {
      result += curr;
    }

    curr += prev;
    prev = curr - prev;
  }
  return result;
}

function isOdd(num){
  if(num%2 == 0) return false;
  return true;
}

export {
  sumFibs,
};
