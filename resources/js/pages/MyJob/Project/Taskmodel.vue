<template>
    <va-modal
        v-model="props.show"
        :fullscreen="false"
        hide-default-actions
        no-outside-dismiss
        class="form-sceen"
    >
            <div class="layout va-gutter-1">
                <div class="row">
                    <div class="flex xs12">
                        <div class="item mb-4">
                            <div class="form-title">
                               
                                <span class="text">Show Task</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex xs12">
                        <div class="item" v-html="task.description">
                         
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
                          
                        </div>
                    </div>
                </div>
            </div>
    
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
        task:{
            type:Object,
            required:true
        }
        
    },
    setup(props, { emit }) {
        const close = () => {
            emit("update:show", false);
        };
       
        return {
            props,
            close,
      
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
