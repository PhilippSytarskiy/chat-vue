import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    users: [],
    messages: []
  },
  getters: {
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },

    clearData(state) {
     state.user = {}
     state.users = []
     state.messages = []
    },
    SOCKET_updateUsers(state, users) {
      state.users = users
    },
    SOCKET_newMessage(state, message) {
      state.messages.push(message)
    }
    
  },
  actions: {
  },
  modules: {
  }
})
