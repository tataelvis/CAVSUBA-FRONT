import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './modules/auth'
import parties from './modules/parties';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    parties
  },
  plugins: [createPersistedState()]
})
