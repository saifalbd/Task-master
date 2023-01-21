<template>
    <app-layout>
        <div>
            <page-title-box title="Task">
                <create-button
                    title="Add Task"
                    @click="showCreate = true"
                ></create-button>
            </page-title-box>
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

        <va-data-table
            :items="items"
            :columns="columns"
            :hoverable="true"
            v-model:sort-by="sortBy"
            v-model:sorting-order="sortingOrder"
        >
            <template #cell(members)="{ rowData }">
                <va-chip
                    size="small"
                    v-for="member in rowData.members"
                    :key="member.id"
                    >{{ member.name }}</va-chip
                >
            </template>
            <template #cell(status)="{value}">
                <va-button preset="plain" :color="['plain','success'].at(value)" split>{{['pending','success'].at(value)}}</va-button>
            </template>
            <template #cell(action)="{ rowData, rowIndex }">
                <remove-edit-button
                :isView="true"
                @viewClick="router.push({name:'task.show',params:{id:rowData.id}})"
                    @editClick="rowData.showEdit = true"
                    @removeClick="remove(rowData, rowIndex)"
                >
                    <edit
                        v-model:show="rowData.showEdit"
                        :item="rowData"
                        :employees="employees"
                        :categories="categories"
                        
                        @replace="replace($event, rowIndex)"
                    ></edit>
                </remove-edit-button>
            </template>
        </va-data-table>
        <pagination :links="links" @page="fetchItems"></pagination>
        <create
            v-model:show="showCreate"
            :employees="employees"
            :categories="categories"
            
            @push="push"
        ></create>
    </app-layout>
</template>

<script>
import AppLayout from "../../Layouts/app-layout.vue";
import PageTitleBox from "../../Components/PageTitleBox.vue";
import Pagination from "../../Components/Pagination.vue";
import RemoveEditButton from "../../Components/RemoveEditButton.vue";
import Create from "./Create.vue";
import Edit from "./Edit.vue";
import { ref } from "vue";
import CreateButton from "../../Components/CreateButton.vue";
import { confirm, removeSuccess } from "../../Plugins/utility";
import { useToast } from "vuestic-ui";
import { useRouter, useRoute } from 'vue-router'
export default {
    components: {
        AppLayout,
        PageTitleBox,
        Pagination,
        Create,
        Edit,
        CreateButton,
        RemoveEditButton,
    },
    setup() {
        // Start Propertis
        const toast = useToast();
        const router = useRouter();
        
        const items = ref([]);
        const employees = ref([]);
        const categories = ref([]);
        const showCreate = ref(false);
        const links = ref([]);

        const perPage = ref(10);
        const sortBy = ref("title");
        const columns = [
            { key: "id", sortable: true, sortingOptions: ["desc", "asc"] },
            { key: "title", sortable: true },
          
            { key: "category.title", label: "Category", sortable: true },
              { key: "employee.name", label: "Employee", sortable: true },
            { key: "start", label: "Start", sortable: true },
            { key: "end", label: "Dead Line", sortable: true },
 
            { key: "status", sortable: true },
            {
                key: "action",
                thAlign: "right",
                tdAlign: "right",
            },
        ];
        const sortingOrder = ref("asc");

        // START METHODS
        axios
            .get(route("employee.index", { all: true }))
            .then(({ data }) => (employees.value = data));
        axios
            .get(route("category.index", { all: true }))
            .then(({ data }) => (categories.value = data));
   
        const fetchItems = async (page) => {
            const url = route("task.index", {
                perPage: perPage.value,
                page: page,
            });
            const { data } = await axios.get(url);
            links.value = data.links;
            items.value = addProtos(data.data, {
                action: true,
                showEdit: false,
            });
        };
        fetchItems(1);
        const push = (projrct) => {
            showCreate.value = false;
            items.value.push(projrct);
        };
        const replace = (project, index) => {
            showCreate.value = false;
            items.value.splice(index, 1, project);
        };

        const remove = async (item, index) => {
            const is = await confirm(item, "Task", "title");
            if (!is) return null;
            try {
                const url = route("task.destroy", { task: item.id });
                await axios.delete(url);
                items.value.splice(index, 1);
                removeSuccess(toast);
            } catch (error) {
                console.log(error);
            }
        };

        return {
            showCreate,
            perPage,
            sortingOrder,
            items,
            columns,
            sortBy,
            push,
            replace,
            fetchItems,
            employees,
            categories,
            remove,
            links,
            router
        };
    },
};
</script>

<style lang="scss" scoped>
.right {
    display: flex;
    justify-content: flex-end;
}
</style>
