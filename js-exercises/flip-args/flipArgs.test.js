// write your own test cases
import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
  it('should return an array', () => {
    expect(typeof flipArgs()).toBe('object');
  });
  it('should return flipped arguments integers', () => {
  	const expected = [3,2,1];
    expect(flipArgs(1, 2, 3)).toEqual(expect.arrayContaining(expected));
  });
  it('should return flipped arguments characters', () => {
  	const expected = ['c','b','a'];
    expect(flipArgs('a', 'b', 'c')).toEqual(expect.arrayContaining(expected));
  });
  
});