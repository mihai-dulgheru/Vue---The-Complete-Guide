import counterActions from './actions';
import counterGetters from './getters';
import counterMutations from './mutations';

export default {
  namespaced: true,
  state() {
    // state is local to the module
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
