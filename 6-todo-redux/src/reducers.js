import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  SET_TASKS,
  SET_TASK_TITLE,
} from './actionTypes';

import { addTask, removeTask, toggleTask } from './functions';

import Counter from './utils/counter';

export const initialState = {
  counter: Counter(),
  tasks: [],
  taskTitle: '',
};

export const reducer = (state = initialState, action) => {
  const handlers = {
    [ADD_TASK]: ({ taskTitle }) => ({
      ...addTask(state, taskTitle),
      taskTitle: '',
    }),
    [REMOVE_TASK]: ({ taskId }) => removeTask(state, taskId),
    [TOGGLE_TASK]: ({ taskId }) => toggleTask(state, taskId),
    [SET_TASKS]: ({ tasks }) => {
      const maxId = Math.max(0, ...tasks.map(task => task.id));
      return {
        ...state,
        counter: Counter(maxId + 1),
        tasks,
      };
    },
    [SET_TASK_TITLE]: ({ taskTitle }) => ({ ...state, taskTitle }),
  };
  const handler = handlers[action.type];
  return handler ? handler(action) : state;
};
