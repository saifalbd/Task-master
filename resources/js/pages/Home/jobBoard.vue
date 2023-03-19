<template>
  <app-layout :busy="busy">
    <div>
      <page-title-box title="Job Board"></page-title-box>
    </div>
    <div class="home-page job">
      <el-row :gutter="24">
        <el-col :sm="24" :md="8"  v-for="(box,index) in tasks" :key="index">
        <el-card class="box-card mb-3">
          <template #header>
            <div class="card-header">
              <span><b>{{box.title}}</b></span>
            </div>
          </template>
          <ul class="recent-task-list">
            <li
              v-for="(item, i) in box.items"
              :key="i"
              @click="go({ name: 'job.task.show', params: { id: item.id } })"
            >
              <div class="avatar-box">
                <el-avatar :size="25">
                  <img :src="item.assigner.avatar.url" />
                </el-avatar>
              </div>
              <div class="task-line">
                <b>{{ item.assigner.name }}</b>
                <small class="center">{{ atNow(item.created_at) }}</small>
              </div>
             <div class="text-box">
                  {{ item.title }}
                </div>
            </li>
          </ul>
        </el-card>
        </el-col>
      </el-row>
     
  
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "../../Layouts/app-layout.vue";
import PageTitleBox from "../../Components/PageTitleBox.vue";
import { ref,computed } from "vue";

import {recentJobTasks as recentTasks } from "./api";
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

    recentTasks(0, (data) => {
      pendingTasks.value = data;
    });
    recentTasks(1, (data) => {
      acceptedTasks.value = data;
    });
    recentTasks(2, (data) => {
      workingTasks.value = data;
    });
    recentTasks(3, (data) => {
      submitedTasks.value = data;
    });
    recentTasks(4, (data) => {
      completedTasks.value = data;
    });

    const tasks = computed(()=>{
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
        items: submitedTasks.value,
      },
      {
        title: "Completed Tasks",
        items: completedTasks.value,
      },
    ]
    });

   

  

    return { atNow, go, busy, tasks };
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
