<template>
  <app-layout>
    <div>
      <page-title-box title="Employees">
     <create-button title="Add Employee" @click="showCreate = true"></create-button>
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
      <template #cell(action)="{ rowData, rowIndex }">
        <div class="flex-right">
          <va-button-group size="small" outline>
            <va-button
              preset="primary"
              size="small"
              @click="rowData.showEdit = true"
              ><va-icon  size="small" name="edit"></va-icon
            ></va-button>
            <va-button preset="primary" size="small"
              ><va-icon
               size="small"
                name="delete"
                color="#ed6c02"
                @click="remove(rowData, rowIndex)"
              ></va-icon
            ></va-button>
          </va-button-group>
          <edit
            v-model:show="rowData.showEdit"
            :positions="positions"
            :item="rowData"
            @replace="replace($event, rowIndex)"
          ></edit>
        </div>
      </template>
    </va-data-table>
    <pagination :links="links" @page="fetchItems"></pagination>
    <create
      v-model:show="showCreate"
      :positions="positions"
      @push="push"
    ></create>
  </app-layout>
</template>

<script>
import AppLayout from "../../Layouts/app-layout.vue";
import PageTitleBox from "../../Components/PageTitleBox.vue";
import Pagination from "../../Components/Pagination.vue";
import Create from "./Create.vue";
import { ref } from "vue";
import Edit from "./Edit.vue";
import CreateButton from '../../Components/CreateButton.vue';
import { confirm, removeSuccess } from "../../Plugins/utility";
import { useToast } from 'vuestic-ui';
export default {
  components: {
    AppLayout,
    PageTitleBox,
    Pagination,
    Create,
    CreateButton,
    Edit,
  },
  setup() {
    // Start Propertise
     const toast = useToast();
    const items = ref([]);
    const positions = ref([]);
    const showCreate = ref(false);
    const links = ref([]);
    const perPage = ref(10);
    const sortBy = ref("name");
    const columns = [
      { key: "id", sortable: true, sortingOptions: ["desc", "asc"] },
      { key: "name", sortable: true },
      { key: "email", sortable: true },
      { key: "position.title", label: "Position", sortable: true },
      { key: "action", thAlign: "right" },
    ];
    const sortingOrder = ref("asc");

    // START Methods
    const fetchItems = async (page) => {
      const url = route("employee.index", {
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

    const replace = (employee, index) => {
      showCreate.value = false;
      items.value.splice(index, 1, employee);
    };
    const push = (employee) => {
      showCreate.value = false;
      items.value.push(employee);
    };

    axios.get(route("positions")).then(({ data }) => (positions.value = data));

    const remove = async (item, index) => {
      const is = await confirm(item, "Employee", "email");
      if (!is) return null;

      try {
        const url = route("employee.destroy", { employee: item.id });
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
      positions,
      columns,
      sortBy,
      remove,
      push,
      replace,
      fetchItems,
      links,
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
