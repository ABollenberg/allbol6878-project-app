import { getRandomElement, getRandomNumber } from './random';

test('getRandomElement returns an element from array', () => {
  const array = ['a', 'b', 'c'];
  const element = getRandomElement(array);
  expect(array).toContain(element);
});

test('getRandomNumber returns a number between 1 and 100', () => {
  const number = getRandomNumber(100);
  expect(number).toBeGreaterThanOrEqual(1);
  expect(number).toBeLessThanOrEqual(100);
});
