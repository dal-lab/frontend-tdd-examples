jest.mock('./apis/task');

import { reducer } from './reducers';

import {
  addTask,
  removeTask,
  toggleTask,
  setTasks,
  setTaskTitle,
} from './actions';

test('addTask', async () => {
  const state = reducer({
    counter: jest.fn(),
    tasks: [],
    taskTitle: 'Hello',
  }, addTask('Hello'));

  expect(state.tasks).toHaveLength(1);
  expect(state.taskTitle).toBe('');
});

test('removeTask', async () => {
  const state = reducer({
    tasks: [
      { id: 1, title: 'Hello', completed: false },
    ],
  }, removeTask(1));

  expect(state.tasks).toHaveLength(0);
});

test('toggleTask', async () => {
  const state = reducer({
    tasks: [
      { id: 1, title: 'Hello', completed: false },
    ],
  }, toggleTask(1));

  expect(state.tasks[0].completed).toBeTruthy();
});

test('setTasks', async () => {
  const tasks = [
    { id: 1, title: 'Hello', completed: false },
  ];

  const state = reducer({
    tasks: [],
  }, setTasks(tasks));

  expect(state.tasks).toEqual(tasks);
});

test('setTaskTitle', async () => {
  const state = reducer({
    taskTitle: '',
  }, setTaskTitle('Hello'));

  expect(state.taskTitle).toEqual('Hello');
});
