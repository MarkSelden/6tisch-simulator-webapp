import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connection: 'unknown'
  },
  mutations: {
    changeConnectionState (state, payload) {
      state.connection = payload.state
    }
  },
  actions: {
    changeConnectionState (context, state) {
      context.commit('changeConnectionState', { state })
    }
  }
})
