<template>
  <app-layout :busy="busy">
    <div>
      <page-title-box title="Project"> </page-title-box>
    </div>
    <div v-if="project">
      <show-project :auth_id="auth_id" :id="id" :project="project">
        <template #tasks>
          <task-list :tasks="tasks" :project_id="project.id" />
        </template>
        <div>
          <h1>
            Assigner: <b>{{ project.assigner.name }}</b>
          </h1>
          <h1>
            Team: <b>{{ project.team.title }}</b>
          </h1>
          <div>Status: 
             <status-btn :dropdown="true" :status="project.status">
              <ul class="status-dropdown">
                <li
                  v-for="(s, index) in statusList.filter(
                    (e) => e.status != project.status
                  )"
                  :key="index"
                  @click="changeStatus(s.status)"
                >
                  {{ s.title }}
                </li>
              </ul>
            </status-btn>
          </div>
          <div>
            Project Assin: <b>{{ project.start }}</b>
          </div>
          <div>
            DeadLine: <b>{{ project.end }}</b>
          </div>
          

        
        </div>
      </show-project>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "../../../Layouts/app-layout.vue";
import PageTitleBox from "../../../Components/PageTitleBox.vue";
import { ref } from "vue";
import { mainStore } from "../../../store/index";
import ShowProject from "../../../Components/ShowProject/index.vue";
import StatusBtn from "../../../Components/statusBtn.vue";
import { statusList } from "../../../Plugins/utility";

import TaskList from "./taskList.vue";
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
    ShowProject,
    StatusBtn,
    TaskList,
  },
  setup(props) {
    const main = mainStore();
    const auth_id = ref(main.auth_id);
    const project = ref(null);
    // Start Propertis
    const busy = ref(true);
    const showCreateTask = ref(false);

    const tasks = ref([]);

    const show = async () => {
      busy.value = true;
      try {
        const url = route("project.show", { project: props.id });
        const { data } = await axios.get(url);
        project.value = data;
      } catch (error) {
        console.error(error);
      }
      busy.value = false;
    };
    show();

 
 

     const fetchTasks = async () => {
      try {
        const url = route("project.task.index", { project:props.id });
        const { data } = await axios.get(url);
        tasks.value = data.map((item) => {
          item.showModel = false;
          return item;
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();

   const changeStatus = async (status) => {
      try {
        const url = route("project.changeStatus", { project: props.id });
        const { data } = await axios.post(url, { status });
        project.value.status = status;
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
      id: props.id,
      project,
      auth_id,
      tasks,
      statusList,
      changeStatus
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
