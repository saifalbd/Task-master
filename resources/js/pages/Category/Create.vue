<template>
  <form-dialog
    :show="props.show"
    @update:show="emit('update:show', $event)"
    :busy="busy"
    title="Create Cetegory"
    @add="save"
  >
    <va-form ref="form">
      <div class="layout gutter--md">
        <div class="row align-content--center">
          <div class="flex xs12">
            <va-input v-model="title" label="Title" placeholder="Title Here" :rules="rules.title" />
          </div>
        </div>
      </div>
    </va-form>
  </form-dialog>
</template>

<script>
import { ref } from "@vue/reactivity";
import FormDialog from "../../Components/FormDialog.vue";

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
    let url = route("category.store");
    let rules = {
        title:[(v)=>!!v||'title are requies']
    }

    const save =async () => {
        let valid = await form.value.validate();
         if(!valid) return null;
      try {
        const { data } = await axios.post(url, { title: title.value });
        emit('push',data)
      } catch (error) {
        console.error(error);
      }
    };

    return { props,form, emit, save, title, busy,rules,save };
  },
};
</script>

<style lang="scss" scoped></style>
