export const add1 = (x, y, z) => {
  return (x || 0) + (y || 0) + (z || 0);
};

export const add2 = (...numbers) => numbers.reduce((a, e) => a + (e || 0), 0);
