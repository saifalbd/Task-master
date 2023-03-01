import { defineStore } from "pinia";

export const mainStore = defineStore("index", {
    state() {
       return {
        user: null,
        avatar:null,
        auth_id:1,
        token:"147|ojTNqClvxokKw9JUWKIyVTbjONxIc2cd95boF6uO",
        showProfileModal:false
       }
    },
    actions: {
        addUser(user) {
            const {id,avatar} = user;
            this.auth_id = id;
            if(avatar){
                this.avatar = avatar;
            }else{
                this.showProfileModal = true;
            }
          
            this.user = user;
        },
        addToken(token) {
            this.token = token;
        },
        updateAvatar(avatar){
            this.avatar = avatar;
        },
        hideProfileModal(){
            this.showProfileModal = false;
        }
    },
  

});
