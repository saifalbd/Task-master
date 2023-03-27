<script>
import AsideBar from "./asideBar.vue";
import { computed, defineComponent, ref, onMounted } from "vue";
import { notificationStore } from "../store/notification";
import NotificationModel from "./notificationModel.vue";
import ProfileEditModal from "./ProfileEditModal.vue";
import { mainStore } from "../store/index";
import { chatStore } from "../store/chat";
import { useRouter } from "vue-router";
import ChatModal from "./ChatModal.vue";
import { whenLogout } from "../Plugins/utility";
import { breakpointsTailwind, useBreakpoints, useResizeObserver } from '@vueuse/core'
import {
DArrowLeft,DArrowRight
} from "@element-plus/icons-vue";
export default defineComponent({
  components: {
    AsideBar,
    NotificationModel,
    ProfileEditModal,
    ChatModal,
DArrowLeft,
DArrowRight
  },
  props: {
    title: { type: String, default: "title" },
    showInfoBar: { type: Boolean, default: false },
    busy: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const main = mainStore();
    const chat = chatStore();
     const el = ref(null)
    const lg = ref(false);
    const chatUnreadcount = computed(() => chat.totalUnreadCount);
    let token = main.token;
    let user = main.user;
    let avatar = main.avatar;
    let showProfileModal = computed(() => main.showProfileModal);
    let showChatModal = ref(false);
    if (token) {
      window.Echo.connector.options.auth.headers[
        "Authorization"
      ] = `Bearer ${token}`;
    }

    const router = useRouter();
    const notifyStore = notificationStore();
    notifyStore.notificationsFetch();

    const logout = () => {
      whenLogout();
      router.push({ name: "login" });
    };

    const chatIconBusy = ref(false);
    const goChat = () => {
      if (!chat.users.length) {
        chatIconBusy.value = true;
        chat.fetchChatUsers(() => {
          chatIconBusy.value = false;
          router.push({ name: "chat" });
        });
      } else {
        router.push({ name: "chat" });
      }
    };

    const goProfile = ()=>{
      router.push({name:'profile'})
    }

       const responsive  = ()=>{
      const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanSm = breakpoints.greater('sm') // only larger than sm

lg.value = largerThanSm.value;
    }

 useResizeObserver(el, (entries) => {
      responsive();
    })



    onMounted(() => {
     
      axios.get(route("chatUnreadcount")).then(({ data }) => {
        chat.increaseTotalUnread(data);
      });
    });

    return {
      lg,
      avatar,
      props,
      notifyStore,
      user,
      showProfileModal,
      showChatModal,
      chatUnreadcount,
      chatIconBusy,
      logout,
      goChat,
      goProfile
    };
  },
});
</script>
<template>
<div ref="el" class="main-layout" :class="{lg}">
    <div class="info-bar" :class="{ show: props.showInfoBar }">
      <div class="info-bar-body">
        <slot name="info"></slot>
      </div>
    </div>
    
    <div class="asside">
      <AsideBar :lg="!!lg"></AsideBar>
    </div>
    <div class="main-content">
      <div class="inner">
        <div class="top-nav">
       
          <div class="page-title">
            <el-button round @click="lg=!lg">
              <el-icon v-if="lg"><DArrowLeft /></el-icon>
              <el-icon v-else><DArrowRight /></el-icon>
              </el-button>
            <span class="hidden-sm-and-down">Task Master</span>
            </div>
          <div class="right-side">
            <slot name="custom"></slot>
            <va-badge
              class="notification-icon"
              :text="notifyStore.count"
              overlap
              @click="notifyStore.toggleNodal(true)"
            >
              <va-avatar size="small">
                <va-icon size="small" name="notifications"></va-icon>
              </va-avatar>
            </va-badge>
            <va-badge :text="chatUnreadcount" overlap>
              <va-inner-loading :loading="chatIconBusy">
                <va-avatar @click="goChat" size="small">
                  <va-icon size="small" name="message"></va-icon>
                </va-avatar>
              </va-inner-loading>
            </va-badge>

            <span class="profile-badge-box" v-if="user" @click="goProfile">
              <va-avatar
                size="small"
                v-if="avatar"
                :src="avatar.url"
                :alt="avatar.path"

              >
              </va-avatar>
              <va-avatar size="small" icon="person" v-else> </va-avatar>

              <span>
                {{ user.name }}
              </span>
              <span>
                <va-icon size="small" name="expand_more"></va-icon>
              </span>
              <!-- <div class="">
                dds
              </div> -->
            </span>
            <va-button
              class="ml-4"
              size="small"
              preset="primary"
              round
              @click="logout"
              ><va-icon size="small" name="lock"></va-icon
              ><span class="mx-2">Logout</span></va-button
            >
          </div>
        </div>
        <div class="page-content">
          <va-inner-loading :loading="props.busy" :size="60">
            <slot></slot>
          </va-inner-loading>
        </div>
      </div>
    </div>
    <NotificationModel
      :show="notifyStore.showModal"
      @update:show="notifyStore.toggleNodal($event)"
      @close="notifyStore.toggleNodal(false)"
    ></NotificationModel>
    <!-- <ProfileEditModal :show="showProfileModal"></ProfileEditModal> -->
    <!-- <ChatModal v-model:show="showChatModal"></ChatModal> -->
  </div>
</template>

<style lang="scss" scoped>
.right-side {
  display: grid;
  grid-template-columns: repeat(3, auto);
  .va-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 20px;
      aspect-ratio: 1;
    }
  }
}
</style>
