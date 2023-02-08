import { defineStore } from "pinia";

export const mainStore = defineStore("index", {
    state() {
       return {
        user: null,
        token:"19|JTUPUmNLubbL2BqupstUdXqbnkciwuXcaemYoTSN",
       }
    },
    actions: {
        addUser(user) {
            this.user = user;
        },
        addToken(token) {
            this.token = token;
        },
    },
});
