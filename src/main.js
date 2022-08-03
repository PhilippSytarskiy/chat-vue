import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

Vue.config.productionTip = false


const options = {path: '', transports: ['websocket']}

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('https://chat-serverrrrrrrrr.herokuapp.com', options),
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  }
}))

new Vue({ 
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
