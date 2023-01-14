<template>
    <div class="login-page">
        <form action="/action_page.php" method="post">
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
                    <button type="button" class="login-btn" @click="login">
                        Login
                    </button>
                </div>
            </div>
            <div class="container" style="background-color: #f1f1f1">
                <a class="" href="/#/register"
                    >Are You Not Registard?Register Here</a
                >
                <span class="psw">Forgot <a href="#">password?</a></span>
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
            userName: "test@gmail.com",
            password: "12345",
        };
    },
    methods: {
        async login() {
            try {
                const url = "/login";
                const { data } = await axios.post(url, {
                    email: this.userName,
                    password: this.password,
                });
                const main = mainStore();

                 main.addToken(data.token)
                 main.addUser(data.user);

                this.$router.push({ name: "home" });

                console.log(data);
            } catch (error) {
                console.error(error);
            }
        },
    },
    created() {},
});
</script>

<style scoped></style>
