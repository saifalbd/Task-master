<template>
  <form-dialog
    :show="props.show"
    @update:show="emit('update:show', $event)"
    :busy="busy"
    title="Create Task Type"
    @add="save"
  >
    <va-form ref="form">
      <div class="layout gutter--md">
        <div class="row align-content--center">
          <div class="flex xs12">
            <va-input
              v-model="title"
              label="Title"
              placeholder="Title Here"
              :rules="rs('title', true)"
            />
          </div>
        </div>
      </div>
    </va-form>
  </form-dialog>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import FormDialog from "../../Components/FormDialog.vue";
import { rs } from "../../Plugins/Rule";
export default {
  components: { FormDialog },

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    let busy = ref(false);
    const form = ref(null);
    let title = ref("");
    let showColor = ref(false);
    let color = reactive({
      text: "#262824",
      bg: "#FFFFFF",
      border: "#767C88",
    });
    let url = route("taskType.store");

    const save = async () => {
      let valid = await form.value.validate();
      if (!valid) return null;
      try {
        const { data } = await axios.post(url, { title: title.value });
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
    };

    return { props, form, showColor, emit, rs, save, title, busy, }
  },
};
</script>

<style lang="scss" scoped>
.custom-card {
  padding: 5px;
}
</style>
