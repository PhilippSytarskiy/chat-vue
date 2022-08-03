<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list subheader>
        <v-subheader>Пользователи</v-subheader>
        <v-list-item v-for="u in users.users" :key="u.id">
          <v-list-item-content>
            <v-list-item-title>
            </v-list-item-title>
           
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon :color="u.id === user.id ? 'deep-purple accent-4' : 'grey'">
              mdi-message-outline
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-btn color="mr-6" @click="exit"
        ><v-icon large dark left> mdi-arrow-left </v-icon>
      </v-btn>
      <h1>Чат</h1>

      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <div class="wrap-chat">
        <div class="chat-messages" ref="blockMessages">
          {{ messages }}
          <Message
            v-for="m in messages"
            :key="m.text"
            :name="m.name"
            :text="m.text"
            :owner="user.id === m.id"
          />
        </div>
        <div class="chat-form">
          <ChatForm />
        </div>
      </div>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Message from "./Message.vue";
import ChatForm from "./ChatForm.vue";

export default {
  data: () => ({
  }),
  components: {
    Message,
    ChatForm,
  },
  computed: mapState(["user", "messages", 'users']),

  methods: {
    ...mapMutations(['clearData']),
    exit() {
    
      this.$socket.emit('userLeft', this.user.id, () => {
          this.$router.push('/')
      this.clearData()
      })

    }
  },
  watch: {
    messages() {
      setTimeout(() => {
      this.$refs.blockMessages.scrollTop = this.$refs.blockMessages.scrollHeight
      }, 0)
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap-chat {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
.chat-messages {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  bottom: 80px;
  overflow-y: auto;
}
.chat-form {
  position: absolute;
  bottom: 0;
  padding: 1rem;
  right: 0;
  left: 0;
  height: 80px;
  background: #363636;
}
</style>