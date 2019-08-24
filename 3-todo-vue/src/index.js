import { getTasks, addTask, removeTask, fetchTasks } from './services';

new Vue({
  el: '#app',
  data: {
    tasks: [],
    taskTitle: '',
  },
  async created() {
    await fetchTasks();
    this.tasks = getTasks();
  },
  methods: {
    addNewTask() {
      this.tasks = addTask(this.taskTitle);
      this.taskTitle = '';
    },
    removeTask(taskId) {
      this.tasks = removeTask(taskId);
    },
  },
});
