<template>
    <form-dialog
        :show="props.show"
        @update:show="emit('update:show', $event)"
        :busy="formBusy"
        title="Create Task"
        @add="save"
        :fullscreen="true"
    >
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
                            :options="props.taskTypes"
                        />
                    </div>


                    <div class="flex xs12 in-box">
                        <va-select
                            v-model="category"
                            label="Task Category *"
                            placeholder="Category Here"
                            :rules="rs('Category', true)"
                            text-by="title"
                            value-by="id"
                             searchable
                            :options="props.categories"
                        />
                    </div>

                    <div class="flex xs12 in-box">
                        <va-select
                            v-model="employee"
                            label="Task Employee *"
                            placeholder="Task Employee Here"
                            :rules="rs('member', true)"
                            searchable
                            text-by="name"
                            :options="props.employees"
                        >
                            <template #content="{ value }">
                                <va-chip size="small" class="mr-1 my-1">
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
                          <!-- :format="timeFormat" -->
                    </div>

                  
                    <div class="flex xs12 in-box">
                        <va-file-upload v-model="attachments" dropzone />
                    </div>
                  <div class="flex xs12" style="min-height:150px; margin-bottom:50px" v-if="props.show">
                           <QuillEditor theme="snow" toolbar="minimal" contentType="html" 
                           v-model:content="description" placeholder="Description Html Contant"/>
                    </div>
                </div>
            </div>
        </va-form>
    </form-dialog>
</template>

<script>
import { ref, watch } from "vue";
import FormDialog from "../../Components/FormDialog.vue";
import { rs } from "../../Plugins/Rule";
import moment from "moment";
export default {
    components: { FormDialog },

    props: {
        show: {
            type: Boolean,
            default: false,
        },
        employees: {
            type: Array,
            required: true,
        },
        categories: {
            type: Array,
            required: true,
        },
          taskTypes:{
        type:Array,
        required:true,
    }
    },

    setup(props, { emit }) {
        let busy = ref(false);
        const formBusy = ref(false);
        const form = ref(null);
        let title = ref("");
        let category = ref(null);
        let employee = ref(null);
        const start = ref(moment().format(dateFormat));
        const end = ref(moment().add(1,'day').format(dateFormat));
        const taskType = ref(null);
        const endTime = ref(new Date)
        const timeFormat =  (d) => d?.toLocaleTimeString?.()
        
        const description = ref("");
        const attachments = ref([]);


        watch(()=>props.taskTypes,(vals)=>{
            let has = vals.find(e=>e.is_default);
            if(has){
                taskType.value = has.id;
            }
        },{deep:true})

      
        
        const time = ()=>{
            let t = moment(endTime.value);
            if(moment().hour() !=t.hour()){
                return t.format('h:mm');
            }else{
                return ''
            }
        }

        const save = async () => {
          
        

            let url = route("task.store");
            let valid = await form.value.validate();
            if (!valid) return null;
            formBusy.value = true;
            
             
            try {
                const formData = new FormData();
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

                const { data } = await axios.post(url,formData);

                 title.value = '';
            description.value = '';
                emit(
                    "push",
                    addProtos(data, {
                        action: true,
                        showEdit: false,
                    })
                );
           
            } catch (error) {
                console.error(error);
                validErorrs(error);
            }
            formBusy.value = false
        };

        return {
            props,
            form,
            emit,
            save,
            rs,
            busy,
            formBusy,
taskType,
timeFormat,
            title,
            start,
            end,
            endTime,
            employee,
            category,
            description,
            attachments,
        };
    },
};
</script>


