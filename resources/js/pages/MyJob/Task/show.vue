<template>
  <app-layout :busy="busy">
    <div>
      <page-title-box title="Show Task">
        
      </page-title-box>
    </div>
    <div v-if="task">
      <show-task :auth_id="auth_id" :id="id" :task="task">
        
            <el-descriptions direction="horizontal" :column="1" size="large" border>
          <el-descriptions-item label="Assigner:">
             <el-link>
     <el-avatar :size="25" :src="task.assigner.avatar.url" />
      <b style="font-size:15px; margin-left:5px">{{
            task.assigner.name
          }}</b>
    </el-link>
            
          </el-descriptions-item>
          <el-descriptions-item label="Status:"><status-btn  :dropdown="true" :status="task.status">
              <ul class="status-dropdown">
                <li
                  v-for="(s, index) in statusList.filter(
                    (e) => e.status != task.status
                  )"
                  :key="index"
                  @click="changeStatus(s.status)"
                >
                  {{ s.title }}
                </li>
              </ul>
            </status-btn></el-descriptions-item>
             <el-descriptions-item label="Asigned Date:"><b>{{useDateFormat(new Date(task.start), 'DD MMM YY')}}</b></el-descriptions-item>
            <el-descriptions-item label="DeadLine Date:"><b>{{useDateFormat(new Date(task.end), 'DD MMM YY')}}</b></el-descriptions-item>
        </el-descriptions>
       
        
      </show-task>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "../../../Layouts/app-layout.vue";
import PageTitleBox from "../../../Components/PageTitleBox.vue";
import ShowTask from "../../../Components/ShowTask/index.vue";
import StatusBtn from "../../../Components/statusBtn.vue";
import { statusList } from "../../../Plugins/utility";
import {mainStore} from '../../../store/index'
import { ref,reactive } from "vue";
import { useToast } from "vuestic-ui";
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
  },
  setup(props) {
    const task = ref(null);
    const busy = ref(true);
       const main = mainStore();
   const auth_id =main.auth_id;

    const { init } = useToast();

    const show = async () => {
      try {
        const url = route("my.task.show", { task: props.id });
        const { data } = await axios.get(url);
        task.value = data;
      } catch (error) {
        console.error(error);
      }
      busy.value = false;
    };
    show();

    const changeStatus = async (status) => {
      try {
        const url = route("task.changeStatus", { task: props.id });
        const { data } = await axios.post(url, { status });
        task.value.status = status;
        init({
          message: "Succsess Fully Update Status",
          color: "#432c50",
          closeable: true,
          duration: 4000,
        });
      } catch (error) {
        console.error(error);
      }
    };

    return {
      busy,
      auth_id,
      id: props.id,
      task,
      changeStatus,
      statusList,
      useDateFormat
    };
  },
};
</script>

<style lang="scss" scoped></style>
