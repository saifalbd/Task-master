<template>
    <va-modal
        v-model="show"
        :fullscreen="props.fullscreen"
        hide-default-actions
        no-outside-dismiss
        class="form-sceen"
    >
        <va-inner-loading :loading="props.busy">
            <div class="layout va-gutter-1">
                <div class="row">
                    <div class="flex xs12">
                        <div class="item mb-4">
                            <div class="form-title">
                                <va-icon class="material-icons">add</va-icon>
                                <span class="text">{{ title }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex xs12">
                        <div class="item">
                            <slot></slot>
                        </div>
                    </div>
                    <div class="flex xs12">
                        <div class="item actions-btns">
                            <va-button
                                color="danger"
                                size="small"
                                @click="close"
                                ><va-icon class="material-icons">close</va-icon>
                                Close</va-button
                            >
                            <va-button size="small" @click="add">
                                <va-icon class="material-icons">add</va-icon>
                                {{props.isEdit?'Replace':'Add'}}
                            </va-button>
                        </div>
                    </div>
                </div>
            </div>
        </va-inner-loading>
    </va-modal>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    model: {
        prop: "show",
        event: "change",
    },
    props: {
        show: {
            type: Boolean,
            default: true,
        },
        isEdit: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            required: true,
        },
        busy: {
            type: Boolean,
            default: false,
        },
        fullscreen: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { emit }) {
        const close = () => {
            emit("update:show", false);
        };
        const add = () => {
            emit("add", true);
        };
        return {
            props,
            close,
            add,
        };
    },
});
</script>

<style scoped lang="scss">
.form-title {
    .text {
        font-weight: bold;
    }
}
.actions-btns {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    button {
        margin: 0 5px;
    }
}
</style>
