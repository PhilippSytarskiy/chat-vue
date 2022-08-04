<template>
  <v-main>
    <v-container fluid>
      <v-card class="mx-auto" max-width="344">
        <v-card-title>Авторизация</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Имя"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4 mt-2"
              @click="auth"
            >
              Войти
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import { da } from "vuetify/lib/locale";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Имя обязательно",
        // (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
    };
  },

  methods: {
    ...mapMutations(["setUser"]),

    auth() {
      if (this.$refs.form.validate()) {
        const user = {
          name: this.name,
        };

        this.$socket.emit("userJoined", user, (data) => {
          if (typeof data === "string") {
          } else {
            user.id = data.userId;
            this.setUser(user);
            this.$emit("setJoin", true);
            this.$router.push("/chat");
          }
        });
      }
    },
  },
};
</script>