// Write your own test cases.
import { forEach, map, filter, reduce } from './arrayUtils';

describe('Use Array Util functions', () => {

    it('should return cube for each array elements: (forEach)', () => {
		const expected_cube = [1, 8, 27, 64];
		expect(forEach([1, 2, 3, 4])).toEqual(expect.arrayContaining(expected_cube));
 	});

 	it('should return square root for each array elements: (map)', () => {
		const expected_square_root = [1, 9, 100];
		expect(map([1, 81, 10000])).toEqual(expect.arrayContaining(expected_square_root));
 	});

 	it('should filter the age groups >=20 and <=24: (filter)', () => {
		const expected_filtered_age_groups = [21, 23, 20];
		expect(filter([40, 21, 23, 60, 76, 20])).toEqual(expect.arrayContaining(expected_filtered_age_groups));
 	});

 	it('should reduce the array to return the sum: (reduce)', () => {
 		expect(reduce([1,2,3,4])).toBe(10);
 	});

});
