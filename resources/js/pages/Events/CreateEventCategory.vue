<template>
  <form-dialog
    :show="props.show"
    @update:show="emit('update:show', $event)"
    :busy="busy"
    title="Create Event Cetegory"
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

          <div
            class="flex xs12 mt-2"
            style="display: flex; align-items: center"
          >
            <va-switch
              v-model="showColor"
              true-inner-label="Hide Color"
              false-inner-label="Show Color"
              class="mr-6"
            />
          </div>

          <div class="flex xs12 md4 mt-2" v-if="showColor">
            <label for="">Background Color</label>
                    <va-color-input    v-model="color.bg" />
          </div>
           <div class="flex xs12 md4 mt-2" v-if="showColor">
            <label for="">Border Color Color</label>
             <va-color-input    v-model="color.border" />
          </div>
          <div class="flex xs12 md4 mt-2" v-if="showColor">
            <label for="">Time Color</label>
              <va-color-input    v-model="color.time" />
          </div>
          <div class="flex xs12 md4 mt-2" v-if="showColor">
            <label for="">Cat Color</label>
              <va-color-input    v-model="color.cat" />
          </div>
          <div class="flex xs12 md4 mt-2" v-if="showColor">
            <label for="">Title Color</label>
              <va-color-input    v-model="color.title" />
          </div>

         

          <div class="flex xs12 mt-4" v-if="showColor">
            <div
              class="custom-card"
              :style="{
                border: `2px solid ${color.border}`,
                
                backgroundColor: color.bg,
              }"
            >
             <span :style="{color: color.time}" class="pr-2">Time:</span>
             <span :style="{color: color.cat}" class="pr-2">Category:</span>
             <span :style="{color: color.title}">Event Title</span>
            </div>
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
      time: "#262824",
      cat: "#262824",
      title: "#262824",
      bg: "#FFFFFF",
      border: "#767C88",
    });
    let url = route("eventCategory.store");

    const save = async () => {
      let valid = await form.value.validate();
      if (!valid) return null;
      try {
        const { data } = await axios.post(url, { title: title.value, color });
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

    return { props, form, showColor, emit, rs, save, title, busy, color };
  },
};
</script>

<style lang="scss" scoped>
.custom-card {
  padding: 5px;
}
</style>
