<template>
    <app-layout>
        <div>
            <page-title-box></page-title-box>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "../Layouts/app-layout.vue";
import PageTitleBox from "../Components/PageTitleBox.vue";
export default {
    components: {
        AppLayout,
        PageTitleBox,
    },
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped></style>
