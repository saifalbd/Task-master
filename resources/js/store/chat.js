import { defineStore } from "pinia";

export const chatStore = defineStore("chat", {
    state() {
        return {
            users: [],
        };
    },
    actions: {
        async fetchChatUsers(callBack) {
            try {
                const { data } = await axios.get(route("chatUsers"));
                this.users = data.map((item,index) => {
                    item.active = !index;
                    item.messages = [];
                    return item;
                });
                callBack(this.users)
            } catch (error) {
                console.error(error);
            }
        },
        listen(callBack) {
          Echo.join("chat")
                .joining((user) => {
                    axios.put(route("online", { user: user.id }));
                })
                .leaving((user) => {
                    axios.put(route("offline", { user: user.id }), {});
                })
                .listen("UserOnline", (user) => {
                    const item = this.users.find((u) => u.id == user.id);
                    if (item) {item.isOnline = true;}
                  })
                  .listen("UserOffline", (user) => {
                    const item = this.users.find((u) => u.id == user.id);
                    if (item) {item.isOnline = false;}
                  })
                  .listen("ChatEvent", (message) => {
                   callBack(message)
                  })
        },
    },
});
