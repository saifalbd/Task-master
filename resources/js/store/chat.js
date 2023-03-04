import { defineStore } from "pinia";
import { playNotification } from "../Plugins/utility";

export const chatStore = defineStore("chat", {
    state() {
        return {
            users: [],
            totalUnreadCount:0,
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
        increaseTotalUnread(val){
            this.totalUnreadCount =+val;
        
        },
        increaseUnread(user_id,val){
            this.users = this.users.map(item=>{
                if(item.id == user_id){
                    item.unReadCount= item.unReadCount+val;
                }
                return item;
            });
            this.totalUnreadCount =this.totalUnreadCount+val;
            playNotification();
          
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
