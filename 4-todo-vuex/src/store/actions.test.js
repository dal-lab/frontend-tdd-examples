jest.mock('../apis/task');

import { setMockTasks } from '../apis/task';

import actions from './actions';

const {
  addTask,
  removeTask,
  toggleTask,
  fetchTasks,
  updateTaskTitle,
} = actions;

test('addTask', () => {
  const commit = jest.fn();
  const state = {
    counter: () => 100,
    tasks: [],
    taskTitle: 'Hello',
  };

  addTask({ commit, state });

  expect(commit.mock.calls[0][0]).toBe('setTasks');
  expect(commit.mock.calls[0][1]).toHaveLength(1);

  expect(commit.mock.calls[1]).toEqual(['setTaskTitle', '']);
});

test('removeTask', () => {
  const commit = jest.fn();
  const state = {
    tasks: [
      { id: 100, title: 'Hello', completed: false },
    ],
  };

  removeTask({ commit, state }, 100);

  expect(commit.mock.calls[0][0]).toBe('setTasks');
  expect(commit.mock.calls[0][1]).toHaveLength(0);
});

test('toggleTask', () => {
  const commit = jest.fn();
  const state = {
    tasks: [
      { id: 100, title: 'Hello', completed: false },
    ],
  };

  toggleTask({ commit, state }, 100);

  expect(commit.mock.calls[0][0]).toBe('setTasks');
});

test('fetchTasks', async () => {
  setMockTasks([1, 2, 3].map(id => ({ id, title: 'Hello', completed: false })));

  const commit = jest.fn();
  const state = {
    tasks: [],
  };

  await fetchTasks({ commit, state });

  expect(commit.mock.calls[0][0]).toBe('setCounter');

  expect(commit.mock.calls[1][0]).toBe('setTasks');
  expect(commit.mock.calls[1][1]).toHaveLength(3);
});

test('updateTaskTitle', () => {
  const commit = jest.fn();
  const state = {
    taskTitle: '',
  };

  updateTaskTitle({ commit, state }, 'New Task');

  expect(commit.mock.calls[0][0]).toBe('setTaskTitle');
  expect(commit.mock.calls[0][1]).toBe('New Task')
});
