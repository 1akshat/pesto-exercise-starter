import { myPromise } from './myPromise';

describe('My Promise', () => {
  test('The function should return a Promise', () => {
    expect(myPromise() instanceof Promise).toBe(true);
  });
});
