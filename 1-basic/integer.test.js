import Integer from './integer';

test('Integer.plus', () => {
  const one = new Integer(1);
  const two = new Integer(2);
  const three = new Integer(3);
  const five = new Integer(5);

  expect(one.plus(two)).toEqual(three);
  expect(two.plus(three)).toEqual(five);
});
