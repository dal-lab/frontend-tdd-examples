import Counter from './utils/counter';
import { getTasks as apiGetTasks } from './apis/task';

const state = {
  counter: Counter(),
  tasks: [],
};

export const clearTasks = () => {
  state.tasks = [];
};

export const getTasks = () => {
  return state.tasks;
};

export const addTask = title => {
  const { counter } = state;
  state.tasks = [
    ...state.tasks,
    { id: counter(), title, completed: false },
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
  const maxId = Math.max(0, ...tasks.map(task => task.id));
  state.counter = Counter(maxId);
  state.tasks = tasks.slice(0, 10);
  return state.tasks;
};
