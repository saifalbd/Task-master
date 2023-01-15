import { defineStore } from "pinia";

export const mainStore = defineStore("index", {
    state() {
       return {
        user: null,
        token:'7|yTF7wAeEOnwd1iHBTH8ZwS2SUg9IbjFTd2ONgzIt',
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
