<template>
  <app-layout :busy="busy">
    <div>
      <page-title-box title="Chats"></page-title-box>
    </div>
    <div class="chat-layout full-screen">
      <div class="chat-side-bar">
        <va-list>
          <va-list-label class="mb-3"> Contacts </va-list-label>

          <va-list-item
            :class="{
              list__item: true,
              active: user.active,
            }"
            v-for="(user, index) in users"
            :key="index"
            :disabled="false"
            @click="chatHistory(user)"
          >
            <va-list-item-section avatar>
              <va-badge dot :color="user.isOnline ? 'success' : 'secondary'">
                <va-avatar size="small">
                  <!-- <img :src="contact.img"> -->
                </va-avatar>
              </va-badge>
            </va-list-item-section>

            <va-list-item-section>
              <va-list-item-label>
                <b> {{ user.name }}</b>
              </va-list-item-label>

              <va-list-item-label>
                <small>{{ user.position }}</small>
              </va-list-item-label>
              <va-list-item-label caption>
                {{ user.lastMessage }}
              </va-list-item-label>
            </va-list-item-section>
            <va-list-item-section icon>
              <b>{{ user.unReadCount }}</b>
            </va-list-item-section>
          </va-list-item>
        </va-list>
      </div>
      <div class="chat-main-bar" id="chatMainBar">
        <div class="current-info" v-if="currentUser">
          <div class="left">
            <div class="avatar-box" v-if="currentUser.avatar">
              <img :src="currentUser.avatar.url" alt="" srcset="" />
            </div>
            <div>
              <div class="name">{{ currentUser.name }}</div>
              <div class="position">
                {{ currentUser.position }}
              </div>
            </div>
          </div>
        </div>
        <div class="input-box-layout">
          <small><b v-if="typing">typing...</b></small>
          <div class="input-box" :class="{ busy: sendBusy }">
            <div class="attach-box" id="attachBox">
              <button>
                <va-icon name="attach_file"></va-icon>
              </button>
            </div>
            <input
              class="text-input"
              type="text"
              v-model="text"
              @focus="isTyping(true)"
              @blur="isTyping(false)"
              @keyup.enter="send"
            />
            <button @click="send">Send</button>
            <div class="input-loader">loading ...</div>
          </div>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
import { computed, onMounted, reactive, ref } from "vue";
import AppLayout from "../../Layouts/app-layout.vue";
import PageTitleBox from "../../Components/PageTitleBox.vue";
import { debounce, head, trim } from "lodash";
import { mainStore } from "../../store/index";
import { ChatContent } from "./ChatItem";
import { chatStore } from "../../store/chat.js";
import { mount } from "redom";
import { attachBox } from "./AttachModel";
export default {
  components: {
    AppLayout,
    PageTitleBox,
  },
  setup() {
    const chatSt = chatStore();
    const users = reactive(chatSt.users)
    const main = mainStore();
    const sendBusy = ref(false);
    const typing = ref(false);
    const channel = Echo.join("chat")
      .joining((user) => {
        axios.put(route("online", { user: user.id }));
      })
      .leaving((user) => {
        axios.put(route("offline", { user: user.id }), {});
      });

    const listen = () => {
      try {
        channel
          .listen("UserOnline", (user) => {
            statusUpdate(user.id, 1);
          })
          .listen("UserOffline", (user) => {
            statusUpdate(user.id, 0);
          })
          .listenForWhisper("typing", (e) => {
            let user_id = e.user;
            const current_id = currentUser.value.id;
            if (current_id == user_id) {
              typing.value = e.typing;
            }
          })
          .listen("ChatEvent", (message) => {
            const sender_id = message.sender_id;
            const current_id = currentUser.value.id;
            console.log({ sender_id, current_id, auth_id });
            if (sender_id != auth_id) {
              if (current_id == sender_id) {
                let m = messageMixer(message);
                ul.push(m);
                ul.scrollToBottom();
              } else {
                chatSt.increaseUnread(message.sender_id, 1);
              }
            }
          });
      } catch (error) {
        console.error(error);
      }
    };

    listen();

    const isTyping = (typing) => {
      console.log({ typing });
      channel.whisper("typing", {
        user: auth_id,
        typing,
      });
    };

    const auth_id = main.auth_id;
    const busy = ref(false);
    const currentUser = ref(null);
    const text = ref("");

    const ul = new ChatContent();

    const messageMixer = (message) => {
      const { sender_id, receiver_id } = message;
      if (auth_id == sender_id) {
        message.isSend = true;
        // message.avatar = authAvatar;
      } else {
        message.isSend = false;
        // message.avatar = currentUser.value.avatar;
      }
      return message;
    };

    const send = async () => {
      let message = trim(text.value);
      sendBusy.value = true;

      try {
        if (!message) throw "message are Empty";
        if (!currentUser) throw "current user not found";
        const url = route("chat.store");
        const { data } = await axios.post(url, {
          receiver_id: currentUser.value.id,
          message,
        });

        ul.push(messageMixer(data));
        ul.scrollToBottom();
        text.value = "";
      } catch (error) {
        console.error(error);
      }
      sendBusy.value = false;
    };

    const chatHistory = async (user) => {
      let cUser = currentUser.value;
      typing.value = false;

      if (cUser) {
        if (cUser.id == user.id) {
          return null;
        }
      }
      ul.removeCollection();
      currentUser.value = user;
      users.forEach((item) => (item.active = false));
      user.active = true;

      try {
        const url = route("chat.index", { receiver_id: user.id });
        const { data } = await axios.get(url);
        let items = data.map((item) => messageMixer(item));
        mount(document.getElementById("chatMainBar"), ul);
        ul.pushCollection(items);
        ul.scrollToBottom();
      } catch (error) {
        console.error(error);
      }
    };

    const statusUpdate = (user_id, status) => {
      const user = users.find((u) => u.id == user_id);
      if (user) {
        user.isOnline = !!status;
      }
    };

    const attachCallBack = async (message, file) => {
      try {
        if (!currentUser.value) throw new Error(`CurrentUser Not Found`);
        const url = route("chat.store");
        const formData = new FormData();
        formData.append("message", message);
        formData.append("receiver_id", currentUser.value.id);
        formData.append("file", file);
        const { data } = await axios.post(url, formData);
        ul.push(messageMixer(data));
        ul.scrollToBottom();
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      let firstUser = head(users);
      if (firstUser) {
        chatHistory(firstUser);
      }

      mount(document.getElementById("attachBox"), attachBox(attachCallBack));
    });

    return {
      busy,
      sendBusy,
      users,
      currentUser,
      chatHistory,
      text,
      send,
      typing,
      isTyping,
    };
  },
};
</script>

<style lang="scss">
</style>