<template>
  <div class="login-page">
    <form action="/action_page.php" method="post">
      <div class="imgcontainer">
        <!-- <img src="img_avatar2.png" alt="Avatar" class="avatar"> -->
      </div>

      <div class="container">
        <label for="uname"><b>Name</b></label>
        <input
          type="text"
          placeholder="Enter Name"
          name="uname"
          v-model="name"
          required
        />
        <label for="uname"><b>Email</b></label>
        <input
          type="text"
          placeholder="Enter Email"
          name="uname"
          v-model="email"
          required
        />
        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
               v-model="password"
          name="psw"
          required
        />
        <label for="psw"><b>Retype Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          v-model="retypePassword"
          name="psw"
          required
        />
        <div class="login-btn-box">
          <button type="button" class="login-btn" @click="login">
            Register
          </button>
        </div>
      </div>
      <div class="container" style="background-color: #f1f1f1">
        <a class="" href="#/">Are You Registard?Login</a>
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mainStore } from "../../store";

export default defineComponent({
  data() {
    return {
      name: "saiful islam",
      email: "test@gmail.com",
      password: "12345",
      retypePassword: "12345",
    };
  },
  methods: {
    async login() {
      try {
        const url = "/register";
        const { data } = await axios.post(url, {
          name:this.name,
          email: this.email,
          password: this.password,
          password_confirmation:this.retypePassword
        });
        const main = mainStore();

         main.addToken(data.token)
         main.addUser(data.user);

        this.$router.push({ name: "home" });

        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {},
});
</script>

<style scoped></style>
