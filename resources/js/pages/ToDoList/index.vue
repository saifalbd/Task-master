<template>
  <app-layout-vue :busy="busy">
    <div>
      <page-title-box title="To Do List">
        <create-button-vue
          title="Add ToDo"
          @click="showCreate = true"
        ></create-button-vue>
      </page-title-box>
    </div>
    <div class="filter-row mt-2">
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
        <div class="item right">
          <el-input placeholder="Type something">
            <template #prefix>
              <el-icon class="el-input__icon"><search /></el-icon>
            </template>
          </el-input>
        </div>
      </div>
    </div>
    <el-divider />

    <el-table default-expand-all :data="items" style="width: 100%">
      <el-table-column type="expand">
        <template #default="{ row }">
          <div style="padding: 15px">
            <el-row :gutter="24">
              <el-col
                :sm="24"
                :md="12"
                v-for="(item, i) in row.items"
                :key="i"
                class="mb-4"
              >
                <el-card>
                  <el-descriptions
                    size="large"
                    direction="horizontal"
                    :column="1"
                    border
                  >
                    <template #extra>
                      <div class="pr-1">
                        <el-button-group>
                          <el-button
                            size="small"
                            type="info"
                            plain
                            @click="item.showEdit = true"
                          >
                            <el-icon><edit-pen /></el-icon> Edit
                          </el-button>
                          <el-button
                            size="small"
                            type="danger"
                            plain
                            @click="remove(row.items, i, item)"
                          >
                            <el-icon>
                              <delete />
                            </el-icon>
                            Delete</el-button
                          >
                          <edit-vue
                            v-model:show="item.showEdit"
                            :item="item"
                            @replace="replace($event,item)"
                          ></edit-vue>
                        </el-button-group>
                      </div>
                    </template>
                    <el-descriptions-item label="Subject:">{{
                      item.subject
                    }}</el-descriptions-item>
                    <el-descriptions-item label="Riminder Time:">{{
                      item.time
                    }}</el-descriptions-item>
                    <el-descriptions-item label="Description:">{{
                      item.description
                    }}</el-descriptions-item>
                  </el-descriptions>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Date" prop="date" />
       <el-table-column label="Count" prop="count" />
    </el-table>

    <create-vue v-model:show="showCreate" @push="push"></create-vue>
  </app-layout-vue>
</template>

<script>
import { ref } from "vue";
import CreateButtonVue from "../../Components/CreateButton.vue";
import appLayoutVue from "../../Layouts/app-layout.vue";
import PageTitleBox from "../../Components/PageTitleBox.vue";
import CreateVue from "./Create.vue";
import EditVue from "./Edit.vue";
import {
  Delete,
  More,
  List,
  Box,
  Search,
  Collection,
  EditPen,
} from "@element-plus/icons-vue";
import { groupBy, head, values } from "lodash";

import moment from "moment";

export default {
  components: {
    appLayoutVue,
    CreateButtonVue,
    PageTitleBox,
    CreateVue,
    EditVue,
    Search,
    Delete,
    More,
    List,
    Box,
    Collection,
    EditPen,
  },
  setup() {
    const showCreate = ref(false);
    const busy = ref(false);
    const perPage = ref(15);
    const items = ref([]);

    const fetchItems = async () => {
      try {
        const { data } = await axios.get(route("todo.index"));
        const list = values(
          groupBy(
            data.data.map((item) => {
              item.date = moment(item.date).format("dddd MMM Do YY");;
              return addProtos(item, {
                action: true,
                showEdit: false,
              });
            }),
            "date"
          )
        ).map((items) => {
          return {
            date: head(items).date,
            count:items.length,
            items,
          };
        });

        items.value = list;
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();

    const push = (data) => {
      const date = data.date;
      const group = items.value.find((d) => d.date == date);
      if (group) {
        group.push(data);
      } else {
        items.value.push({
          date,
          coun:1,
          items: [data],
        });
      }

      items.value.push(data);
      showCreate.value = false;
    };
    const replace =(newItem,oldItem) =>{
            
            const subject = newItem.subject;
            const description = newItem.description;

            
            oldItem.subject = subject;
            oldItem.description = description;
               showCreate.value = false;

    }
    const remove = async (list, index, item) => {
      try {
        await axios.delete(route("todo.destroy", { todo: item.id }));
        list.splice(index, 1);
      } catch (error) {
        console.error(error);
      }
    };

    return { showCreate, busy, perPage, push,replace, remove, items };
  },
};
</script>
