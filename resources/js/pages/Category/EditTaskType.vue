<template>
    <form-dialog
        :show="props.show"
        @update:show="emit('update:show', $event)"
        :busy="busy"
        title="Edit Cetegory"
           is-edit
        @add="save"
    >
        <va-form ref="form">
            <div class="layout gutter--md">
                <div class="row align-content--center">
                    <div class="flex xs12">
                        <va-input
                            v-model="title"
                            label="Title"
                            placeholder="Title Here"
                              :rules="rs('title',true)"
                        />
                    </div>
               

        

                </div>
            </div>
        </va-form>
    </form-dialog>
</template>

<script>
import { reactive, ref, watch } from "vue";
import FormDialog from "../../Components/FormDialog.vue";
import { validErorrs } from "../../Plugins/utility";
import { rs } from "../../Plugins/Rule";
export default {
    components: { FormDialog },

    props: {
        show: {
            type: Boolean,
            default: false,
        },
        item: {
            type: Object,
            required: true,
        },
    },

    setup(props, { emit }) {
        let busy = ref(false);
        const form = ref(null);
        let item = ref(props.item);
        let title = ref(props.item.title);
    
        watch(props.item, (o) => {
            item.value = o;
            title.value = o.title;
        });

     

        const save = async () => {
            let url = route("taskType.update", { 'task_type': item.value.id });
            let valid = await form.value.validate();
            if (!valid) return null;
            try {
                const { data } = await axios.put(url, { title: title.value });
                item.value.title = title.value;
                emit(
                    "replace",
                    addProtos(item.value, {
                        action: true,
                        showEdit: false,
                    })
                );
            } catch (error) {
                console.error(error)
                validErorrs(error);
            }
        };

        return { props, form, emit, save,rs, title, busy };
    },
};
</script>

<style lang="scss" scoped></style>
