<template>
  <va-modal
    v-model="show"
    :fullscreen="true"
    hide-default-actions
    no-outside-dismiss
  
  >
  <!--   class="form-sceen" -->
    <va-inner-loading :loading="busy">
     <div>Chat modal</div>
    </va-inner-loading>
  </va-modal>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mainStore } from "../store/index";

export default defineComponent({
  model: {
    prop: "show",
    event: "change",
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
   

    return {
     props
    };
  },
});
</script>

<style scoped lang="scss">

</style>
