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
                    <div class="page-title">
                        {{ props.title }}
                    </div>
                    <div class="right-side">
                        <slot name="custom"></slot>
                        <va-button size="small">Logout</va-button>
                    </div>
                </div>
                <div class="page-content">
                    <slot></slot>
                </div>
            </div>
        </div>
        <!-- <form-dialog title="Create Category"></form-dialog> -->
    </div>
</template>

<script setup>
import AsideBar from "./aside-bar.vue";
// import FormDialog from "../Components/FormDialog.vue";
import { defineProps, ref } from "vue";
const props = defineProps({
    title: { type: String, default: "title" },
    showInfoBar: { type: Boolean, default: false },
});
</script>

<style scoped></style>
