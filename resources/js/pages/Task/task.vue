<template>
    <app-layout>
        <div>
            <page-title-box title="Show Task"> </page-title-box>
        </div>
        <div class="task-show" v-if="task">
            <div class="top-part">
                <div>
                    <h1>{{ task.title }}</h1>
                </div>
                <div>
                    <h1>
                        Employe: <b>{{ task.employee.name }}</b>
                    </h1>
                    <div>Status: <b>endein</b></div>
                    <div>
                        Task Assin: <b>{{ task.start }}</b>
                    </div>
                    <div>
                        DeadLine: <b>{{ task.end }}</b>
                    </div>
                </div>
            </div>
            <div class="description">
                <b>Description:</b> {{ task.description }}
            </div>
            <div class="comment-layout">
                <div class="row">
                    <div class="flex sm12 mb-3">
                        <comments :comments="comments" :taskId="task.id"></comments>
                    </div>
                    <div class="flex sm12">
                        <va-inner-loading :loading="commentBusy">
                            <va-form ref="form">
                                <va-input
                                    v-model="comment"
                                    type="textarea"
                                    label="Comments"
                                    :min-rows="3"
                                    :max-rows="5"
                                />
                                <div>
                                    <va-button-group
                                        preset="secondary"
                                        border-color="primary"
                                        grow
                                        :loading="commentBusy"
                                    >
                                        <va-button></va-button>
                                        <va-button></va-button>
                                        <va-button
                                            color="info"
                                            @click="addComment"
                                            >
                                            <va-icon name="comment"></va-icon>
                                            Add Comment
                                            </va-button
                                        >
                                    </va-button-group>
                                </div>
                            </va-form>
                        </va-inner-loading>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "../../Layouts/app-layout.vue";
import PageTitleBox from "../../Components/PageTitleBox.vue";
import Comments from "./Comments.vue";
import { ref } from "vue";
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
        Comments,
    },
    setup(props) {
        const task = ref(null);
        const comments = ref([]);
        const busy = ref(true);
        const comment = ref("");
        const commentBusy = ref(false);

        const show = async () => {
            try {
                const url = route("task.show", { task: props.id });
                const { data } = await axios.get(url);
                task.value = data;
                comments.value = addProtos(data.comments,{showReplay:false})
            } catch (error) {
                console.error(error);
            }
        };
        show();
        const addComment = async () => {
            commentBusy.value = true;
            try {
                const url = route("comment.store");
                const formData = new FormData();
                formData.append("model_id", props.id);
                formData.append("model_type", "task");
                formData.append("text", comment.value);
                const { data } = await axios.post(url, formData);
                comments.value.push(addProtos(data,{showReplay:false}))
                comment.value = ''
            } catch (error) {
                console.error(error);
            }
            commentBusy.value = false;
        };
        return {
            commentBusy,
            task,
            addComment,
            comments,
            comment,
        };
    },
};
</script>

<style lang="scss" scoped></style>
