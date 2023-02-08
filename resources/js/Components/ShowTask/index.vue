<template>
  <div class="task-show">
    <show-attachment
      :attachments="task.attachments"
      v-model:show="showAttachModal"
    ></show-attachment>
    <div class="top-part">
      <div>
        <h1>{{ task.title }}</h1>
        <div class="mt-3" v-if="task.attachments.length">
          <va-button
            preset="primary"
            icon="file_present"
            @click="showAttachModal = true"
            >Show Attachments</va-button
          >
        </div>
      </div>
      <slot>
        <h1>Right Info</h1>
      </slot>
    </div>
    <div class="description"><b>Description:</b> {{ task.description }}</div>
    <div class="comment-layout">
      <div class="row">
        <div class="flex sm12 mb-3">
          <comments :comments="comments" :taskId="task.id"></comments>
        </div>
        <div class="flex sm12">
          <va-inner-loading :loading="commentBusy">
            <va-form class="comment-form" ref="form">
              <va-input
                v-model="comment"
                type="textarea"
                label="Comments"
                :min-rows="3"
                :max-rows="5"
                :rules="rs('comment', true)"
              />
              <div class="textarea-bottom">
                <div class="left-side">
                  <va-file-upload
                    class="small"
                    upload-button-text="Upload Attachment"
                    v-model="attachments"
                    dropzone
                  />
                </div>
                <div class="right">
                  <va-button
                    preset="secondary"
                    border-color="primary"
                    @click="addComment"
                  >
                    <va-icon name="comment"></va-icon>
                    <span class="ml-2">Add Comment</span>
                  </va-button>
                </div>
              </div>
            </va-form>
          </va-inner-loading>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLayout from "../../Layouts/app-layout.vue";
import PageTitleBox from "../../Components/PageTitleBox.vue";
import Comments from "./Comments.vue";
import ShowAttachment from "./showAttachment.vue";
import { ref, watch } from "vue";
import {useToast} from 'vuestic-ui';
import { rs } from "../../Plugins/Rule";
export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    task: {
      type: Object,
      required: true,
    },
  },
  components: {
    AppLayout,
    PageTitleBox,
    Comments,
    ShowAttachment,
  },
  setup(props) {
    const {init} = useToast();
    const form = ref(null);
    const task = ref(props.task);
    const comments = ref([]);
    const showAttachModal = ref(false);
    const comment = ref("");
    const attachments = ref([]);
    const commentBusy = ref(false);
    if (props.task) {
      comments.value = props.task.comments;
    }

    watch(props.task, (o) => {
      task.value = o;
      comments.value = o.comments;
    });

    const addComment = async () => {
      let valid = await form.value.validate();
      if (!valid) return null;
      commentBusy.value = true;
      try {
        const url = route("comment.store");
        const formData = new FormData();
        formData.append("model_id", props.id);
        formData.append("model_type", "task");
        formData.append("text", comment.value);
        attachments.value.forEach((file, index) => {
          formData.append(`attachments[${index}]`, file);
        });
        const { data } = await axios.post(url, formData);
        comments.value.push(addProtos(data, { showReplay: false,showAttachModal:false }));
        comment.value = "";
        init({
        message: "Succsess Fully Add Comment",
        color: "#432c50",
        closeable: true,
        duration: 2000,
    })
    form.value.reset()
      } catch (error) {
        console.error(error);
      }
      commentBusy.value = false;
    };
    return {
      rs,
      form,
      showAttachModal,
      commentBusy,
      task,
      addComment,
      comments,
      comment,
      attachments,
    };
  },
};
</script>

<style lang="scss" scoped>
.comment-form {
  padding: 5px;
  background-color: #ffc0cb4d;
  .textarea-bottom {
    display: grid;
    grid-template-columns: auto 200px;
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
