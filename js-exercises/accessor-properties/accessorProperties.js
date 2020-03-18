
function accessorProperties() {
  return {
  	_number: null,
    get number() {
      return isNaN(this._number) ? this._number : this._number.toString(2);
    },
    set number(value) {
      this._number = value;
    }
  };
}

export {
  accessorProperties,
};
