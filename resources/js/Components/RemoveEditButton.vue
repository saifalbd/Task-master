<template>
    <div class="flex-right">
        <va-button-group size="small" outline>
              <va-button v-if="props.isView"
            preset="primary"
            size="small"
            @click="emit('viewClick',true)"
            ><va-icon size="small" name="visibility"></va-icon
        ></va-button>  
        <va-button
            preset="primary"
            size="small"
            @click="emit('editClick',true)"
            ><va-icon size="small" name="edit"></va-icon
        ></va-button>
        <va-button preset="primary" size="small"
            ><va-icon
                size="small"
                name="delete"
                color="#ed6c02"
                @click="emit('removeClick',true)"
            ></va-icon
        ></va-button>
    </va-button-group>
    <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        isView:{
            type:Boolean,
            default:false
        }
    },
    setup(props,{emit}) {
        return {emit,props};
    },
};
</script>


