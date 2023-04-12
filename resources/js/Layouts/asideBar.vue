<template>
  <div class="asside-box">
    <el-menu :collapse="!props.lg" default-active="1">
      <el-sub-menu index="1" :class="{'is-active':isActive(['job.home','home'])}">
        <template #title>
          <el-icon><home-filled /></el-icon>
          <span style="font-weight:bold">Dashboard</span>
        </template>
        <el-menu-item index="1-1" @click="go({ name: 'home' })" :class="{'is-active':isActive(['home'])}">
          <el-icon><home-filled /></el-icon>
          <b>Admin Board</b>
        </el-menu-item>
         <el-menu-item index="1-2" @click="go({ name: 'job.home' })" :class="{'is-active':isActive(['job.home'])}">
          <el-icon><home-filled /></el-icon>
          <b>Job Board</b>
        </el-menu-item>
      </el-sub-menu>

      <!-- <el-menu-item index="2" @click="go({ name: 'contact' })">
        <el-icon><avatar /></el-icon>
    <template #title><b>Contacts</b></template>
      </el-menu-item> -->

      <el-sub-menu index="2" :class="{'is-active':isActive(['employee','department','designation'])}">
        <template #title>
          <el-icon><avatar /></el-icon>
            <span style="font-weight:bold">Employees</span>
        </template>
        <el-menu-item index="2-1" @click="go({ name: 'employee' })" :class="{'is-active':isActive(['employee'])}">
          <el-icon><avatar /></el-icon>
          <b>Employees</b>
        </el-menu-item>
        <el-menu-item index="2-2" @click="go({ name: 'department' })" :class="{'is-active':isActive(['department'])}">
          <el-icon><connection /></el-icon>
          <b>Department</b>
        </el-menu-item>

        <el-menu-item index="2-3" @click="go({ name: 'designation' })" :class="{'is-active':isActive(['designation'])}">
          <el-icon><position /></el-icon>
          <b>Designation</b>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item index="3" @click="go({ name: 'client' })" :class="{'is-active':isActive(['client'])}">
        <el-icon><user /></el-icon>
          <template #title><b>Clients</b></template>
      </el-menu-item>

   <el-sub-menu index="3" :class="{'is-active':isActive(['eventCategory','event'])}">
       <template #title>
          <el-icon><connection /></el-icon>
            <span style="font-weight:bold">Events</span>
        </template>
 
   <el-menu-item index="3-1" @click="go({ name: 'eventCategory' })"  :class="{'is-active':isActive(['eventCategory'])}">
        <el-icon><user /></el-icon>
          <template #title><b>Event Categories</b></template>
      </el-menu-item>

        <el-menu-item index="3-2" @click="go({ name: 'event' })"  :class="{'is-active':isActive(['event'])}">
        <el-icon><user /></el-icon>
          <template #title><b>Events</b></template>
      </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="4"  :class="{'is-active':isActive([ 'category','taskType'])}">
            <template #title>
          <el-icon><connection /></el-icon>
            <span style="font-weight:bold">Task Type & Category</span>
        </template>
      <el-menu-item index="4-1" @click="go({ name: 'category' })" :class="{'is-active':isActive([ 'category'])}">
        <el-icon><connection /></el-icon>
           <template #title><b>Category</b></template>
      </el-menu-item>
       <el-menu-item index="4-2" @click="go({ name: 'taskType' })" :class="{'is-active':isActive([ 'taskType'])}">
        <el-icon><connection /></el-icon>
           <template #title><b>Task Type</b></template>
      </el-menu-item>
        </el-sub-menu>

      <el-menu-item index="5" @click="go({ name: 'team' })" :class="{'is-active':isActive(['team'])}">
        <el-icon><management /></el-icon>
            <template #title><b>Teams</b></template>
       
      </el-menu-item>
      <el-sub-menu index="6" :class="{'is-active':isActive(['project','job.project'])}">
        <template #title>
          <el-icon><files /></el-icon>
            <span style="font-weight:bold">Projects</span>
        </template>
        <el-menu-item index="6-1" @click="go({ name: 'project' })" :class="{'is-active':isActive(['project'])}">
          <b>Assignments (Project)</b>
        </el-menu-item>
        <el-menu-item index="6-2" @click="go({ name: 'job.project' })" :class="{'is-active':isActive(['job.project'])}">
          <b>Jobs (Job)</b>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="7" :class="{'is-active':isActive([ 'task','job.task'])}">
        <template #title>
          <el-icon><files /></el-icon>
          <span style="font-weight:bold">Tasks</span>
        </template>
        <el-menu-item index="7-1" @click="go({ name: 'task' })" :class="{'is-active':isActive([ 'task'])}">
          <b>Assignments (Task)</b>
        </el-menu-item>
        <el-menu-item index="7-2" @click="go({ name: 'job.task' })" :class="{'is-active':isActive([ 'job.task'])}">
          <b>Jobs (Task)</b>
        </el-menu-item>
      </el-sub-menu>

    
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

import { useRouter,useRoute } from "vue-router";

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
    const route = useRoute()
    const go = (to) => {
      router.push(to);
    };

    const isActive = (names)=>{
    return names.includes(route.name)
    }

    return {
      props,
      go,
      isActive,
    };
  },
});
</script>

<style lang="scss" scoped>
.asside-box {
}
</style>
