<template>
  <v-app app dark>
      <router-view />
  </v-app>
</template>

<script>
import Login from "./components/Login.vue";
import Chat from './components/Chat.vue'

export default {
  name: "App",

  components: {
    Login,
    Chat
},

  data: () => ({
    join: false,
  }),
  sockets: {
    connect() {
    },
  },
  methods: {
    setJoin(data) {
      this.join = data;
    },
    sendMessage() {
      this.$socket.emit("createMessage", { text: "FROM_CLIENT" });
    },
  },
};
</script>
