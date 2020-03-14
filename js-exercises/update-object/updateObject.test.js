import { updateObject } from "./updateObject";

describe("updateObject", () => {

	test('should return an array object', () => {
    expect(typeof updateObject(-1, '_', ['a', 'b', 'c'])).toBe('object');
  });

  test('should throw an error if position is not valid', () => {
    expect(() => { updateObject(-10, 'bug', ['a', 'b', 'c']) }).toThrow();
  });

	test( 'should return the correct solution array', () => {
    expect(updateObject(1, '_', ['a', 'b', 'c'])).toEqual(['a', '_', 'c']);
    expect(updateObject(-1, '_', ['a', 'b', 'c'])).toEqual(['a', 'b', '_']);
    expect(updateObject(0, 'a', ['b', 'c'])).toEqual(['a', 'c']);
    expect(updateObject(1, 'a', ['b', 'c'])).toEqual(['b', 'a']);
  });

});
