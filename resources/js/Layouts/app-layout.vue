<script setup>
import AsideBar from "./aside-bar.vue";
import { defineProps } from "vue";
const props = defineProps({
    title: { type: String, default: "title" },
    showInfoBar: { type: Boolean, default: false },
});
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
                        <va-badge class="notification-icon" text="+3" overlap>
                            <va-avatar size="small">
                                <va-icon size="small" name="notifications"></va-icon>
                            </va-avatar>
                        </va-badge>
                        <va-button class="ml-4" size="small" preset="primary" round
                            ><va-icon size="small" name="lock"></va-icon
                            ><span class="mx-2">Logout</span></va-button
                        >
                    </div>
                </div>
                <div class="page-content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>
