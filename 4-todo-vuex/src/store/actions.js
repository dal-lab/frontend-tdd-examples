import { addTask, removeTask, toggleTask } from '../functions';
import { getTasks } from '../apis/task';
import Counter from '../utils/counter';

export default {
  addTask({ commit, state }) {
    const { taskTitle: title } = state;
    const { tasks } = addTask(state, title);
    commit('setTasks', tasks);
    commit('setTaskTitle', '');
  },
  removeTask({ commit, state }, taskId) {
    const { tasks } = removeTask(state, taskId);
    commit('setTasks', tasks);
  },
  toggleTask({ commit, state }, taskId) {
    const { tasks } = toggleTask(state, taskId);
    commit('setTasks', tasks);
  },
  async fetchTasks({ commit, state }) {
    const tasks = await getTasks();
    const maxId = Math.max(0, ...tasks.map(task => task.id));
    commit('setCounter', Counter(maxId + 1));
    commit('setTasks', tasks.slice(0, 10));
  },
  updateTaskTitle({ commit }, title) {
    commit('setTaskTitle', title);
  },
};
