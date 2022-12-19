import { createStore } from 'vuex';

import rootActions from './actions';
import rootGetters from './getters';
import rootMutations from './mutations';
import counterModule from './modules/counter';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
