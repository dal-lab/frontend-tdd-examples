import mutations from './mutations';

const { setCounter, setTasks, setTaskTitle } = mutations;

test('setCounter', () => {
  const counter = jest.fn();

  const state = { counter: null };

  setCounter(state, counter);

  expect(state.counter).toEqual(counter);
});

test('setTasks', () => {
  const state = { tasks: [] };

  setTasks(state, [
    { id: 100, title: 'Hello', completed: false },
  ]);

  expect(state.tasks).toEqual([
    { id: 100, title: 'Hello', completed: false },
  ]);
});

test('setTaskTitle', () => {
  const state = { taskTitle: '' };

  setTaskTitle(state, 'Hello');

  expect(state.taskTitle).toBe('Hello');
});
