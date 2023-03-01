<template>
    <app-layout :busy="busy">
        <div>
            <page-title-box title="Projects">
              
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
                <status-btn :status="value"></status-btn>
            </template>
            <template #cell(action)="{ rowData}">
                <remove-edit-button
                      :isView="true"
                      @viewClick="router.push({name:'job.project.show',params:{id:rowData.id}})"
                    :isDelete="false"
                    :isEdit="false"
                ></remove-edit-button>
            </template>
        </va-data-table>
        <pagination :links="links" @page="fetchItems"></pagination>
      
    </app-layout>
</template>

<script>
import AppLayout from "../../../Layouts/app-layout.vue";
import PageTitleBox from "../../../Components/PageTitleBox.vue";
import Pagination from "../../../Components/Pagination.vue";
import RemoveEditButton from "../../../Components/RemoveEditButton.vue";
import StatusBtn from "../../../Components/statusBtn.vue";
import { ref} from "vue";
import { useRouter } from 'vue-router'
export default {
    components: {
        AppLayout,
        PageTitleBox,
        Pagination,
        RemoveEditButton,
        StatusBtn
    },
    setup() {
        // Start Propertis
        const busy = ref(true)
        const router = useRouter();
        const items = ref([]);
        const links = ref([]);

        const perPage = ref(10);
        const sortBy = ref("title");
        const columns = [
            { key: "id", sortable: true, sortingOptions: ["desc", "asc"] },
            { key: "title", sortable: true },
            { key: "manager.name", label: "Manager", sortable: true },
            { key: "category.title", label: "Category", sortable: true },
            { key: "start", label: "Start", sortable: true },
            { key: "end", label: "Dead Line", sortable: true },
            { key: "team.title", label: "Team", sortable: true },
            { key: "status", sortable: true },
            {
                key: "action",
                thAlign: "right",
                tdAlign: "right",
            },
        ];
        const sortingOrder = ref("asc");

        // START METHODS

        const fetchItems = async (page) => {
          try {
              const url = route("my.project.index", {
                perPage: perPage.value,
                page: page,
            });
            const { data } = await axios.get(url);
            links.value = data.links;
            items.value = addProtos(data.data, {
                action: true,
                showEdit: false,
            });
          } catch (error) {
            console.error(error)
          }
            busy.value = false;
        };
        fetchItems(1);
        
   

        return {
            router,
            perPage,
            sortingOrder,
            items,
            columns,
            sortBy,
           
            fetchItems,
           
     
    
            links,
            busy
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
