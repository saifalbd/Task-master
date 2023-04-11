<template>
  <app-layout :busy="busy">
    <div>
      <page-title-box :title="editTitle">
        <back-button></back-button>
      </page-title-box>
    </div>
     <el-card class="box-card">
 
 
    
          <va-form ref="form">
            <div class="layout gutter--md">
                <div class="row align-content--center">
                    <div class="flex xs12 in-box">
                        <va-input
                            v-model="title"
                            label="Title *"
                            placeholder="Title Here"
                            :rules="rs('title', true)"
                        />
                    </div>

                      <div class="flex xs12 in-box">
                        <va-select
                            v-model="taskType"
                            label="Task Type"
                            placeholder="Type Here"
                            
                            text-by="title"
                            value-by="id"
                             searchable
                            :options="taskTypes"
                        />
                    </div>
                
                    <div class="flex xs12 in-box">
                        <va-select
                            v-model="category"
                            label="Project Category *"
                            placeholder="Category Here"
                            :rules="rs('Category', true)"
                            text-by="title"
                            value-by="id"
                             searchable
                            :options="categories"
                        />
                    </div>

                
                  

                    <div class="flex xs12 in-box">
                        <va-select
                            v-model="employee"
                            label="Task Employee *"
                            placeholder="Task Employee Here"
                            :rules="rs('member',true)"
                         
                            searchable
                            text-by="name"
                            :options="
                                employees
                            "

                        >
                            <template #content="{ value }">
                                <va-chip
                                
                               
                                    size="small"
                                    class="mr-1 my-1"
                                 
                                  
                                >
                                    {{ value.name }}
                                </va-chip>
                            </template>
                        </va-select>
                    </div>
                   
                    <div class="flex xs4 in-box">
                        <va-input
                            v-model="start"
                            label="Start *"
                            type="date"
                            placeholder="Start Here"
                            :rules="rs('start', true)"
                        />
                    </div>
                    <div class="flex xs4 in-box">
                        <va-input
                            v-model="end"
                            type="date"
                            label="Dead Line *"
                            placeholder="Dead Line Here"
                            :rules="rs('dead line', true)"
                        />
                    </div>
                      <div class="flex xs4 in-box">
                          <va-time-input  label="End Time" v-model="endTime" />
                    </div>

                    <div class="flex xs12 in-box">
                        <va-file-upload v-model="attachments" dropzone />
                    </div>
                    <div class="flex xs12" style="min-height:150px; margin-bottom:50px">
                           <QuillEditor theme="snow" toolbar="minimal" contentType="html" 
                           v-model:content="description" placeholder="Description Html Contant"/>
                    </div>
                     <div class="flex xs12 in-box" style="text-align:right;">
                        <va-button @click="save">
                            Save
                        </va-button>
                    </div>
                </div>
            </div>
        </va-form>
     </el-card>
  </app-layout>
</template>

<script>
import AppLayout from "../../Layouts/app-layout.vue";
import PageTitleBox from "../../Components/PageTitleBox.vue";
import BackButton from '../../Components/BackButton.vue';
import {  dropdowns } from "../../Plugins/utility";
import {useRouter} from 'vue-router';
import { rs } from "../../Plugins/Rule";
import { ref } from 'vue';
import moment from "moment";
export default {
    components:{
AppLayout,
PageTitleBox,
BackButton
    },
    props:{
        id:{
            type:[String,Number],
            required:true
        }
    },
    setup (props,{emit}) {
        const router = useRouter();
        const employees = ref([]);
        const categories = ref([]);
        const taskTypes = ref([]);
        let editTitle = ref('Edit');
        let busy = ref(true);
        const form = ref(null);
        let title = ref("");
         const taskType = ref(null);
        let category = ref(null);
        let employee = ref(null);
        const start = ref(moment().format(dateFormat));
        const end = ref(null);
        const endTime = ref(new Date())
        const description = ref("");
        const attachments = ref([]);

          axios.get(route('taskType.index')).then(({data})=>{
      taskTypes.value = data;
    })

     dropdowns("employees", (data) => {
      employees.value = data;
    });

    dropdowns("categories", (data) => {
      categories.value = data;
    });


    const show = async()=>{
        try {

            const url = route('task.show',{task:props.id});

            const {data} = await axios.get(url);
            let o = data;
            editTitle.value = `Edit Taks (${o.title})`
               title.value = o.title;
            employee.value ={id: o.employee.id,name:o.employee.model.name};
            category.value = o.category_id;
            start.value = o.start;
            end.value = o.end;
            description.value = o.description;
            taskType.value = o.type_id;

            busy.value = false;
        } catch (error) {
           console.error(error) 
        }
    }

    show()


  const time = ()=>{
            let t = moment(endTime.value);
            if(moment().hour() !=t.hour()){
                return t.format('h:mm');
            }else{
                return ''
            }
        }
        
        const save = async () => {
            let url = route("task.update",{task:props.id});
            let valid = await form.value.validate();
           if (!valid) return null;

             const formData = new FormData();
             formData.append('_method','PUT')
                formData.append("title", title.value);
                formData.append("category", category.value);
                formData.append("employee", employee.value?.id);
                formData.append("start", start.value);
                formData.append("end", end.value);
                 formData.append("endTime", time());
                formData.append("taskType", taskType.value);
                formData.append("description", description.value);
                attachments.value.forEach((file,index)=>{
                     formData.append(`attachments[${index}]`,file); 
                })

            try {
                const { data } = await axios.post(url, formData);
                router.push({name:'task'})
            } catch (error) {
                console.error(error);
                validErorrs(error);
            }
        };
        

        return {
               form,
               editTitle,
            emit,
            save,
            rs,
            busy,
            taskTypes,
            categories,
            employees,
          taskType,
            title,
            start,
            end,
            endTime,
            employee,
            category,
            description,
            attachments,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>