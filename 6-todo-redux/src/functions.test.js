import { addTask, removeTask, toggleTask } from './functions';

test('addTask', () => {
  const state = {
    counter: () => 100,
    tasks: [],
  };

  const { tasks } = addTask(state, 'Hello');

  expect(tasks).toEqual([
    { id: 100, title: 'Hello', completed: false },
  ]);
});

test('removeTask', () => {
  const state = {
    tasks: [
      { id: 100, title: 'Hello', completed: false },
    ],
  };

  const { tasks } = removeTask(state, 100);

  expect(tasks).toEqual([]);
});

test('toggleTask', () => {
  const state = {
    tasks: [
      { id: 100, title: 'Hello', completed: false },
    ],
  };

  const { tasks } = toggleTask(state, 100);

  expect(tasks).toEqual([
    { id: 100, title: 'Hello', completed: true },
  ]);
});
