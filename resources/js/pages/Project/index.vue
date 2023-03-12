<template>
  <app-layout :busy="busy">
    <div>
      <page-title-box title="Projects">
        <create-button
          title="Add Project"
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
      <template #cell(status)="{ value }">
        <status-btn :status="value"></status-btn>
      </template>
      <template #cell(action)="{ rowData, rowIndex }">
        <remove-edit-button
          :isView="true"
          @viewClick="
            router.push({ name: 'project.show', params: { id: rowData.id } })
          "
          @editClick="rowData.showEdit = true"
          @removeClick="remove(rowData, rowIndex)"
        >
          <edit
            v-model:show="rowData.showEdit"
            :item="rowData"
            :employees="employees"
            :categories="categories"
            :teams="teams"
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
      :teams="teams"
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
import { ref, onMounted } from "vue";
import CreateButton from "../../Components/CreateButton.vue";
import StatusBtn from "../../Components/statusBtn.vue";
import { confirm, dropdowns, removeSuccess } from "../../Plugins/utility";
import { useRouter, useRoute } from "vue-router";
import { useToast } from "vuestic-ui";
export default {
  components: {
    AppLayout,
    PageTitleBox,
    Pagination,
    Create,
    Edit,
    CreateButton,
    RemoveEditButton,
    StatusBtn,
  },
  setup() {
    // Start Propertis
    const busy = ref(true);
    const toast = useToast();
    const router = useRouter();
    const items = ref([]);
    const employees = ref([]);
    const categories = ref([]);
    const teams = ref([]);
    const showCreate = ref(false);
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
    dropdowns("employees", (data) => {
      employees.value = data;
    });

     dropdowns("categories", (data) => {
      categories.value = data;
    });
 dropdowns("teams", (data) => {
      teams.value = data;
    });

    const fetchItems = async (page) => {
      try {
        const url = route("project.index", {
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
        console.error(error);
      }
      busy.value = false;
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
      const is = await confirm(item, "Project", "title");
      if (!is) return null;
      try {
        const url = route("project.destroy", { project: item.id });
        await axios.delete(url);
        items.value.splice(index, 1);
        removeSuccess(toast);
      } catch (error) {
        console.log(error);
      }
    };

    return {
      router,
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
      teams,
      remove,
      links,
      busy,
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
