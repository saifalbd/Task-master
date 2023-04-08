<template>
  <el-dialog
    v-model="props.show"
    :before-close="handleClose"
    :show-close="false"
  >
    <template #header="{ close, titleId, titleClass }">
      <div
        class="my-header"
        style="display: flex; justify-content: space-between"
      >
        <h4 :id="titleId" :class="titleClass">Task Types</h4>
        <el-button type="danger" size="small" @click="close">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          Close
        </el-button>
      </div>
    </template>

  <el-row>
    <el-col :span="24">
         <el-card class="box-card">
    <template #header>
      <div class="card-header" style="display: flex;
    justify-content: space-between;">
        <span>{{updateId?'Edit':'Add'}} Type</span>
         <el-button type="primary" @click="submit">{{updateId?'Update':'Add'}}</el-button>
      </div>
    </template>
   <el-input v-model="type" placeholder="Please input" />
  </el-card>
    </el-col>
    

     <el-col :span="24" style="margin-top:20px;">
         <el-table :data="props.taskTypes" style="width: 100%">
    <el-table-column prop="title" label="Title"  />
      <el-table-column fixed="right" label="Operations" width="120">
      <template  #default="{row}">
        <el-button link type="primary" size="small" 
        @click="remove(row.id)">Delete</el-button
        >
        <el-button link type="primary" size="small" @click="setEdit(row)">Edit</el-button>
      </template>
    </el-table-column>
   
  </el-table>
    </el-col>
  </el-row>

    <template #footer>
     
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";
import { CircleCloseFilled, Pointer } from "@element-plus/icons-vue";

export default defineComponent({
  components: { CircleCloseFilled, Pointer },
  model: {
    prop: "show",
    event: "change",
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    taskTypes:{
        type:Array,
        required:true,
    }
   
  },
  setup(props, { emit }) {
    const type = ref(null);
    const busy = ref(false);
    const updateId = ref(null);
   

   const setEdit = (item)=>{
    updateId.value = item.id;
    type.value = item.value;
   }


   const remove = async (id)=>{
    try {
        const url = route('taskType.destroy',{'task_type':id});
       await axios.delete(url);
       emit('removeType',id)
        
    } catch (error) {
        console.error(error)
    }
   }
   
    const submit =async ()=>{

        if(!type.value) return null;
        try {

           if(updateId.value){
 const url = route('taskType.update',{taskType:updateId.value});
            const {data} = await axios.put(url,{title:type.value});
            emit('pushType',data);
            updateId.value = null;
           }else{
             const url = route('taskType.store');
            const {data} = await axios.post(url,{title:type.value});
            emit('pushType',data);
             updateId.value = null;
           }
            type.value = '';
            
        } catch (error) {
            console.error(error)
        }
    }
    const close = () => {
      emit("update:show", false);
    };
    const add = () => {
      emit("add", true);
    };
   
    const handleClose = (done) => {
      done();
      close();
    };
    return {
        busy,
      props,
      type,
      updateId,
      setEdit,
      remove,
      submit,
      close,
      add,
      handleClose,
    };
  },
});
</script>

<style scoped lang="scss">
.form-title {
  .text {
    font-weight: bold;
  }
}
.actions-btns {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  button {
    margin: 0 5px;
  }
}
</style>
