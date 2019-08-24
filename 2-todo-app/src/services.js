import Counter from './utils/counter';
import { getTasks as apiGetTasks } from './apis/task';

const counter = Counter();

const state = {
  tasks: [],
};

export const clearTasks = () => {
  state.tasks = [];
};

export const getTasks = () => {
  return state.tasks;
};

export const addTask = title => {
  const lastTaskId = Math.max(0, ...state.tasks.map(task => task.id));
  const id = Math.max(lastTaskId + 1, counter());
  state.tasks = [
    ...state.tasks,
    { id, title, completed: false },
  ];
  return state.tasks;
};

export const removeTask = taskId => {
  state.tasks = state.tasks.filter(task => task.id !== taskId);
  return state.tasks;
};

export const toggleTask = taskId => {
  state.tasks.forEach(task => {
    if (task.id === taskId) {
      task.completed = !task.completed;
    }
  });
  return state.tasks;
};

export const fetchTasks = async () => {
  const tasks = await apiGetTasks();
  state.tasks = tasks.slice(0, 10);
  return state.tasks;
};
