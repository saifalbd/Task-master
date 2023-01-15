<template>
  <div class="va-accordion">
    <router-link class="va-collapse va-collapse--expanded" v-for="item in collapses"  :to="item.to" :key="item.to">
      <div class="va-collapse__header-wrapper">
        <div tabindex="0" aria-controls="panel-uxat8p5p-zuyg-h2de" aria-expanded="true"
          aria-disabled="false" role="button" class="va-collapse__header"
          style="color: rgb(27, 26, 31); background-color: rgb(244, 248, 250);">
          <div class="va-collapse__header__text">{{item.title}}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>

const value = [false, false, false];
const collapses = [
  { title: 'Home', to: { name: 'home' } },
    { title: 'Employee', to: { name: 'employee' } },
    { title: 'Category', to: { name: 'category' } },
      { title: 'Team', to: { name: 'team' } }
  ]

</script>

<style scoped>

</style>