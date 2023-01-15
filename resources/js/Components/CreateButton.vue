<template>
    <va-button preset="primary" @click="emit('click',true)">
        <va-icon name="add"></va-icon><span>{{props.title}}</span>
    </va-button>
</template>

<script>
export default {
    props:{
        title:{type:String,required:true}
    },
    setup (props,{emit}) {
        return {props,emit}
    }
}
</script>
