<template>
  <div class="asside-box">
    <el-menu :collapse="!props.lg" default-active="1">
      <el-sub-menu index="1">
        <template #title>
          <el-icon><home-filled /></el-icon>
          <span style="font-weight:bold">Employees</span>
        </template>
        <el-menu-item index="1-1" @click="go({ name: 'home' })">
          <el-icon><home-filled /></el-icon>
          <b>Admin Board</b>
        </el-menu-item>
         <el-menu-item index="1-2" @click="go({ name: 'job.home' })">
          <el-icon><home-filled /></el-icon>
          <b>Job Board</b>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item index="2" @click="go({ name: 'contact' })">
        <el-icon><avatar /></el-icon>
    <template #title><b>Contacts</b></template>
      </el-menu-item>

      <el-sub-menu index="2">
        <template #title>
          <el-icon><avatar /></el-icon>
            <span style="font-weight:bold">Employees</span>
        </template>
        <el-menu-item index="2-1" @click="go({ name: 'employee' })">
          <el-icon><avatar /></el-icon>
          <b>Employees</b>
        </el-menu-item>
        <el-menu-item index="2-2" @click="go({ name: 'department' })">
          <el-icon><connection /></el-icon>
          <b>Department</b>
        </el-menu-item>

        <el-menu-item index="2-3" @click="go({ name: 'designation' })">
          <el-icon><position /></el-icon>
          <b>Designation</b>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item index="3" @click="go({ name: 'client' })">
        <el-icon><user /></el-icon>
          <template #title><b>Clients</b></template>
      </el-menu-item>

        <el-sub-menu index="4">
            <template #title>
          <el-icon><connection /></el-icon>
            <span style="font-weight:bold">Task Type & Category</span>
        </template>
      <el-menu-item index="4" @click="go({ name: 'category' })">
        <el-icon><connection /></el-icon>
           <template #title><b>Category</b></template>
      </el-menu-item>
       <el-menu-item index="4" @click="go({ name: 'taskType' })">
        <el-icon><connection /></el-icon>
           <template #title><b>Task Type</b></template>
      </el-menu-item>
        </el-sub-menu>

      <el-menu-item index="7" @click="go({ name: 'team' })">
        <el-icon><management /></el-icon>
            <template #title><b>Teams</b></template>
       
      </el-menu-item>
      <el-sub-menu index="8">
        <template #title>
          <el-icon><files /></el-icon>
            <span style="font-weight:bold">Projects</span>
        </template>
        <el-menu-item index="8-1" @click="go({ name: 'project' })">
          <b>Assignments (Project)</b>
        </el-menu-item>
        <el-menu-item index="8-2" @click="go({ name: 'job.project' })">
          <b>Jobs (Job)</b>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="9">
        <template #title>
          <el-icon><files /></el-icon>
          <span style="font-weight:bold">Tasks</span>
        </template>
        <el-menu-item index="9-1" @click="go({ name: 'task' })">
          <b>Assignments (Task)</b>
        </el-menu-item>
        <el-menu-item index="9-2" @click="go({ name: 'job.task' })">
          <b>Jobs (Task)</b>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item index="10" @click="go({ name: 'toDoList' })">
        <el-icon><home-filled /></el-icon>
          <template #title> <b>toDoList</b></template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {
  HomeFilled,
  Collection,
  Management,
  Files,
  Connection,
  Avatar,
  Position,
  User,
} from "@element-plus/icons-vue";
import { defineComponent, reactive } from "vue";

import { useRouter } from "vue-router";

export default defineComponent({
    props:{
    lg:{
      type:Boolean,
      required:true,
    }
  },
  components: {
    HomeFilled,
    Collection,
    Management,
    Files,
    Connection,
    Avatar,
    Position,
    User,
  },
  setup(props) {
    const router = useRouter();
    const go = (to) => {
      router.push(to);
    };

    return {
      props,
      go,
    };
  },
});
</script>

<style lang="scss" scoped>
.asside-box {
}
</style>
