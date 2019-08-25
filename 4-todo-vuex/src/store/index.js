import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

import Counter from '../utils/counter';

Vue.use(Vuex);

const state = {
  counter: Counter(),
  tasks: [],
  taskTitle: '',
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
