<template>
    <app-layout>
        <div>
            <page-title-box title="Show Task no job"> </page-title-box>
        </div>
        <div v-if="task">
            <show-task :auth_id="auth_id" :id="id" :task="task">
                <div>
                    <h1>
                        Employe: <b>{{ task.employee.name }}</b>
                    </h1>
                    <div>Status: <status-btn :status="task.status"></status-btn></div>
                    <div>
                        Task Assin: <b>{{ task.start }}</b>
                    </div>
                    <div>
                        DeadLine: <b>{{ task.end }}</b>
                    </div>
                </div>
            </show-task>
        </div>
      
    </app-layout>
</template>

<script>
import AppLayout from "../../Layouts/app-layout.vue";
import PageTitleBox from "../../Components/PageTitleBox.vue";
import ShowTask from '../../Components/ShowTask/index.vue';
import StatusBtn from '../../Components/statusBtn.vue';
import { reactive, ref } from "vue";
import {mainStore} from '../../store/index'
export default {
    props: {
        id: {
            type: [String, Number],
            required: true,
        },
    },
    components: {
        AppLayout,
        PageTitleBox,
        ShowTask,
        StatusBtn
    },
    setup(props) {
        const main = mainStore();
        const auth_id =main.auth_id;
        const task = ref(null);
        const busy = ref(true);

       
       

        const show = async () => {
            try {
                const url = route("task.show", { task: props.id });
                const { data } = await axios.get(url);
                task.value = data;
               
            } catch (error) {
                console.error(error);
            }
        };
        show();
       
        return {
            auth_id,
          id:props.id,
            task,
            
            
        };
    },
};
</script>

<style lang="scss" scoped></style>
