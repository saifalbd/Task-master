<template>
    <form-dialog
        :show="props.show"
        @update:show="emit('update:show', $event)"
        :busy="busy"
        title="Create Event"
        @add="save(ruleFormRef)"
    >
    <el-form :model="form" :rules="rules"  ref="ruleFormRef" label-width="120px">
    <el-form-item label="Title" prop="title">
      <el-input v-model="form.title" />
    </el-form-item>

    <el-form-item label="Category" prop="category" label-width="120px">
      <el-select v-model="form.category" placeholder="please select your Category">
        <el-option v-for="(cat,i) in props.categories" :key="i" :label="cat.title" :value="cat.id" />
      </el-select>
    </el-form-item>

      <el-form-item label="Activity time">
      <el-col :span="11">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-time-picker
          v-model="form.time"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
  
   


  
  </el-form>
    </form-dialog>
</template>

<script>
import FormDialog from "../../Components/FormDialog.vue";
import { reactive, ref } from 'vue'
import moment from 'moment';
export default {
    components:{
FormDialog
    },
       props: {
        show: {
            type: Boolean,
            default: false,
        },
        categories:{
            type:Array,
            required:true
        }
    },

    setup (props,{emit}) {
    const busy = ref(false);
    const ruleFormRef = ref();

    const form = reactive({
        title:'',
        category:'',
        date:new Date(),
        time:new Date()
    })

      const rules = reactive({
          title:[
             {
      required: true,
      message: 'Title Are Required',
      trigger: 'change',
    },
          ],
          category:[
            {
                   required: true,
      message: 'Category Are Required',
      trigger: 'change',
            }
          ]
        })

    const save =async (formEl)=>{
        if (!formEl) return

        await formEl.validate( async(valid, fields) => {
          if(!valid) return null
       
 try {
            busy.value = true;
            const url = route('event.store');
            const {data} = await axios.post(url,{
                title:form.title,
                category:form.category,
                date:moment(form.date).format('YYYY-MM-DD'),
                time:moment(form.time).format('h:mm:ss')
            })
            form.title= ''
           busy.value = false; 
        } catch (error) {
           console.error(error) 
        }
        })
       
    }
        return {props,busy,save,form,emit,rules,ruleFormRef}
    }
}
</script>

<style lang="scss" scoped>

</style>