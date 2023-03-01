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
          <div>Status: <status-btn :status="project.status"></status-btn></div>
          <div>
            Project Assin: <b>{{ project.start }}</b>
          </div>
          <div>
            DeadLine: <b>{{ project.end }}</b>
          </div>
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
    const auth_id = ref(main.auth_id);
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
      .then(({ data }) => (members.value = data));
    axios
      .get(route("category.index", { all: true }))
      .then(({ data }) => (categories.value = data));

    const push = (data) => {
        tasks.value.push(data);
        showCreateTask.value = false;
    };

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

    fetchTasks()

    return {
      showCreateTask,
      busy,
      id: props.id,
      project,
      auth_id,
      members,
      categories,
      push,
      tasks
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
