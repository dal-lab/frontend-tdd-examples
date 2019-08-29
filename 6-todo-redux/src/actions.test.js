jest.mock('./apis/task');

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { setMockTasks } from './apis/task';

import {
  addTask,
  removeTask,
  toggleTask,
  setTasks,
  fetchTasks,
  setTaskTitle,
} from './actions';

import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  SET_TASKS,
  SET_TASK_TITLE,
} from './actionTypes';

const middlewares = [thunk]
const store = configureMockStore(middlewares)({});

test('add/remove/toggle Task', async () => {
  expect(addTask('title').type).toEqual(ADD_TASK);
  expect(removeTask(1).type).toEqual(REMOVE_TASK);
  expect(toggleTask(2).type).toEqual(TOGGLE_TASK);
});

test('setTasks', async () => {
  expect(setTasks([]).type).toEqual(SET_TASKS);
});

test('fetchTasks', async () => {
  const mockTasks = [1, 2, 3];
  setMockTasks(mockTasks);

  await store.dispatch(fetchTasks());

  expect(store.getActions()).toEqual([setTasks(mockTasks)]);
});

test('setTaskTitle', async () => {
  expect(setTaskTitle('title').type).toEqual(SET_TASK_TITLE);
});
