import { add1, add2 } from './caculator';

test('add', () => {
  // 1. What --> How to use (UX)
  // 2. Why --> result (expected)

  [add1, add2].forEach(add => {
    expect(add(1, 2)).toBe(3);
    expect(add(10, 20)).toBe(30);
    expect(add(3, -2)).toBe(1);
    expect(add(3, null)).toBe(3);
    expect(add(null, 3)).toBe(3);
    expect(add(undefined, 3)).toBe(3);
    expect(add(3, undefined)).toBe(3);
    expect(add(3, 4, 5)).toBe(12);
  });
});
