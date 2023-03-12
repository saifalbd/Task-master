<template>
  <form-dialog
    :show="props.show"
    @update:show="emit('update:show', $event)"
    :busy="busy"
    title="Create ToDo"
    @add="save(formEl)"
  >
    <el-form label-position="top" ref="formEl" :model="form" :rules="rules">
      <el-form-item label="Subject">
        <el-input v-model="form.subject"></el-input>
      </el-form-item>
      <el-form-item label="Reminder" class="w-100">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="Select date"
          :shortcuts="shortcuts"
           format="YYYY-MM-DD"
          
        />
      </el-form-item>
          <el-form-item label="Reminder" class="w-100">
      <el-time-select
    v-model="form.time"
    start="08:30"
    step="00:15"
    end="18:30"
    placeholder="Select time"
  />
      </el-form-item>
      <el-form-item label="Description">
        <el-input v-model="form.description" type="textarea"></el-input>
      </el-form-item>
    </el-form>
  </form-dialog>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import FormDialog from "../../Components/FormDialog.vue";
import moment from "moment";
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
    const formEl = ref();

    const form = reactive({
      subject: "",
      date: "",
      time:'',
      description: "",
    });

    const rules = reactive({
      subject: [
        {
          required: true,
          message: "Subject Are Required",
          trigger: "change",
        },
      ],
      date: [
        {
          required: true,
          message: "Reminder Are Required",
          trigger: "change",
        },
      ],
      description: [
        {
          required: true,
          message: "Description Are Required",
          trigger: "change",
        },
      ],
    });

    const shortcuts = reactive([
      {
        text: "Today",
        value: new Date(),
      },
      {
        text: "Tomorrow",
        value: () => {
          const date = new Date();
          // date.setTime(date.getTime() + 3600 * 1000 * 24);
          return date;
        },
      },
    ]);

    let url = route("todo.store");

    const save = async (formEl) => {
      await formEl.validate(async (valid) => {
        if (!valid) return null;
        try {
          const { data } = await axios.post(url, {
            ...form,
            date:moment(form.date).format('YYYY-MM-DD')
          });
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
      });
    };

    return { props, formEl, emit, save, form, rules, busy, form, shortcuts };
  },
};
</script>

<style lang="scss" scoped></style>
