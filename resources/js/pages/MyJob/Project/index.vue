<template>
    <app-layout>
        <div>
            <page-title-box title="My Projects"> </page-title-box>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "../../../Layouts/app-layout.vue";
import PageTitleBox from "../../../Components/PageTitleBox.vue";

export default {
    components: {
        AppLayout,
        PageTitleBox,
    },
    setup() {
        // Start Propertis

        return {};
    },
};
</script>

<style lang="scss" scoped>
.right {
    display: flex;
    justify-content: flex-end;
}
</style>
