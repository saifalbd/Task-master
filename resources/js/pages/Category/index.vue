<template>
    <app-layout>
        <div>
            <page-title-box title="Categories">
                <va-button round @click="showCreate = true"
                    >Add Category</va-button
                >
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
        />
        <pagination :links="links" @page="fetchItems"></pagination>
        <create v-model:show="showCreate" @push="push"></create>
    </app-layout>
</template>

<script>
import AppLayout from "../../Layouts/app-layout.vue";
import PageTitleBox from "../../Components/PageTitleBox.vue";
import Pagination from '../../Components/Pagination.vue'
import Create from "./Create.vue";
import { ref } from "@vue/reactivity";
export default {
    components: {
        AppLayout,
        PageTitleBox,
        Pagination,
        Create,
    },
    setup() {
        const items = ref([]);
        const showCreate = ref(false);
        const links = ref([])
       
        const perPage = ref(10)
        const fetchItems = async (page) => {
            const url = route("category.index",{perPage:perPage.value,page:page});
            const { data } = await axios.get(url);
            links.value = data.links
            console.log({l:data.links})
            items.value = data.data
        };
        fetchItems(1);
        const push = (category) => {
            showCreate.value = false;
             items.value.push(category)
        };
        const sortBy = ref("title");
        const columns = [
            { key: "id", sortable: true, sortingOptions: ["desc", "asc"] },
            { key: "title", sortable: true },
        ];
        const sortingOrder = ref("asc");
        return { showCreate,perPage, sortingOrder, items, columns, sortBy, push,fetchItems,links };
    },
};
</script>

<style lang="scss" scoped>
.right {
    display: flex;
    justify-content: flex-end;
}
</style>
