<template>
    <app-layout>
        <div>
            <page-title-box></page-title-box>
        </div>
        <test></test>
    </app-layout>
</template>

<script>
import AppLayout from "../Layouts/app-layout.vue";
import PageTitleBox from "../Components/PageTitleBox.vue";
import Test from './test.vue';
export default {
    components: {
        AppLayout,
        PageTitleBox,
        Test
    },
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped></style>
