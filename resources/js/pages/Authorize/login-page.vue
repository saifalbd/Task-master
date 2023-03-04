<template>
  <div class="login-page">
    <form method="post">
      <div class="imgcontainer">
        <!-- <img src="img_avatar2.png" alt="Avatar" class="avatar"> -->
      </div>

      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          v-model="userName"
          required
        />
        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          v-model="password"
          required
        />
        <div class="login-btn-box">
          <button type="button" class="login-btn" @click="login">Login</button>
        </div>
      </div>
      <div class="container" style="background-color: #f1f1f1">
        <a class="" href="/register">Are You Not Registard?Register Here</a>
        <span class="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent, ref,onMounted } from "vue";
import { mainStore } from "../../store";
import {useRouter} from 'vue-router';
import { playNotification, whenLogout } from "../../Plugins/utility";

export default defineComponent({
  setup() {
    const main = mainStore();
    const router = useRouter();
    const userName = ref("");
    const password = ref("");

    // whenLogout();

  

    const login = async () => {
      
      try {
        const url = "/login";
        const { data } = await axios.post(url, {
          email:userName.value,
          password:password.value,
        });

        main.addToken(data.token);
        main.addUser(data.user);

        router.push({ name: "home" });

        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

   
    return { userName, password, login };
  },
});
</script>

<style scoped></style>
