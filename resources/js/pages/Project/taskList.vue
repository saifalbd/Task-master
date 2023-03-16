<template>
  <div class="va-table-responsive">
    <table class="va-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Employees</th>
          <th>AssignAt</th>
          <th>DeadLine</th>
          <th>Status</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in props.tasks" :key="index">
          <td>
            {{ item.title }}
          </td>
          <td>
            {{ item.employees.map((u) => u.name).join(",") }}
          </td>
          <td>{{ item.start }}</td>
          <td>{{ item.end }}</td>
          <td>
            <status-btn :status="item.status" size="small"></status-btn>
          </td>
          <td>
            <remove-edit-button
              :isView="true"
              :isEdit="false"
              @viewClick="item.showModel = true"
              @removeClick="remove(rowData, rowIndex)"
            >
              <taskmodel v-model:show="item.showModel" :task="item"></taskmodel>
            </remove-edit-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import StatusBtn from "../../Components/statusBtn.vue";
import RemoveEditButton from "../../Components/RemoveEditButton.vue";
import Taskmodel from "./Taskmodel.vue";
export default {
  components: {
    StatusBtn,
    RemoveEditButton,
    Taskmodel,
  },
  props: {
    project_id: {
      type: Number,
      required: true,
    },
    tasks:{
        type:Array,
        required:true
    }
  },
  setup(props) {
   

   

 

    const remove = () => {};

    return { props };
  },
};
</script>

<style lang="scss" scoped>
</style>

