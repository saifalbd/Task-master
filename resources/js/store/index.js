import { defineStore } from "pinia";

export const mainStore = defineStore("index", {
    state() {
       return {
        user: null,
        token:'5|K1PAf2YLkMrejZBlfgoChQf6H9jluaAcl44TB6hl',
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
