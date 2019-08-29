import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  SET_TASKS,
  SET_TASK_TITLE,
} from './actionTypes';

import { getTasks } from './apis/task';

export const addTask = taskTitle => ({ type: ADD_TASK, taskTitle });
export const removeTask = taskId => ({ type: REMOVE_TASK, taskId });
export const toggleTask = taskId => ({ type: TOGGLE_TASK, taskId });
export const setTasks = tasks => ({ type: SET_TASKS, tasks });

export const fetchTasks = () => {
  return async (dispatch) => {
    const tasks = await getTasks();
    dispatch(setTasks(tasks.slice(0, 10)));
  };
}

export const setTaskTitle = taskTitle => ({
  type: SET_TASK_TITLE,
  taskTitle,
});
