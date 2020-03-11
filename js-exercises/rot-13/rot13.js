function rot13(encodedPassword) {
	var charSequence = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	// Shifting by 13 each letter
  var charSequenceShiftedThirteen = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
  var index = x => charSequence.indexOf(x);
  var translate = x => index(x) > -1 ? charSequenceShiftedThirteen[index(x)] : x;
  return encodedPassword.split('').map(translate).join('');
}

export {
  rot13,
};
