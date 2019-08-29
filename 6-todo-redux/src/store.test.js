import store from './store';

test('initialState', () => {
  const { tasks } = store.getState();

  expect(tasks).toHaveLength(0);
});
