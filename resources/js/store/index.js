import { defineStore } from "pinia";

export const mainStore = defineStore("index", {
    state() {
       return {
        user: null,
        token:"91|5BKpjz0pxfdaoc0B4Vr7wPWCMRmKYCtd5fFLPQQY",
        //19|JTUPUmNLubbL2BqupstUdXqbnkciwuXcaemYoTSN
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
