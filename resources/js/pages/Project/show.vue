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
          <el-descriptions
            direction="horizontal"
            :column="1"
            size="large"
            border
          >
            <el-descriptions-item label="Assigner:">
              <el-link>
                <el-avatar :size="25" :src="project.assigner.avatar.url" />
                <b style="font-size: 15px; margin-left: 5px">{{
                  project.assigner.name
                }}</b>
              </el-link>
            </el-descriptions-item>
            <el-descriptions-item label="Team:">{{
              project.team.title
            }}</el-descriptions-item>
            <el-descriptions-item label="Status:"
              ><status-btn :status="project.status"></status-btn
            ></el-descriptions-item>
            <el-descriptions-item label="Asigned Date:"
              ><b>{{ atNow(project.start) }}</b></el-descriptions-item
            >
            <el-descriptions-item label="DeadLine Date:"
              ><b>{{ atNow(project.end) }}</b></el-descriptions-item
            >
          </el-descriptions>

          <div>
            <create-button
              title="Add Task"
              @click="showCreateTask = true"
            ></create-button>
          </div>

          <add-task
            v-model:show="showCreateTask"
            :members="members"
            :categories="categories"
            :project_id="project.id"
            @push="push"
          ></add-task>
        </div>
      </show-project>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "../../Layouts/app-layout.vue";
import PageTitleBox from "../../Components/PageTitleBox.vue";
import { ref } from "vue";
import { mainStore } from "../../store/index";
import ShowProject from "../../Components/ShowProject/index.vue";
import StatusBtn from "../../Components/statusBtn.vue";
import CreateButton from "../../Components/CreateButton.vue";
import AddTask from "./AddTask.vue";
import TaskList from "./taskList.vue";
import moment from "moment";
import { dropdowns } from "../../Plugins/utility";
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
    CreateButton,
    AddTask,
    TaskList,
  },
  setup(props) {
    const main = mainStore();
    const auth_id = ref(parseInt(main.auth_id));
    const project = ref(null);
    // Start Propertis
    const busy = ref(true);
    const showCreateTask = ref(false);

    const members = ref([]);
    const categories = ref([]);
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

    axios
      .get(route("project.members", { project: props.id }))
      .then(({ data }) => (members.value = data.map(item=>{
        return {id:item.id,name:item.model.name}
      })));
    dropdowns("categories", (data) => {
      categories.value = data;
    });

    const push = (data) => {
      tasks.value.push(data);
      showCreateTask.value = false;
    };

    const fetchTasks = async () => {
      try {
        const url = route("project.task.index", { project: props.id });
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

    const atNow = (date) => moment(date).format("DD MMM YY");

    return {
      showCreateTask,
      busy,
      id: props.id,
      project,
      auth_id,
      members,
      categories,
      push,
      tasks,
      atNow,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
