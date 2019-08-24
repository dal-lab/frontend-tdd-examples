let mockCount = 0;

const Counter = () => {
  return () => mockCount;
};

export const setMockCount = count => {
  mockCount = count;
};

export default Counter;
