<template>
  <app-layout :busy="busy">
    <div>
      <page-title-box title="My Task (jobs)">
         <el-button type="primary" @click="go({name:'job.task.archive'})">
            <el-icon>
              <download/>
            </el-icon>
            Archives
          </el-button>
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

    <div class="va-table-responsive">
      <table class="va-table">
        <thead>
          <tr>
            <th>Star</th>
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
          <template v-for="(t,i) in items" :key="t.id">
            <tr>
                <td>
                     <el-button @click="addStar(t)" size="small" :type="t.employee_star?'warning':''" plain round>
          <el-icon>
            <star-filled/>
          </el-icon>
        </el-button>
                </td>
              <td>{{ t.id }}</td>
              <td>
                <el-link @click="
                      go({
                        name: 'job.task.show',
                        params: { id: t.id },
                      })
                    "><b>{{t.title}}</b></el-link>
              </td>
              <td>{{ t.category.title }}</td>
              <td><el-link
          :underline="false"
          @click="
            go({
              name: 'userProfile',
              params: { user: t.assigner.id },
            })
          "
        >
          <el-avatar :size="25" :src="t.assigner.avatar.url" />
          <b class="ml-1">
            {{ t.assigner.name }}
          </b>
        </el-link></td>
               
        
 
              <td>{{ t.start }}</td>
              <td>{{ t.end }}</td>
              <td>
                <status-btn :status="t.status" size="small"></status-btn>
              </td>
              <td>
                <el-button-group>
                  <el-button
                    type="primary"
                    size="small"
                    title="Archive"
                    @click="doArchive(t, i)"
                  >
                    <el-icon>
                      <download />
                    </el-icon>
                  </el-button>

                  <el-button
                    type="primary"
                    size="small"
                    @click="
                      go({
                        name: 'job.task.show',
                        params: { id: t.id },
                      })
                    "
                    title="Show"
                  >
                    <el-icon>
                      <expand />
                    </el-icon>
                  </el-button>
                </el-button-group>
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
import StatusBtn from "../../../Components/statusBtn.vue";
import {StarFilled,Expand,Download} from '@element-plus/icons-vue';
import {useRouter} from 'vue-router';
export default {
  components: {
    AppLayout,
    PageTitleBox,
    StatusBtn,
    StarFilled,Expand,Download
  },
  setup() {
    const router = useRouter();
    const busy = ref(true);
    const items = ref([]);
    const links = ref([]);
    const perPage = ref(10);

    const go = (to)=>{
        router.push(to)
    }
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

    const addStar = (item) => {
        const {employee_star} = item;
      item.employee_star = !employee_star;
      axios.post(route("task.changeStar", { task: item.id }), {
        prop: "employee_star",
        star: employee_star ? 0 : 1,
      });
    };

    const doArchive = (item, index) => {
      items.value.splice(index, 1);
      axios.post(route("task.doArchive", { task: item.id }), {
        prop: "employee_archive",
        do: item.employee_archive ? 0 : 1,
      });
    };

    return { items, links, perPage, busy,go,doArchive,addStar };
  },
};
</script>

<style lang="scss" scoped>
.right {
  display: flex;
  justify-content: flex-end;
}
</style>
