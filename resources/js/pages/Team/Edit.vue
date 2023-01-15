<template>
    <form-dialog
        :show="props.show"
        @update:show="emit('update:show', $event)"
        :busy="busy"
        title="Edit Team"
        @add="save"
        is-edit
        fullscreen
    >
        <va-form ref="form">
            <div class="layout gutter--lg">
                <div class="row align-content--center">
                    <div class="flex xs12">
                        <va-input
                            v-model="title"
                            label="Title *"
                            placeholder="Title Here"
                            :rules="rs('title', true)"
                        />
                    </div>
                    <div class="flex xs12 mt-2">
                        <va-select
                            v-model="manager"
                            label="Team Manager *"
                            placeholder="Team Manager Here"
                            :rules="rs('teamManager', true)"
                            text-by="name"
                            value-by="id"
                            :options="props.employees"
                        />
                    </div>
                    <div class="flex xs12 mt-2">
                        <va-select
                            v-model="category"
                            label="Team Category *"
                            placeholder="Category Here"
                            :rules="rs('Category', true)"
                            text-by="title"
                            value-by="id"
                            :options="props.categories"
                        />
                    </div>

                    <div class="flex xs12 mt-2">
                        <va-select
                            v-model="members"
                            label="Team Members *"
                            placeholder="Team Members Here"
                            :rules="rs('members', true)"
                            multiple
                            searchable
                            text-by="name"
                            value-by="id"
                            :options="
                                props.employees.filter((e) => e.id != manager)
                            "
                        >
                            <template #content="{ value }">
                                <va-chip
                                    v-for="chip in value"
                                    :key="chip"
                                    size="small"
                                    class="mr-1 my-1"
                                    closeable
                                    @update:modelValue="deleteChip(chip)"
                                >
                                    {{ chip.name }}
                                </va-chip>
                            </template>
                        </va-select>
                    </div>
                </div>
            </div>
        </va-form>
    </form-dialog>
</template>

<script>
import { ref,watch } from "vue";
import FormDialog from "../../Components/FormDialog.vue";
import { rs } from "../../Plugins/Rule";
export default {
    components: { FormDialog },

    props: {
        show: {
            type: Boolean,
            default: false,
        },
        employees: {
            type: Array,
            required: true,
        },
        categories: {
            type: Array,
            required: true,
        },
        item:{
            type:Object,
            required:true
        }
    },

    setup(props, { emit }) {
        let item = ref(props.item);
        let busy = ref(false);
        const form = ref(null);
        let title = ref(item.value.title);
        let manager = ref(item.value.manager_id);
        let category = ref(item.value.category_id);
        let members = ref(item.value.members.map(e=>e.id));

        watch(manager,(manager)=>{
            members.value = members.value.filter(e=>e!=manager);
        })
        watch(props.item,(o)=>{
            item.value = o;
           members.value= o.members.map(e=>e.id);
           title.value = o.title;
           manager.value = o.manager_id;
           category.value = o.category_id;
            
        })

        const save = async () => {
            let valid = await form.value.validate();
            if (!valid) return null;
            try {
                const { data } = await axios.put(route("team.update",{team:item.value.id}), {
                    title: title.value,
                    manager_id: manager.value,
                    category_id: category.value,
                    members: members.value,
                });
                emit(
                    "replace",
                    addProtos(data, {
                        action: true,
                        showEdit: false,
                    })
                );
            } catch (error) {
                console.error(error);
                validErorrs(error);
            }
        };

        const deleteChip = (chip) => {
            members.value = members.value.filter((v) => v !== chip.id);
        };

        return {
            props,
            form,
            emit,
            save,
            deleteChip,
            busy,
            rs,
            title,
            manager,
            category,
            members,
        };
    },
};
</script>

<style lang="scss" scoped></style>
