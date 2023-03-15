<template>
  <app-layout :busy="busy">
    <div>
      <page-title-box title="Show Task no job">
        <back-button></back-button>
      </page-title-box>
    </div>
    <div v-if="task">
      <show-task :auth_id="auth_id" :id="id" :task="task">
        
        <el-descriptions direction="horizontal" :column="1" size="large" border>
          <el-descriptions-item label="Employe:">
             <el-link>
     <el-avatar :size="25" :src="task.employee.model.avatar.url" />
      <b style="font-size:15px; margin-left:5px">{{
            task.employee.model.name
          }}</b>
    </el-link>
            
          </el-descriptions-item>
          <el-descriptions-item label="Status:"><status-btn :status="task.status"></status-btn></el-descriptions-item>
             <el-descriptions-item label="Asigned Date:"><b>{{useDateFormat(new Date(task.start), 'DD MMM YY')}}</b></el-descriptions-item>
            <el-descriptions-item label="DeadLine Date:"><b>{{useDateFormat(new Date(task.end), 'DD MMM YY')}}</b></el-descriptions-item>
        </el-descriptions>
      </show-task>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "../../Layouts/app-layout.vue";
import PageTitleBox from "../../Components/PageTitleBox.vue";
import ShowTask from "../../Components/ShowTask/index.vue";
import StatusBtn from "../../Components/statusBtn.vue";
import BackButton from '../../Components/BackButton.vue';
import { reactive, ref } from "vue";
import { mainStore } from "../../store/index";
import {useDateFormat} from '@vueuse/core';
export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  components: {
    AppLayout,
    PageTitleBox,
    ShowTask,
    StatusBtn,
    BackButton
  },
  setup(props) {
    const main = mainStore();
    const auth_id = main.auth_id;
    const task = ref(null);
    const busy = ref(true);

    const show = async () => {
      busy.value = true;
      try {
        const url = route("task.show", { task: props.id });
        const { data } = await axios.get(url);
        task.value = data;
      } catch (error) {
        console.error(error);
      }
      busy.value = false;
    };
    show();

    return {
      busy,
      auth_id,
      id: props.id,
      task,
      useDateFormat
    };
  },
};
</script>

<style lang="scss" scoped></style>
