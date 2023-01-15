<template>
    <form-dialog
        :show="props.show"
        @update:show="emit('update:show', $event)"
        :busy="busy"
        title="Create Team"
        @add="save"
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
    },

    setup(props, { emit }) {
        let busy = ref(false);
        const form = ref(null);
        let title = ref("");
        let manager = ref(null);
        let category = ref(null);
        let members = ref([]);

        watch(manager,(manager)=>{
            members.value = members.value.filter(e=>e!=manager);
        })

        const save = async () => {
            let valid = await form.value.validate();
            if (!valid) return null;
            try {
                const { data } = await axios.post(route("team.store"), {
                    title: title.value,
                    manager_id: manager.value,
                    category_id: category.value,
                    members: members.value,
                });
                emit(
                    "push",
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
