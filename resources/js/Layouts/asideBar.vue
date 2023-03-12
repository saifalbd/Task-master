<template>
  <div class="asside-box">
    <el-menu default-active="1">
      <el-menu-item index="1" @click="go({ name: 'home' })">
        <el-icon><home-filled /></el-icon>
        <b>Home</b>
      </el-menu-item>

   <el-menu-item index="2" @click="go({ name: 'employee' })">
        <el-icon><avatar /></el-icon>
        <b>Employees</b>
      </el-menu-item>
         <el-menu-item index="3" @click="go({ name: 'department' })">
        <el-icon><user /></el-icon>
        <b>Clients</b>
      </el-menu-item>
             <el-menu-item index="4" @click="go({ name: 'category' })">
            <el-icon><connection /></el-icon>
        <b>Category</b>
      </el-menu-item>

          <el-menu-item index="5" @click="go({ name: 'department' })">
           <el-icon><connection /></el-icon>
        <b>Department</b>
      </el-menu-item>

      <el-menu-item index="6" @click="go({ name: 'designation' })">
        <el-icon><position /></el-icon>
        <b>Designation</b>
      </el-menu-item>

      <el-menu-item index="7" @click="go({ name: 'team' })">
        <el-icon><management /></el-icon>
        <b>Teams</b>
      </el-menu-item>
      <el-sub-menu index="8">
        <template #title>
          <el-icon><files /></el-icon>
          <b>Projects</b>
        </template>
        <el-menu-item index="8-1" @click="go({ name: 'project' })">
          <b>Assignments</b>
        </el-menu-item>
        <el-menu-item index="8-2" @click="go({ name: 'job.project' })">
          <b>jobs</b>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="9">
        <template #title>
          <el-icon><files /></el-icon>
          <b>Tasks</b>
        </template>
        <el-menu-item index="9-1" @click="go({name:'task'})">
          <b>Assignments</b>
        </el-menu-item>
        <el-menu-item index="9-2" @click="go({name:'job.task'})">
          <b>jobs</b>
        </el-menu-item>
      </el-sub-menu>

         <el-menu-item index="10" @click="go({ name: 'toDoList' })">
        <el-icon><home-filled /></el-icon>
        <b>toDoList</b>
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
  User
} from "@element-plus/icons-vue";
import { defineComponent, reactive } from "vue";

import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    HomeFilled,
    Collection,
    Management,
    Files,
    Connection,
    Avatar,
     Position,
     User
  },
  setup() {
    const router = useRouter();
    const go = (to) => {
      router.push(to);
    };
    

    return {
      go,
    
    };
  },
});
</script>

<style lang="scss" scoped>
.asside-box {
 
 
}
</style>
