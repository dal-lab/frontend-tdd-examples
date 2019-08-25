import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

import store from './store';

new Vue({
  el: '#app',
  store,
  computed: mapState(['tasks', 'taskTitle']),
  methods: {
    ...mapActions([
      'addTask', 'removeTask', 'toggleTask', 'fetchTasks', 'updateTaskTitle',
    ]),
  },
  created() {
    this.fetchTasks();
  },
});
