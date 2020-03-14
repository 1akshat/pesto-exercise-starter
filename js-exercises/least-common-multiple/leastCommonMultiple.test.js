import { leastCommonMultiple } from "./leastCommonMultiple";

describe("leastCommonMultiple", () => {

	test('should return a number', () => {
    expect(typeof leastCommonMultiple(4, 9)).toBe('number');
  });

  test('should throw an error if position is not valid', () => {
    expect(() => { leastCommonMultiple("8", 9) }).toThrow();
  });

	test( 'should return the correct solution array', () => {
    expect(leastCommonMultiple(7, 3)).toEqual(21);
    expect(leastCommonMultiple(16,2)).toEqual(16);
    expect(leastCommonMultiple(9,100)).toEqual(900);
    expect(leastCommonMultiple(0,10)).toEqual(10);
  });

});
