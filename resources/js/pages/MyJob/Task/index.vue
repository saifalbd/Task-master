<template>
    <app-layout :busy="busy">
        <div>
            <page-title-box title="My Task"> </page-title-box>
        </div>
        <div class="row mt-4">
            <div class="flex md6">
                <div class="item">
                    <va-select
                        class="flex mb-2 md6"
                        label="Per Page"
                        v-model="perPage"
                        :options="[10, 20, 30, 40, 50]"
                    />
                </div>
            </div>

            <div class="flex lg6">
                <div class="item right">
                    <va-input class="flex mb-2 md6" label="Search">
                        <template #prepend>
                            <va-icon class="material-icons">search</va-icon>
                        </template>
                    </va-input>
                </div>
            </div>
        </div>

        <div class="va-table-responsive">
            <table class="va-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Assigner</th>
                        <th>Start</th>
                        <th>DeadLine</th>
                        <th>Status</th>
                        <th>Show</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="t in items" :key="t.id">
                    <tr>
                        <td>{{ t.id }}</td>
                        <td>{{ t.title }}</td>
                        <td>{{ t.category.title }}</td>
                        <td>{{ t.assigner.name }}</td>
                        <td>{{ t.start }}</td>
                        <td>{{ t.end }}</td>
                        <td>
                            <va-button
                                preset="plain"
                                :color="['plain', 'success'].at(t.status)"
                                split
                                >{{
                                    ["pending", "success"].at(t.status)
                                }}</va-button
                            >
                        </td>
                        <td>
                              <va-button size="small" round :to="{name:'job.task.show',params:{id:t.id}}">
                                <va-icon name="visibility"></va-icon>
                                <span class="ml-2">Show</span>
                              </va-button>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="8">
                            <p>
                                {{t.description}}
                            </p>
                        </td>
                    </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "../../../Layouts/app-layout.vue";
import PageTitleBox from "../../../Components/PageTitleBox.vue";
import { ref } from "vue";
export default {
    components: {
        AppLayout,
        PageTitleBox,
    },
    setup() {
        const busy = ref(true)
        const items = ref([]);
        const links = ref([]);
        const perPage = ref(10);

        const fetchItems = async () => {
            try {
                const url = route("my.task.index");
                const { data } = await axios.get(url);
                items.value = data.data;
                links.value = data.links;
            } catch (error) {
                console.error(error);
            }
            busy.value = false;
        };
        fetchItems();

        return { items, links, perPage,busy };
    },
};
</script>

<style lang="scss" scoped>
.right {
    display: flex;
    justify-content: flex-end;
}
</style>
