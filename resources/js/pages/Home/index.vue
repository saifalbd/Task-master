<template>
  <app-layout :busy="busy">
    <div>
      <page-title-box></page-title-box>
    </div>
    <div class="home-page">
      <div>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>Recent Tasks</span>
            </div>
          </template>
          <ul class="recent-task-list">
            <li
              v-for="(item, i) in tasks"
              :key="i"
              @click="go({ name: 'task.show', params: { id: item.id } })"
            >
              <div class="avatar-box">
                <el-avatar :size="35">
                  <img :src="item.employee.model.avatar.url" />
                </el-avatar>
              </div>
              <div class="task-line">
                <b>{{ item.employee.model.name }}</b>
                <small class="center">{{ atNow(item.created_at) }}</small>
              </div>
              <div class="task-line">
                <div class="text-box">
                  {{ item.title }}
                </div>
                <div class="center">
                  <status-btn-vue
                    size="small"
                    :status="item.status"
                  ></status-btn-vue>
                </div>
              </div>
            </li>
          </ul>
        </el-card>
      </div>
      <div></div>
      <div>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>Employee Proposal</span>
            </div>
          </template>
          <ul class="employee-proposals">
            <li v-for="(proposal, i) in employeeProposals" :key="i">
              <div class="avatar-box" @click="go({name:'userProfile',params:{user:proposal.user.id}})">
                <va-avatar :src="proposal.user.avatar.url" :size="30" />
              </div>
              <div class="line-one">
                <div>
                  <el-link :underline="false" @click="go({name:'userProfile',params:{user:proposal.user.id}})"><b>{{proposal.user.name }}</b></el-link>
                  <small style="text-align:center;">{{ atNow(proposal.created_at) }}</small>
                </div>
                <div>Send you Employee Proposal as empoyeee</div>
              </div>
              <div class="line-two">
                <el-button size="small" type="primary"    @click="Accepted(proposal, i)">
                  Accepted
                </el-button>
                  <el-button size="small" type="danger"  @click="Deny(proposal, i)">
                  Deny
                </el-button>
              </div>
            </li>
          </ul>
        </el-card>
      </div>
    </div>
 
  </app-layout>
</template>

<script>
import AppLayout from "../../Layouts/app-layout.vue";
import PageTitleBox from "../../Components/PageTitleBox.vue";
import { ref } from "vue";

import { recentTasks } from "./api";
import moment from "moment";
import { useRouter } from "vue-router";
import statusBtnVue from "../../Components/statusBtn.vue";
export default {
  components: {
    AppLayout,
    PageTitleBox,
    statusBtnVue,
  },
  setup() {
    const busy = ref(false);
    const router = useRouter();
    const tasks = ref([]);

    const atNow = (date) => {
      return moment(date).fromNow();
    };
    const go = (to) => {
      router.push(to);
    };

    recentTasks((data) => {
      tasks.value = data;
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

    return { atNow, go, busy, employeeProposals, Accepted, Deny, tasks };
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
  .s-card {
    border: 1px solid black;
    width: 250px;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
    .s-card-body {
      padding: 5px;
      text-align: center;
    }
    .s-card-footer {
      padding: 5px;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
