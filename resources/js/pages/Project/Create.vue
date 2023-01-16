<template>
    <form-dialog
        :show="props.show"
        @update:show="emit('update:show', $event)"
        :busy="busy"
        title="Create Project"
        @add="save"
        :fullscreen="true"
    >
        <va-form ref="form">
            <div class="layout gutter--md">
                <div class="row align-content--center">
                    <div class="flex xs12 in-box">
                        <va-input
                            v-model="title"
                            label="Title *"
                            placeholder="Title Here"
                            :rules="rs('title', true)"
                        />
                    </div>
                    <div class="flex xs12 in-box">
                        <va-select
                            v-model="manager"
                            label="Project Manager *"
                            placeholder="Project Manager Here"
                            :rules="rs('manager', true)"
                            text-by="name"
                            value-by="id"
                            :options="props.employees"
                        />
                    </div>
                    <div class="flex xs12 in-box">
                        <va-select
                            v-model="category"
                            label="Project Category *"
                            placeholder="Category Here"
                            :rules="rs('Category', true)"
                            text-by="title"
                            value-by="id"
                            :options="props.categories"
                        />
                    </div>

                    <div class="flex xs12">
                        <h1>Project Assignment By:-</h1>
                        <va-radio
                            v-for="(option, index) in [
                                { text: 'ByTeam', value: true },
                                { text: 'By Members', value: false },
                            ]"
                            :key="index"
                            v-model="byTeam"
                            :label="option.text"
                            :option="option.value"
                        />
                    </div>

                    <div class="flex xs12 in-box" v-if="byTeam">
                        <va-select
                            v-model="team"
                            label="Project Team*"
                            placeholder="Project Team Here"
                            :rules="rs('team', byTeam)"
                            text-by="title"
                            value-by="id"
                            :options="props.teams"
                        />
                    </div>

                    <div class="flex xs12 in-box" v-else>
                        <va-select
                            v-model="members"
                            label="Project Employees *"
                            placeholder="Project Employee Here"
                            :rules="rs('members',!byTeam)"
                            multiple
                            searchable
                            text-by="name"
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
                    <div class="flex xs12 mb-2" v-if="!byTeam && members.length > 1">
                        <h1>Project Leader:-</h1>
                        <va-radio
                            v-for="(option, index) in members"
                            :key="index"
                            v-model="team_manager"
                            :label="option.name"
                            :option="option.id"
                        />
                    </div>
                    <div class="flex xs6 in-box">
                        <va-input
                            v-model="start"
                            label="Start *"
                            type="date"
                            placeholder="Start Here"
                            :rules="rs('start', true)"
                        />
                    </div>
                    <div class="flex xs6 in-box">
                        <va-input
                            v-model="end"
                            type="date"
                            label="Dead Line *"
                            placeholder="Dead Line Here"
                            :rules="rs('dead line', true)"
                        />
                    </div>
                    <div class="flex xs12 in-box">
                        <va-file-upload v-model="attachments" dropzone />
                    </div>
                    <div class="flex xs12 in-box">
                        <va-input
                            v-model="description"
                            type="textarea"
                            label="Description"
                            placeholder="Description Here"
                            :rules="rs('description', false)"
                        />
                    </div>
                </div>
            </div>
        </va-form>
    </form-dialog>
</template>

<script>
import { ref, watch } from "vue";
import FormDialog from "../../Components/FormDialog.vue";
import { rs } from "../../Plugins/Rule";
import moment from "moment";
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
        teams: {
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
        let team_manager = ref(null); //if byTeam False
        let team = ref(null);
        const start = ref(moment().format(dateFormat));
        const end = ref(null);
        const description = ref("");
        const attachments = ref([]);

        let byTeam = ref(false);

        watch(members, (list) => {
            if (!list.map((e) => e.value).includes(team_manager)) {
                team_manager.value = null;
            }
        });

        const save = async () => {
            let url = route("project.store");
            let valid = await form.value.validate();
           if (!valid) return null;
            try {
                const { data } = await axios.post(url, {
                    title: title.value,
                    manager: manager.value,
                    category: category.value,
                    members: members.value.map((e) => e.id),
                    team: team.value,
                    team_manager:team_manager.value,
                    byTeam: byTeam.value ? 1 : 0,
                    start: start.value,
                    end: end.value,
                    attachments: attachments.value,
                    description: description.value,
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

        return {
            props,
            form,
            emit,
            save,
            rs,
            busy,
            byTeam,
            team_manager,
            team,
            title,
            start,
            end,
            manager,
            category,
            members,
            description,
            attachments,
        };
    },
};
</script>

<style lang="scss" scoped></style>
