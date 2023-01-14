import { defineStore } from "pinia";

export const mainStore = defineStore("index", {
    state() {
       return {
        user: null,
        token:"22|88EkQB1jzzwshhWBxVClBvmbQ1nn90Zy5coUmEcv",
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
