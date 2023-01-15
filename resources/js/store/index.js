import { defineStore } from "pinia";

export const mainStore = defineStore("index", {
    state() {
       return {
        user: null,
        token:"3|H9JrJfgmjGrDlZOSwb6n4p5J4WPXxVKYWCzal7fQ",
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
