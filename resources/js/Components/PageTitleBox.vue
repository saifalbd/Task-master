<template>
    <div class="top-title-box">
        <div class="top-title">{{props.title}}</div>
        <div>
           <slot></slot>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({
    title:{type:String,default:'Home Page'},
   
})

</script>
<style lang="scss" scoped>
.top-title-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: #97bbff;
    min-height: 50px;
    border-bottom: 4px solid black;
    .top-title{
        font-weight: bold;
        font-size: 20px;
        padding-left: 10px;
        color: #02000e;
    }
}

</style>