<template>
  <app-layout :busy="busy">
    <div>
      <page-title-box title="Home Board">
      
      <create-button title="Add Task" @click="showCreate =true"/>
        <el-dropdown>
          <el-button type="primary" style="margin-left: 15px">
            Employees<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
              
                @click="
                  loadTask(null)
                "
                >All Employees</el-dropdown-item
              >
              <el-dropdown-item
                v-for="em in employees"
                :key="em.id"
                @click="
                  loadTask(em.id)
                "
                >{{ em.name }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </page-title-box>
    </div>
    <div
      class="home-page admin"
      :class="{ hasProposal: !!employeeProposals.length }"
    >
      <div class="task-box-list">
        <div :sm="24" :md="4.8" v-for="(box, index) in tasks" :key="index">
          <div class="box-card">
           <div class="card-header">
                <span
                  ><b>{{ box.title }}</b></span
                >
               
              </div>
            <ul class="recent-task-list">
              <li v-for="(item, i) in box.items" :key="i" :style="{
                border: `1px solid ${item.category.color.border}`,
                color: item.category.color.text,
                backgroundColor: item.category.color.bg,
              }">
                <div class="avatar-box">
                  <el-avatar :size="25">
                    <img :src="item.employee.model.avatar.url" />
                  </el-avatar>
                </div>
                <div class="task-line">
                  <b>{{ item.employee.model.name }}</b>
                  <small class="center">{{ atNow(item.created_at) }}</small>
                  <el-dropdown>
                    <span class="el-dropdown-link">
                      <el-icon class="el-icon--right">
                        <arrow-down />
                      </el-icon>
                    </span>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item
                          v-for="(s, index) in statusList
                            .filter(
                              (e) => ![0, 1, 2, 3, 6, 7].includes(e.status)
                            )
                            .filter((s) => s.status != item.status)"
                          :key="index"
                          @click="changeStatus(s.status, item.id, box.items, i)"
                        >
                          {{ s.title }}
                        </el-dropdown-item>
                        <el-dropdown-item v-if="item.status == 4" @click="doArchive(item, i)">
                          Archive
                        </el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </div>
                <div
                  class="text-box"
                  @click="go({ name: 'task.show', params: { id: item.id } })"
                >
                  {{ item.title }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="right-side-bar">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>Employee Proposal</span>
            </div>
          </template>
          <ul class="employee-proposals">
            <li v-for="(proposal, i) in employeeProposals" :key="i">
              <div
                class="avatar-box"
                @click="
                  go({
                    name: 'userProfile',
                    params: { user: proposal.user.id },
                  })
                "
              >
                <va-avatar :src="proposal.user.avatar.url" :size="30" />
              </div>
              <div class="line-one">
                <div>
                  <el-link
                    :underline="false"
                    @click="
                      go({
                        name: 'userProfile',
                        params: { user: proposal.user.id },
                      })
                    "
                    ><b>{{ proposal.user.name }}</b></el-link
                  >
                  <small style="text-align: center">{{
                    atNow(proposal.created_at)
                  }}</small>
                </div>
                <div>Send you Employee Proposal as empoyeee</div>
              </div>
              <div class="line-two">
                <el-button
                  size="small"
                  type="primary"
                  @click="Accepted(proposal, i)"
                >
                  Accepted
                </el-button>
                <el-button
                  size="small"
                  type="danger"
                  @click="Deny(proposal, i)"
                >
                  Deny
                </el-button>
              </div>
            </li>
          </ul>
        </el-card>
      </div>
    </div>
    <add-task
      v-model:show="showCreate"
      :employees="employees"
      :categories="categories"
    :taskTypes="taskTypes"
      @push="push"
    ></add-task>
  </app-layout>
</template>

<script>
import AppLayout from "../../Layouts/app-layout.vue";
import PageTitleBox from "../../Components/PageTitleBox.vue";
import { ref, computed, onMounted } from "vue";
import { statusList } from "../../Plugins/utility";
import { recentTasks } from "./api";
import moment from "moment";
import { useRouter } from "vue-router";
import statusBtnVue from "../../Components/statusBtn.vue";
import { ArrowDown,Plus } from "@element-plus/icons-vue";
import CreateButton from "../../Components/CreateButton.vue";
import AddTask from "../Task/Create.vue";
import { dropdowns } from "../../Plugins/utility";
export default {
  components: {
    Plus,
    CreateButton,
    ArrowDown,
    AppLayout,
    PageTitleBox,
    statusBtnVue,
    AddTask,
  },
  setup() {
    const busy = ref(false);
    const showCreate = ref(false);
    const employees = ref([]);
    const categories = ref([]);

    const router = useRouter();
    const pendingTasks = ref([]);
    const acceptedTasks = ref([]);
    const workingTasks = ref([]);
    const submitedTasks = ref([]);
    const completedTasks = ref([]);

    const atNow = (date) => {
      return moment(date).fromNow();
    };
    const go = (to) => {
      router.push(to);
    };

    const loadTask = (employee=null)=>{
      recentTasks(0, (data) => {
      pendingTasks.value = data;
    },employee);
    recentTasks(1, (data) => {
      acceptedTasks.value = data;
    },employee);
    recentTasks(2, (data) => {
      workingTasks.value = data;
    },employee);
    recentTasks(3, (data) => {
      submitedTasks.value = data;
    },employee);
    recentTasks(4, (data) => {
      completedTasks.value = data;
    },employee);
    }

    loadTask()

    const tasks = computed(() => {
      return [
        {
          title: "Pending Tasks",
          items: pendingTasks.value,
        },
        {
          title: "Accepted Tasks",
          items: acceptedTasks.value,
        },
        {
          title: "Working Tasks",
          items: workingTasks.value,
        },
        {
          title: "Submited Tasks",
          isSubmit: true,
          items: submitedTasks.value,
        },
        {
          title: "Completed Tasks",
          items: completedTasks.value,
        },
      ];
    });


    const taskTypes = ref([]);
        axios.get(route("taskType.index")).then(({ data }) => {
      taskTypes.value = data;
    });

    const employeeProposals = ref([]);

    axios.get(route("employeeProposal")).then(({ data }) => {
      employeeProposals.value = data;
    });

    const Accepted = async (employee, index) => {
      try {
        await axios.get(route("acceptProposal", { employee }));
        employeeProposals.value.splice(index, 1);
      } catch (error) {
        console.error(error);
      }
    };
    const Deny = async (employee, index) => {
      try {
        await axios.get(route("denyProposal", { employee }));
        employeeProposals.value.splice(index, 1);
      } catch (error) {
        console.error(error);
      }
    };

    const changeStatus = async (status, task, items, i) => {
      try {
        const url = route("task.changeStatus", { task });

        const { data } = await axios.post(url, { status, notify: 0 });

        items.splice(i, 1);
      } catch (error) {
        console.error(error);
      }
    };

    const push = (data) => {
      pendingTasks.value.push(data);
      showCreate.value = false;
    };
    onMounted(() => {
      dropdowns("employees", (data) => {
        employees.value = data;
      });

      dropdowns("categories", (data) => {
        categories.value = data;
      });
    });

     const doArchive = (item, index) => {
      completedTasks.value.splice(index, 1);
      axios.post(route("task.doArchive", { task: item.id }), {
        prop: "user_archive",
        do: item.user_archive ? 0 : 1,
      });
    };

    return {
      atNow,
      go,
      push,
      changeStatus,
      doArchive,
      loadTask,
      statusList,
      busy,
      employeeProposals,
      Accepted,
      Deny,
      showCreate,
      tasks,
      taskTypes,
      employees,
      categories,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-layout {
  display: grid;
  grid-template-columns: auto 270px;
}
.right-side {
  .list-title {
    margin: 5px;
  }
}
</style>
