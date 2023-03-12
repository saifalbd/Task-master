<template>
  <app-layout :busy="busy">
    <div>
      <page-title-box title="Employees">
        <create-button
          title="Add Employee"
          @click="showCreate = true"
        ></create-button>
      </page-title-box>
    </div>

    <div class="filter-row">
      <div class="left-side">
        <div class="item">
          <el-select v-model="perPage" placeholder="Per Page">
            <el-option
              v-for="item in [10, 20, 30, 40, 50]"
              :key="item"
              :label="item"
              :value="item"
            />
            <template #prefix>
              <el-icon class="el-input__icon"><collection /></el-icon>
            </template>
          </el-select>
        </div>
      </div>
      <div class="right-side">
        <div class="item right mr-3">
          <el-button-group>
            <el-button
              :type="isCardWise ? 'info' : 'primary'"
              @click="isCardWise = false"
            >
              <el-icon><list /></el-icon>
            </el-button>
            <el-button
              :type="!isCardWise ? 'info' : 'primary'"
              @click="isCardWise = true"
            >
              <el-icon><box /></el-icon>
            </el-button>
          </el-button-group>
        </div>
        <div class="item right">
          <el-input>
            <template #prefix>
              <el-icon class="el-input__icon"><search /></el-icon>
            </template>
          </el-input>
        </div>
      </div>
    </div>

    <el-divider />

    <div class="card-list" v-if="isCardWise">
      <div class="item" v-for="(item, index) in items" :key="index">
        <el-card class="card-box">
          <div class="block">
            <el-avatar :size="200" :src="item.model.avatar.url" />
          </div>

          <div style="padding: 14px">
            <el-descriptions
              :title="item.model.name"
              direction="horizontal"
              :column="1"
              size="small"
              border
            >
              <el-descriptions-item label="Designation:">{{
                item.designation.title
              }}</el-descriptions-item>
              <el-descriptions-item label="Phone:">{{
                item.model.phone
              }}</el-descriptions-item>
              <el-descriptions-item label="Message:"
                ><el-button
                  size="small"
                  type="info"
                  plain
                  @click="goProfile(item.model.id)"
                >
                  <el-icon>
                    <message />
                  </el-icon> </el-button
              ></el-descriptions-item>
              <el-descriptions-item label="Delete:"
                ><el-button
                  size="small"
                  type="danger"
                  plain
                  @click="remove(item, index)"
                >
                  <el-icon>
                    <delete />
                  </el-icon> </el-button
              ></el-descriptions-item>
              <el-descriptions-item label="View:"
                ><el-button
                  size="small"
                  type="info"
                  plain
                  @click="goProfile(item.model.id)"
                >
                  <el-icon>
                    <more />
                  </el-icon> </el-button
              ></el-descriptions-item>
            </el-descriptions>
          </div>
        </el-card>
        <!-- <div class="s-card">
          <div class="s-menu">
                <va-button-dropdown preset="secondary" round>
                  <ul class="drop-down-list">
                    <li @click="item.showEdit =true">Edit</li>
                    <li   @click="remove(item, index)">Delete</li>
                  </ul>
                </va-button-dropdown>
          </div>
          <div class="s-img-box">
            <img :src="item.model.avatar.url" alt="" srcset="">
          </div>
          <div class="s-name">
            {{item.model.name}}
          </div>
          
          <div class="s-position">
            {{item.designation.title}}
          </div>
          <div>
            <el-button @click="goProfile(item.model.id)">Show</el-button>
          </div>
        </div> -->
      </div>
    </div>

    <va-data-table
      v-else
      :items="items"
      :columns="columns"
      :hoverable="true"
      v-model:sort-by="sortBy"
      v-model:sorting-order="sortingOrder"
    >
      <template v-slot:cell(name)="{ rowData }">
        <el-link type="primary" @click="goProfile(rowData.model.id)"
          ><b>{{ rowData.name }}</b></el-link
        >
      </template>
      <template #cell(accepted)="{ value }">
        <va-button preset="plain" class="mr-6 mb-2">{{
          value ? "accepted" : "pending"
        }}</va-button>
      </template>
      <template #cell(action)="{ rowData, rowIndex }">
        <remove-edit-button
          :isEdit="false"
          @editClick="rowData.showEdit = true"
          @removeClick="remove(rowData, rowIndex)"
        >
        </remove-edit-button>
      </template>
    </va-data-table>
    <pagination :links="links" @page="fetchItems"></pagination>
    <create
      v-model:show="showCreate"
      :designations="designations"
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
import CreateButton from "../../Components/CreateButton.vue";
import { confirm, dropdowns, removeSuccess } from "../../Plugins/utility";
import RemoveEditButton from "../../Components/RemoveEditButton.vue";
import { useToast } from "vuestic-ui";
import { useRouter } from "vue-router";
import {
  Delete,
  More,
  Message,
  List,
  Box,
  Search,
  Collection,
} from "@element-plus/icons-vue";

export default {
  components: {
    AppLayout,
    PageTitleBox,
    Pagination,
    Create,
    CreateButton,
    RemoveEditButton,
    Delete,
    More,
    Message,
    List,
    Box,
    Search,
    Collection,
  },
  setup() {
    const router = useRouter();

    // Start Propertise
    const busy = ref(true);
    const toast = useToast();
    const items = ref([]);
    const designations = ref([]);
    const showCreate = ref(false);
    const links = ref([]);
    const perPage = ref(10);
    const sortBy = ref("name");
    const isCardWise = ref(true);
    const columns = [
      { key: "id", sortable: true, sortingOptions: ["desc", "asc"] },
      { key: "name", label: "Name", sortable: true },
      { key: "model.email", label: "Email", sortable: true },
      { key: "model.phone", label: "Phone", sortable: true },

      { key: "designation.title", label: "Designation", sortable: true },
      { key: "accepted", label: "Request", sortable: true },
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
      }).map((item) => {
        item.name = item.model.name;
        return item;
      });
      busy.value = false;
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

    dropdowns("designations", (data) => {
      designations.value = data;
    });

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

    const goProfile = (user) => {
      router.push({ name: "userProfile", params: { user } });
    };

    return {
      busy,
      showCreate,
      perPage,
      sortingOrder,
      items,
      designations,
      columns,
      sortBy,
      remove,
      push,
      replace,
      fetchItems,
      goProfile,
      links,
      isCardWise,
    };
  },
};
</script>

<style lang="scss" scoped>
.right {
  display: flex;
  justify-content: flex-end;
}
.card-list {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .s-card {
    position: relative;
    margin: 5px;
    width: 250px;
    min-height: 250px;
    background-color: #f9f3ef;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    .s-img-box {
      width: 150px;
      aspect-ratio: 1;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid silver;
      > img {
        max-height: 100%;
        max-width: 100%;
      }
    }
    .s-name {
      font-weight: bold;
      font-size: 1.1rem;
    }
    .s-position {
      color: #8e8e8e;
    }
    .s-menu {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
.right-side {
  .va-button-group {
    .va-button {
      height: 35px;
    }
  }
}
</style>
