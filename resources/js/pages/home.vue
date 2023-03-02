<template>
    <app-layout :busy="busy">
        <div>
            <page-title-box></page-title-box>
        </div>
        <!-- <test></test> -->
    </app-layout>
</template>

<script>
import AppLayout from "../Layouts/app-layout.vue";
import PageTitleBox from "../Components/PageTitleBox.vue";
import Test from './test.vue';
import {ref} from 'vue';
export default {
    components: {
        AppLayout,
        PageTitleBox,
        Test
    },
    setup() {
        const busy = ref(false)
        return {busy};
    },
};
</script>

<style lang="scss" scoped></style>
