jest.mock('./utils/counter');
jest.mock('./apis/task');

import { setMockCount } from './utils/counter';
import { setMockTasks } from './apis/task';

import {
  clearTasks,
  getTasks,
  addTask,
  removeTask,
  toggleTask,
  fetchTasks,
} from './services';

beforeEach(() => {
  setMockCount(100);

  clearTasks();
});

test('clearTasks', () => {
  expect(getTasks()).toEqual([]);
});

test('addTask', () => {
  const tasks = addTask('Hello');

  expect(tasks).toEqual([
    { id: 100, title: 'Hello', completed: false },
  ]);
});

test('removeTask', () => {
  addTask('Hello');

  const tasks = removeTask(100);

  expect(tasks).toEqual([]);
});

test('toggleTask', () => {
  addTask('Hello');

  const tasks = toggleTask(100);

  expect(tasks).toEqual([
    { id: 100, title: 'Hello', completed: true },
  ]);
});

test('fetchTasks', async () => {
  setMockTasks([
    { id: 100, title: 'Hello', completed: false },
  ]);

  const tasks = await fetchTasks();

  expect(tasks).toEqual([
    { id: 100, title: 'Hello', completed: false },
  ]);
});
