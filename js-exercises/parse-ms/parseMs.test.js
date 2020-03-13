import { parseMs } from "./parseMs";

describe("parseMs", () => {
	
	test('should return an object', () => {
    expect(typeof parseMs(1337000001)).toBe('object');
  });

  test('should throw an error if value is not a number', () => {
    expect(() => { parseMs("abs") } ).toThrow();
  });

  test('should return the correct solution object', () => {
    expect(parseMs(1337000001)).toEqual(
    	{
				days: 15,
				hours: 11,
				minutes: 23,
				seconds: 20,
				milliseconds: 1,
				microseconds: 0,
				nanoseconds: 0
			}
		);
  });
});
