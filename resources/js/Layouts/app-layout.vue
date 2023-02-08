<script setup>
import AsideBar from "./aside-bar.vue";
import { defineProps,ref } from "vue";
import {notificationStore} from '../store/notification';
import NotificationModel from './notificationModel.vue';
import {useRouter} from 'vue-router';
const props = defineProps({
    title: { type: String, default: "title" },
    showInfoBar: { type: Boolean, default: false },
});
const router = useRouter();
const notifyStore = notificationStore();
notifyStore.notificationsFetch();

const logout = ()=>{
    
    router.push({name:'login'})
}


</script>
<template>
    <div class="main-layout">
        <div class="info-bar" :class="{ show: showInfoBar }">
            <div class="info-bar-body">
                <slot name="info"></slot>
            </div>
        </div>
        <div class="asside">
            <aside-bar></aside-bar>
        </div>
        <div class="main-content">
            <div class="inner">
                <div class="top-nav">
                    <div class="page-title">Task Master</div>
                    <div class="right-side">
                        <slot name="custom"></slot>
                        <va-badge class="notification-icon" :text="notifyStore.count" overlap @click="notifyStore.toggleNodal(true)">
                            <va-avatar size="small">
                                <va-icon size="small" name="notifications"></va-icon>
                            </va-avatar>
                        </va-badge>
                        <va-button class="ml-4" size="small" preset="primary" round @click="logout"
                            ><va-icon size="small" name="lock" ></va-icon
                            ><span class="mx-2">Logout</span></va-button
                        >
                    </div>
                </div>
                <div class="page-content">
                    <slot></slot>
                </div>
            </div>
        </div>
        <NotificationModel  :show="notifyStore.showModal" @update:show="notifyStore.toggleNodal($event)" @close="notifyStore.toggleNodal(false)"></NotificationModel>
    </div>
</template>
